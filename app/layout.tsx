"use client"

import Footer from '@/components/Footer'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import { ThemeProvider } from 'next-themes'
import Head from '@/app/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className='dark:bg-stone-900'>
        <ThemeProvider enableSystem={true} attribute='class' >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
