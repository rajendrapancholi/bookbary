// src/types/oauthProfile.types.ts

/**
 * ==============================
 *   GOOGLE PROFILE TYPE
 * ==============================
 */
export interface GoogleUserProfile {
  id: string;
  provider: 'google';
  displayName: string;
  name?: {
    familyName?: string;
    givenName?: string;
  };
  emails?: Array<{ value: string }>;
  photos?: Array<{ value: string }>;
}

/**
 * ==============================
 *   GITHUB PROFILE TYPE
 * ==============================
 */
export interface GitHubUserProfile {
  id: string;
  provider: 'github';
  login: string; // GitHub username
  username?: string;
  name?: string | null;
  email?: string | null;
  emails?: Array<{ value: string }>;
  avatar_url?: string;
  profileUrl?: string;
  _json?: {
    id?: number;
    login?: string;
    name?: string | null;
    email?: string | null;
    avatar_url?: string;
    html_url?: string;
  };
}

/**
 * ==============================
 *   LINKEDIN PROFILE TYPE
 * ==============================
 */
export interface LinkedInUserProfile {
  id: string;
  provider: 'linkedin';
  localizedFirstName: string;
  localizedLastName: string;
  emailAddress?: string;
  profilePicture?: {
    displayImage?: string;
  };
}

/**
 * ==============================
 *   ZOHO PROFILE TYPE
 * ==============================
 */
export interface ZohoUserProfile {
  provider: 'zoho';
  First_Name: string;
  Last_Name: string;
  Display_Name: string;
  Email: string;
  ZUID: string;
}

/**
 * ==============================
 *   MICROSOFT PROFILE TYPE
 * ==============================
 */
export interface MicrosoftUserProfile {
  id: string;
  provider: 'microsoft';
  displayName: string;
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  mail?: string;
}

/**
 * ==============================
 *   UNIFIED OAUTH PROFILE TYPE
 * ==============================
 */
export type OAuthProvider =
  | 'google'
  | 'github'
  | 'linkedin'
  | 'zoho'
  | 'microsoft';

export type OAuthProfile =
  | GoogleUserProfile
  | GitHubUserProfile
  | LinkedInUserProfile
  | ZohoUserProfile
  | MicrosoftUserProfile;
