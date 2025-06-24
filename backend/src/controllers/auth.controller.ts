import { Request, Response } from 'express'
import { authService } from '../services/auth.service'
import { ApiResponse, ApiError } from '../utilis/api-response'
export const authController = {
  async signUp(req: Request, res: Response) {
    try {
      const { email, password, name, phone } = req.body
      const data = await authService.signUpWithEmail(email, password, { name, phone })
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

  async googleSignIn(req: Request, res: Response) {
    try {
      const redirectTo = "https://localhost:5173"
      const data = await authService.signInWithGoogle(redirectTo)
      res.json(data)
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  },

  async signOut(req: Request, res: Response) {
    try {
      await authService.signOut()
      res.json({ message: 'Signed out successfully' })
    } catch (error) {
      res.status(400).json({ error: (error as Error).message })
    }
  }
}