"use client"
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Hero = () => {
  const router = useRouter() ; 
  return (
    <div className='flex flex-col gap-y-4 md:gap-y-7 bg-[#09090b] bg-grid-white/[0.03]   items-center justify-center p-6 pt-20 mx-auto '>
        <h2 className='text-3xl sm:text-4xl md:text-5xl max-w-xl my-4 text-center antialiased font-bold'>Your Feelings Matter, You’re Not Alone</h2>
        <Button variant={'outline'} className='rounded-full px-8 !py-0.5 !bg-transparent'>We here | We Console | We Support</Button>
        <h4 className='md:text-lg  text-base font-light text-center max-w-xl'>OurSoulss provides friendly counseling and emotional support, offering guidance in stress management, relationship advice, and career coaching. Join our community for understanding and comfort during challenging times</h4>
        <a href="/pricing"><Button size={'lg'} variant={'outline'} className='group rounded-full transition ease  mx-auto max-w-fit duration-500'>
            Try for free <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/></Button></a>
        <div className='relative w-full h-[14rem] sm:h-[18rem] md:h-[24rem]  my-8'>
        <Image src={"/dark-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain hidden dark:block  filter grayscale bg-background mix-blend-lighten'/>
        <Image src={"/light-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain dark:hidden filter grayscale bg-background mix-blend-darken'/>

        </div>
        
    </div>
  )
}

export default Hero