import { withAuth, withAuthorization } from '@/lib/withAuth'
import { NextResponse } from 'next/server'

export const GET = withAuth(
  withAuthorization(async (request) =>
    NextResponse.json({
      user: request.user.id,
      orders: [
        {
          id: 1,
          product: 'Laptop',
          quantity: 2,
          price: 1500,
          status: 'Shipped',
        },
        {
          id: 2,
          product: 'Headphones',
          quantity: 1,
          price: 200,
          status: 'Processing',
        },
        {
          id: 3,
          product: 'Keyboard',
          quantity: 3,
          price: 100,
          status: 'Delivered',
        },
      ],
    })
  )
)
