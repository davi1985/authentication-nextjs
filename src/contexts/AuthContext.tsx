'use client'

import { User } from '@/entities/User'
import { createContext, ReactNode } from 'react'

type AuthContextValue = { user: User }
type AuthProviderProps = { children: ReactNode; user: User }

export const AuthContext = createContext({} as AuthContextValue)

export const AuthProvider = ({ children, user }: AuthProviderProps) => (
  <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
)
