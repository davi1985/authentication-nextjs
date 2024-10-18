import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  if (isAuthenticated()) return redirect('/')

  return (
    <div className={'min-h-screen grid place-items-center'}>{children}</div>
  )
}

export default AuthLayout
