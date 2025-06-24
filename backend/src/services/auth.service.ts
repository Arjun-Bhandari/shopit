import { supabase } from '../config/supabase'
import { db } from '../db'
import { usersTable } from '../db/schema'
import { eq } from 'drizzle-orm'

export const authService = {
  // Sign up with email
  async signUpWithEmail(email: string, password: string, userData: { name: string, phone?: number }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) throw error

    if (data.user) {
      // Insert into your users table
      await db.insert(usersTable).values({
        id: data.user.id,
        email: data.user.email!,
        name: userData.name,
        phone: userData.phone
      })
    }

    return data
  },

  // Sign in with email
  async signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) throw error
    return data
  },

  // Sign in with Google
  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    
    if (error) throw error
    return data
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }
}