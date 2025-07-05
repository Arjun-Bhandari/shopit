import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utilis/api-response';

export const validateAuth = {
  signup: (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body;
    
    if (!email || !password || !name) {
      return next(ApiError.badRequest('Email, password, and name are required'));
    }

    if (password.length < 8) {
      return next(ApiError.badRequest('Password must be at least 8 characters'));
    }

    if (!email.includes('@')) {
      return next(ApiError.badRequest('Invalid email format'));
    }

    next();
  },

  signin: (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return next(ApiError.badRequest('Email and password are required'));
    }

    next();
  }
};