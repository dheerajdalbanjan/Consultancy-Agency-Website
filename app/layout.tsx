
import type { Metadata } from 'next'
import { Bai_Jamjuree, Inter, Josefin_Sans, Merriweather_Sans, Montserrat, Poppins } from 'next/font/google'
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
import { cn } from '@/lib/utils'

const Navbar = dynamic(()=> import('../app/_components/navbar') ,{
  ssr: false
})


const josafin  = Josefin_Sans({subsets:['latin']})

const inter = Inter({subsets:['latin']})



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
      <body className={cn("min-h-screen w-full  from  m-0  ", inter.className) }  style={{background: 'radial-gradient(circle, rgba(238,224,174,1) 0%, rgba(148,187,233,1) 100%)'}} >
        
      <ThemeProvider
            attribute="class"
            defaultTheme="light" 
            disableTransitionOnChange
            enableSystem
            key={'theme1'}
          >
            <AuthProvider>
          <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '871182718368577');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=871182718368577&ev=PageView&noscript=1"
            />
          </noscript>
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
