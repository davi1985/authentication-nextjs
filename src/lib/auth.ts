import { env } from '@/config/env'
import { JwtPayload, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { prismaClient } from './prismaClient'
import { User } from '@/entities/User'

const getAccessToken = () => cookies().get('accessToken')?.value

const verifyJwt = () => {
  const accessToken = getAccessToken()

  if (!accessToken) return null

  try {
    const { sub: userId } = verify(accessToken, env.JWT_SECRET) as JwtPayload

    return userId ? userId : null
  } catch {
    return null
  }
}

export const isAuthenticated = () => Boolean(verifyJwt())

export const auth = async (): Promise<User | null> => {
  const userId = verifyJwt()

  if (!userId) return null

  try {
    return prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    })
  } catch {
    return null
  }
}
