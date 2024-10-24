import { auth } from '@/lib/auth'
import { LayoutProps } from '@/types'
import { redirect } from 'next/navigation'

const PublicPages = async ({ children }: Readonly<LayoutProps>) => {
  const isAuthenticated = Boolean(await auth())

  if (isAuthenticated) return redirect('/')

  return children
}

export default PublicPages
