import { getAccessToken } from '@/lib/auth'
import { redirect } from 'next/navigation'

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const accessToken = getAccessToken()

  if (accessToken) {
    return redirect('/')
  }

  return (
    <div className={'min-h-screen grid place-items-center'}>{children}</div>
  )
}

export default AuthLayout
