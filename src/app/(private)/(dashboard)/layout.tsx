import { LayoutProps } from '@/types'
import { AppBar } from './_components/AppBar'

const DashboardLayout = async ({ children }: Readonly<LayoutProps>) => (
  <div className="flex min-h-screen w-full flex-col">
    <AppBar />

    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {children}
    </main>
  </div>
)

export default DashboardLayout
