// Save this file as: src/app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

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

// Runs before React hydrates, so the correct theme class is on <html>
// before first paint — no flash of the wrong theme on load or refresh.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}