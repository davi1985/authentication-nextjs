import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function GET() {
  const user = await auth()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    user: user.id,
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
}
