import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ayush Mishra - Mobile Developer',
  description: 'Android Developer with expertise in Kotlin, React Native, and scalable backend systems.',
  keywords: 'Android Developer, Mobile Developer, Kotlin, React Native, Software Engineer, Ayush Mishra',
  authors: [{ name: 'Ayush Mishra' }],
  creator: 'Ayush Mishra',
  openGraph: {
    title: 'Ayush Mishra - Mobile Developer & Software Engineer',
    description: 'Android Developer with expertise in Kotlin, React Native, and scalable backend systems.',
    url: '',
    siteName: 'Ayush Mishra Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Mishra - Mobile Developer',
    description: 'Android Developer with expertise in Kotlin, React Native, and scalable backend systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}