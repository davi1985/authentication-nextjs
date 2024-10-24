import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth'
import { User } from '@/entities/User'

type NextRequestWithUser = NextRequest & {
  user: User
}

export const withAuth =
  (handler: (request: NextRequestWithUser) => Promise<NextResponse>) =>
  async (request: NextRequest) => {
    const user = await auth()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const requestWithUser = request as NextRequestWithUser
    requestWithUser.user = user

    return handler(requestWithUser)
  }

export const withAuthorization =
  (handler: (request: NextRequestWithUser) => Promise<NextResponse>) =>
  async (request: NextRequestWithUser) => {
    console.log(`Validate authorization for: ${request.user.email}`)

    return handler(request)
  }
