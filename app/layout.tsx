import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashish Kumar - Professional Profile',
  description: 'Founding Engineer at DataGenie | Big Tech Experience | Achievements & Patents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

