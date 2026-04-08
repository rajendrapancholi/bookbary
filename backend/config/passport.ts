import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';

import type {
  GoogleUserProfile,
  GitHubUserProfile,
  LinkedInUserProfile
} from '../types/oauth.user.types';

import type { AuthRequest } from '../types/express';
import type { Response } from 'express';
import { ENV } from './env';
import type { OAuthUser } from '../models/User';
import { generateRandomPassword } from '../utils/generateRandomPassword';
import { generateToken } from '../utils/generateToken';
import { createUser, fetchUserByEmail } from '../services/auth.service';

export class PassportConfig {
  static initialize() {
    // --- Common user handler ---
    const handleOAuthUser = async (
      profile: any,
      provider: OAuthUser['provider']
    ): Promise<OAuthUser> => {
      let email: string;
      let fname: string;
      let lname: string;

      switch (provider) {
        case 'google': {
          const g = profile as GoogleUserProfile;
          email = g.emails?.[0]?.value ?? `${g.id}@google.fake`;
          fname = g.name?.givenName ?? g.displayName;
          lname = g.name?.familyName ?? '';
          break;
        }
        case 'github': {
          const gh = profile as GitHubUserProfile;

          // GitHub sometimes hides emails — handle both cases safely
          const rawEmail =
            gh.email ||
            (gh.emails && Array.isArray(gh.emails) && gh.emails[0]?.value) ||
            null;

          // Must always have valid, unique email (NOT NULL constraint)
          email =
            rawEmail ?? `${gh.username || gh.login}@users.noreply.github.com`;

          // fname/lname are NOT NULL too — so fallback safely
          fname = gh.name || gh.username || gh.login || 'GitHubUser';
          lname = '';
          break;
        }
        case 'linkedin': {
          const li = profile as LinkedInUserProfile;
          email = li.emailAddress ?? `${li.id}@linkedin.fake`;
          fname = li.localizedFirstName;
          lname = li.localizedLastName;
          break;
        }
        
        default:
          email = `unknown@unknown.fake`;
          fname = 'Unknown';
          lname = '';
      }

      let user = await fetchUserByEmail(email);
      if (!user) {
        const password = await generateRandomPassword();
        user = await createUser({
          fname,
          lname,
          email,
          password,
          role: 'viewer',
          provider: provider as "google" | "github" | "linkedin" | "credentials", 
        });
      }

      return { ...user, provider } as unknown as OAuthUser;
    };

    const verifyCallback =
      (provider: OAuthUser['provider']) =>
      async (
        req: AuthRequest,
        _accessToken: any,
        _refreshToken: any,
        profile: any,
        done: any
      ) => {
        try {
          const res = (req as any).res as Response | undefined;
          if (!res) {
            return done(new Error('No response object available'));
          }
          const user = await handleOAuthUser(profile, provider);

          // Generate JWT
          const token = generateToken(Number(user.uid), user.role==='admin', user.role);

          // Attach to req for middleware
          (req as any).authTokens = { token };

          done(null, { ...user, token });
        } catch (err) {
          done(err, false);
        }
      };

    // --- Strategies ---
    passport.use(
      new GoogleStrategy(
        {
          clientID: ENV.GOOGLE_CLIENT_ID!,
          clientSecret: ENV.GOOGLE_CLIENT_SECRET!,
          callbackURL: `${ENV.BASE_URL}/api/auth/signin/google/callback`,
          passReqToCallback: true,
        },
        verifyCallback('google')
      )
    );

    passport.use(
      new GitHubStrategy(
        {
          clientID: ENV.GITHUB_CLIENT_ID!,
          clientSecret: ENV.GITHUB_CLIENT_SECRET!,
          callbackURL: `${ENV.BASE_URL}/api/auth/signin/github/callback`,
          scope: ['user:email'],
          passReqToCallback: true,
        },
        verifyCallback('github')
      )
    );

    passport.use(
      new LinkedInStrategy(
        {
          clientID: ENV.LINKEDIN_CLIENT_ID!,
          clientSecret: ENV.LINKEDIN_CLIENT_SECRET!,
          callbackURL: `${ENV.BASE_URL}/api/auth/signin/linkedin/callback`,
          scope: ['r_emailaddress', 'r_liteprofile'],
          passReqToCallback: true,
        },
        verifyCallback('linkedin')
      )
    );

    passport.serializeUser((user: any, done) => done(null, user));
    passport.deserializeUser((user: any, done) => done(null, user));
  }
}
