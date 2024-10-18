import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { AppBar } from './_components/AppBar'
import { AuthProvider } from '@/contexts/AuthContext'

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const user = await auth()

  if (!user) redirect('/sign-in')

  return (
    <AuthProvider user={user}>
      <div className="flex min-h-screen w-full flex-col">
        <AppBar />

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          {children}
        </main>
      </div>
    </AuthProvider>
  )
}

export default DashboardLayout
