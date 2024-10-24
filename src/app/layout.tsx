import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'
import { LayoutProps } from '@/types'

export const metadata: Metadata = {
  title: 'Auth | Live #051',
  description: 'Authentication with Next.js',
}

const RootLayout = ({ children }: Readonly<LayoutProps>) => (
  <html lang="en">
    <body className={'antialiased'} suppressHydrationWarning={true}>
      {children}

      <Toaster richColors position="bottom-center" duration={3000} />
    </body>
  </html>
)

export default RootLayout
