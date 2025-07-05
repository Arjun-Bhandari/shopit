import { supabase } from '../config/supabase'
import { db } from '../db'
import { usersTable, userRoleEnum } from '../db/schema/user'
import { eq } from 'drizzle-orm'

interface UserData {
  name: string;
  phone?: number;
  role?: 'user' | 'admin' | 'staff';
}

export const authService = {
  // Sign up with email
  async signUpWithEmail(email: string, password: string, userData: UserData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (error) throw error

    if (data.user) {
      // Validate role
      const validRoles = ['user', 'admin', 'staff'];
      const role = validRoles.includes(userData.role as string) ? userData.role : 'user';
      await db.insert(usersTable).values({
        id: data.user.id,
        email: data.user.email!,
        name: userData.name,
        phone: userData.phone,
        role // always a valid value
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
  async signInWithGoogle({ redirectTo }: { redirectTo: string }) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    return { data, error };
  },

  async handleAuthCallback(code: string) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (error) throw error;

    if (data.user) {
      // Check if user exists in our database
      const existingUsers = await db.select()
        .from(usersTable)
        .where(eq(usersTable.id, data.user.id));
      const existingUser = existingUsers[0];

      if (!existingUser) {
        // Create new user with default role
        await db.insert(usersTable).values({
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata.full_name || data.user.email!.split('@')[0],
          role: 'user' // Default role for Google sign-in
        });
      }
    }

    return { data, error };
  },

  // Sign out
  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async refreshToken(refreshToken: string) {
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refreshToken
    });
    
    if (error) throw error;
    return data;
  },

  async forgotPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.CLIENT_URL}/reset-password`
    });
    
    if (error) throw error;
    return { message: 'Password reset email sent' };
  },

  async resetPassword(newPassword: string, accessToken: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
    return { message: 'Password updated successfully' };
  }
}