import { LayoutProps } from '@/types'

const AuthLayout = async ({ children }: Readonly<LayoutProps>) => (
  <div className={'min-h-screen grid place-items-center'}>{children}</div>
)

export default AuthLayout
