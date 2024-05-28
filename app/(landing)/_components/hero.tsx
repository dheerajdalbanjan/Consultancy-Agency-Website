"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Hero = () => {
  const router = useRouter() ; 
  return (
    <div className=' relative    items-center  justify-center  pb-8 ' style={{backgroundImage: "url('/poster.png')",backgroundSize: "cover",
    backgroundRepeat: "no-repeat",}}>
      <div className='flex h-full pt-20 px-6 items-center justify-center  pb-20 w-full flex-col gap-y-2 md:gap-y-3   bg-black/10'>
      <Badge  variant={'outline'} className='rounded-full text-base mt-4 border-black/50 bg-opacity-20 backdrop-blur-sm'>We here | We Support | We Console</Badge>
        <h2 className='text-3xl sm:text-4xl md:text-5xl max-w-xl my-4 text-center text-neutral-800 antialiased font-bold'>Your Feelings Matter, You’re Not Alone</h2>
        
        <h4 className=' text-base font-normal  text-center max-w-lg'>Welcome to oursoulss, a wellness and mental health related platform where you can talk with professionals ( psychiatrist and other dedicated person ) as well as non-professional ( understands you ) . 24/7 support to help you handle difficult times in life. Oursoulss is always on your side.</h4>
        <a href="/pricing"><Button size={'lg'} variant={'outline'} className='group  bg-opacity-50 backdrop-blur-md hover:bg-blue-200 rounded-full transition ease  mx-auto max-w-fit duration-500'>
            Try now <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/></Button></a>
        {/* <div className='relative w-full h-[14rem] sm:h-[18rem] md:h-[24rem]  my-4'>
        <Image src={"/dark-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain hidden dark:block  filter grayscale bg-background mix-blend-lighten'/>
        <Image src={"/light-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain dark:hidden filter grayscale bg-background mix-blend-darken'/>

        </div> */}
      </div>
        <div className='absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-[#F7EEDD]'></div>
        
    </div>
  )
}

export default Hero