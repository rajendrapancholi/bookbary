import express from 'express';
import { registerUser, loginUser, me, logout, googleAuth, oauthCallback, githubAuth, linkedinAuth } from '../controllers/authController';
import { protect } from '../middlewares/authMiddleware';
import passport from 'passport';
import asyncHandler from '../middlewares/asyncHandler';

const router = express.Router();

router.get('/me', protect, me); // JWT-protected route, not CSRF-protected
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', protect, logout);


// --- OAuth Providers ---
// --- Google OAuth ---
router.get('/signin/google', googleAuth);
router.get(
  '/signin/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/signin',
  }),
  asyncHandler(oauthCallback)
);

router.get('/signin/google', googleAuth);
router.get(
  '/signin/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: '/signin',
  }),
  asyncHandler(oauthCallback)
);

// GitHub
router.get('/signin/github', githubAuth);
router.get(
  '/signin/github/callback',
  passport.authenticate('github', {
    session: false,
    failureRedirect: '/signin',
  }),
  asyncHandler(oauthCallback)
);

// LinkedIn
router.get('/signin/linkedin', linkedinAuth);
router.get(
  '/signin/linkedin/callback',
  passport.authenticate('linkedin', {
    session: false,
    failureRedirect: '/signin',
  }),
  asyncHandler(oauthCallback)
);

export default router;
