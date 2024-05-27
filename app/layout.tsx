
import type { Metadata } from 'next'
import { Inter, Merriweather_Sans, Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import dynamic  from 'next/dynamic'
import { ThemeProvider } from '@/components/provider/theme-provider'
import Footer from './_components/footer'
import { Toaster } from '@/components/ui/toaster'
import { AuthProvider } from './provider'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import { Dialog, DialogHeader } from '@/components/ui/dialog'
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog'
import { useTheme } from 'next-themes'

const Navbar = dynamic(()=> import('../app/_components/navbar') ,{
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin']})
const merriweather = Merriweather_Sans({subsets: ['latin']})
const poppins = Poppins({subsets:['latin'], weight: '200'})
export const metadata: Metadata = {
  title: 'OurSoulss',
  description: 'We encapsulates our commitment to acknowledging every individual’s emotions and experiences. It serves as a reminder that at OurSoulss, everyone has a supportive community ready to listen, understand, and provide comfort during difficult times.',
  icons:{
    icon: [
      {
        url: "favicon.png",
        href: "/favicon.png" 
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // dark:from-neutral-900 dark:to-neutral-950

  return (
    <html lang="en" suppressHydrationWarning >
      <body className={"min-h-screen w-full bg-[#09090b]    m-0 "}  >
        
      <ThemeProvider
            attribute="class"
            defaultTheme="dark" 
            disableTransitionOnChange
            enableSystem
            key={'theme1'}
          >
            <AuthProvider>
          <Head>
  <link rel="icon" href="/public/favicn.jpg" />
</Head>

        <Navbar />
        
        {children}
        <Footer />
        <Toaster />
        
        </AuthProvider>
        </ThemeProvider>
        
        <Analytics />
        </body>
    </html>
  )
}
