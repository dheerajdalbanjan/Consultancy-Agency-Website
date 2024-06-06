"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import { ArrowRight } from 'lucide-react'
import { Bai_Jamjuree, Inter, Montserrat, Ubuntu, Ubuntu_Mono } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const b = Bai_Jamjuree({subsets: ['latin'], weight: '400'})

const Hero = () => {
  const router = useRouter() ; 
  return (
    <div className='relative items-center justify-center pb-8 md:py-8 bg-grid-dark_purple/10' style={b.style}>
  <div className='flex h-full pt-24 px-8 items-start justify-center max-w-6xl mx-auto pb-20 w-full flex-col gap-y-2 md:gap-y-3 relative z-10'>
    <Badge variant={'outline'} className='rounded-full mt-4 border-black/50 md:text-base'>We here | We Support | We Console</Badge>
    <h2 className='text-3xl sm:text-4xl md:text-5xl my-4 text-neutral-800 antialiased font-semibold'>Your Feelings Matter, <span className='text-dark_purple-600'>You’re Not Alone</span></h2>
    <h4 className='text-base font-normal text-start max-w-4xl'>Welcome to OurSoulss, your go-to platform for wellness and mental health. Connect with professionals like Psychiatrist, Psychologist, and Therapist, or talk to empathetic peers. We offer 24/7 support to help you through tough times. OurSoulss is always by your side!</h4>
    <a href="/pricing"><Button size={'lg'} className='group mt-6 bg-[#242038] uppercase px-8 hover:opacity-90 rounded-full transition ease mx-auto max-w-fit duration-500'>
      Try now <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2 scale-0 group-hover:scale-100 transition-all duration-300 hover:scale-100'/>
    </Button></a>
  </div>
  {/* SVG Background */}
  {/* <div className='absolute inset-0'>
    <svg className='absolute left-0 top-0 h-full w-1/2 scale-[3] blur-3xl' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(2, 48, 71, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(251, 168, 31, 0.9)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#sw-gradient)" d="M15.1,4.8C11.5,15,-5,13.7,-9.7,2.9C-14.4,-8,-7.2,-28.3,1.1,-27.7C9.4,-27.1,18.7,-5.4,15.1,4.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
    </svg>
  </div> */}
</div>


  )
}

export default Hero