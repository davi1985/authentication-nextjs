import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const AuthLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const isAuthenticated = Boolean(await auth())

  if (isAuthenticated) return redirect('/')

  return (
    <div className={'min-h-screen grid place-items-center'}>{children}</div>
  )
}

export default AuthLayout
