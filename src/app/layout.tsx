import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chris Aidoo | Co-Founder ',
  description: 'Building the infrastructure for tomorrow. Co-founder of a globally influential technology company. Vision-driven leader in distributed systems and platform engineering.',
  keywords: ['technology', 'co-founder', 'distributed systems', 'platform engineering', 'innovation'],
  authors: [{ name: 'Chris Aidoo' }],
  openGraph: {
    title: 'Chris Aidoo | Co-Founder ',
    description: 'Building the infrastructure for tomorrow.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
