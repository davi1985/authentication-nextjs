const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => <div className={'min-h-screen grid place-items-center'}>{children}</div>

export default AuthLayout
