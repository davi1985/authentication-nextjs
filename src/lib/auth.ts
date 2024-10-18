import { env } from '@/config/env'
import { JwtPayload, verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'

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

export const auth = async () => {
  return verifyJwt()
}
