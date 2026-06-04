import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aaronelkin.com'),
  title: {
    default: 'Aaron Elkin — Software Engineer',
    template: '%s | Aaron Elkin',
  },
  description:
    'Software Engineer at Little Caesar\'s and MS CS student at Johns Hopkins. Full-stack engineer specializing in React, TypeScript, C#, and cloud-native systems.',
  keywords: [
    'Aaron Elkin',
    'software engineer',
    'full stack developer',
    'React',
    'TypeScript',
    'Next.js',
    'Johns Hopkins',
    'Michigan State University',
  ],
  authors: [{ name: 'Aaron Elkin', url: 'https://linkedin.com/in/aaronelkin' }],
  creator: 'Aaron Elkin',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aaronelkin.com',
    siteName: 'Aaron Elkin',
    title: 'Aaron Elkin — Software Engineer',
    description:
      'Software Engineer at Little Caesar\'s and MS CS student at Johns Hopkins. Full-stack engineer specializing in React, TypeScript, C#, and cloud-native systems.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaron Elkin — Software Engineer',
    description:
      'Software Engineer at Little Caesar\'s and MS CS student at Johns Hopkins.',
    creator: '@aaronelkin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
