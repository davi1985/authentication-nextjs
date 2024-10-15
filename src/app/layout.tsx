import type { Metadata } from 'next'
import './globals.css'

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
      </body>
    </html>
  )
}
