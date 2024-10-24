import { NextResponse } from 'next/server'

export function middleware() {
  console.log('middleware')

  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}
