import { Router } from 'express';
import { authController } from '../controllers/auth.controller';
import { validateAuth } from '../middleware/validation';
import { rateLimiter } from '../middleware/rate-limiter';
import { asyncHandler } from '../utilis/asyncHandler';

const router = Router();

// Rate limiting for auth endpoints
router.use(rateLimiter);

// Auth routes
router.post('/signup', validateAuth.signup, asyncHandler(authController.signUp));
router.post('/signin', validateAuth.signin, asyncHandler(authController.signIn));
router.post('/signout', asyncHandler(authController.signOut));
router.get('/google', asyncHandler(authController.googleSignIn));
router.get('/callback', asyncHandler(authController.handleAuthCallback));
router.post('/refresh', asyncHandler(authController.refreshToken));
router.post('/forgot-password', asyncHandler(authController.forgotPassword));
router.post('/reset-password', asyncHandler(authController.resetPassword));

export default router;