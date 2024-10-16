import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Auth | Live #051',
  description: 'Authentication with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'antialiased'} suppressHydrationWarning={true}>
        {children}

        <Toaster richColors position="bottom-center" duration={3000} />
      </body>
    </html>
  )
}
