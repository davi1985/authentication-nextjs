import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

import { AuthProvider } from '@/contexts/AuthContext'
import { LayoutProps } from '@/types'

const PrivatePages = async ({ children }: Readonly<LayoutProps>) => {
  const user = await auth()

  if (!user) redirect('/sign-in')

  return <AuthProvider user={user}>{children}</AuthProvider>
}

export default PrivatePages
