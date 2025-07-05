import { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import { ApiResponse, ApiError } from '../utilis/api-response'
export const authController = {
  async signUp(req: Request, res: Response) {
    try {
      const { email, password, name, phone, role } = req.body
      const data = await authService.signUpWithEmail(email, password, { name, phone, role })
      res.json(data) 
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  },

  async signIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const data = await authService.signInWithEmail(email, password)
      res.json(data)
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  },

  // async googleSignIn(req: Request, res: Response) {
  //   try {
  //     let redirectTo = "http://localhost:5173"
  //     const data = await authService.signInWithGoogle({redirectTo})
  //     res.json(data)
  //   } catch (error) {
  //     res.status(400).json({ error: (error as Error).message })
  //   }
  // },
  async googleSignIn(req: Request, res: Response) {
    try {
      const { data, error } = await authService.signInWithGoogle({
        redirectTo: `${process.env.APP_URL}/api/auth/callback`
      });

      if (error) throw ApiError.badRequest(error.message);

      // Supabase will automatically redirect to Google
      return res.status(200).json(
        ApiResponse.success({
          data: { url: data.url },
          message: 'Redirecting to Google'
        })
      );
    } catch (error) {
      if (error instanceof ApiError) {
        return res.status(error.statusCode).json(
          ApiResponse.error({
            message: error.message,
            statusCode: error.statusCode
          })
        );
      }
      return res.status(500).json(
        ApiResponse.error({
          message: 'Internal server error'
        })
      );
    }
  },

  // This is called by Google's OAuth system
  async handleAuthCallback(req: Request, res: Response) {
    try {
      const { code } = req.query;
      
      if (!code || typeof code !== 'string') {
        throw ApiError.badRequest('No code provided');
      }

      const { data, error } = await authService.handleAuthCallback(code);
      
      if (error) throw error;

      // Redirect back to your frontend with success
      return res.redirect(`${process.env.CLIENT_URL}/auth/success`);
    } catch (error) {
      // Redirect to frontend error page
      return res.redirect(`${process.env.CLIENT_URL}/auth/error`);
    }
  },
  async signOut(req: Request, res: Response) {
    try {
      await authService.signOut()
      res.json({ message: 'Signed out successfully' })
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  },
  async refreshToken(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const data = await authService.refreshToken(refreshToken);
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  },

  async forgotPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const data = await authService.forgotPassword(email);
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  },

  async resetPassword(req: Request, res: Response) {
    try {
      const { newPassword, accessToken } = req.body;
      const data = await authService.resetPassword(newPassword, accessToken);
      res.json(data);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  },
}