"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import { ArrowRight } from 'lucide-react'
import { Inter, Montserrat, Ubuntu, Ubuntu_Mono } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const Hero = () => {
  const router = useRouter() ; 
  return (
    <div className=' relative    items-center  justify-center  pb-8 md:py-8 '  >
      <div className='flex h-full pt-24 px-8 items-start justify-center max-w-6xl mx-auto   pb-20 w-full flex-col gap-y-2 md:gap-y-3  '>
      <Badge  variant={'outline'} className='rounded-full  mt-4 border-black/50 md:text-base'>We here | We Support | We Console</Badge>
        <h2 className='text-3xl sm:text-4xl md:text-5xl  my-4  text-neutral-800 antialiased font-semibold'>Your Feelings Matter, You’re Not Alone</h2>
        
        <h4 className=' text-base font-normal  text-start max-w-4xl '>Welcome to OurSoulss, your go-to platform for wellness and mental health. Connect with professionals like Psychiatrist, Psychologist, and Therapist, or talk to empathetic peers. We offer 24/7 support to help you through tough times. OurSoulss ia always by your side!</h4>
        <a href="/pricing"><Button size={'lg'} className='group mt-6 bg-[#242038]    hover:opacity-90 rounded-full transition ease  mx-auto max-w-fit duration-500'>
            Try now <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/></Button></a>
        {/* <div className='relative w-full h-[14rem] sm:h-[18rem] md:h-[24rem]  my-4'>
        <Image src={"/dark-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain hidden dark:block  filter grayscale bg-background mix-blend-lighten'/>
        <Image src={"/light-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain dark:hidden filter grayscale bg-background mix-blend-darken'/>

        </div> */}
      </div>
        
    </div>
  )
}

export default Hero