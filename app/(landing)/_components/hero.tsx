
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-y-4 md:gap-y-7  items-center justify-center p-6 max-w-5xl mx-auto '>
        <h2 className='text-3xl sm:text-4xl md:text-5xl max-w-xl my-4 text-center antialiased font-bold'>Your Feelings Matter, You’re Not Alone</h2>
        <h4 className='md:text-lg text-base font-light text-center max-w-xl'>We encapsulates our commitment to acknowledging every individual’s emotions and experiences. It serves as a reminder that at OurSouls, everyone has a supportive community ready to listen, understand, and provide comfort during difficult times.</h4>
        <Button className='group transition ease py-1 mx-auto max-w-fit duration-500'>
            Try For Free <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/>
        </Button>
        <div className='relative w-full h-[14rem] sm:h-[18rem] md:h-[24rem] bg-transparent my-8'>
        <Image src={"/dark-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain hidden dark:block  filter grayscale bg-background mix-blend-lighten'/>
        <Image src={"/light-hero.jpg"} alt="hero Image" fill={true} className='object-cover sm:object-contain dark:hidden filter grayscale bg-background mix-blend-darken'/>

        </div>
        
    </div>
  )
}

export default Hero