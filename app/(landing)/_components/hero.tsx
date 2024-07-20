"use client"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { url } from 'inspector'
import { ArrowRight, Scale } from 'lucide-react'
import { Bai_Jamjuree, Inter, Montserrat, Ubuntu, Ubuntu_Mono } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const b = Bai_Jamjuree({ subsets: ['latin'], weight: '400' })

const Hero = () => {
  const router = useRouter();
  return (
    <div className='relative overflow-hidden flex mx-auto bg-[#072B4C] items-center justify-center  md:py-8 ' style={inter.style}>
      <div className='flex h-full pt-20 px-8 md:px-1 items-start text-neutral-50 justify-center max-w-6xl mx-auto pb-20 w-full flex-col gap-y-2 md:gap-y-2 relative z-10' >
        <Badge variant={'outline'} className='rounded-full mt-4 border-neutral-200/50 text-neutral-50 md:text-base'>We here | We Support | We Console</Badge>
        <motion.h2 whileInView={{ translateY: 0 }} initial={{ translateY: 15 }} className='text-3xl backdrop-blur md:bg-gradient-to-r from-transparent to-blue-100/70 sm:text-4xl pr-3 rounded-full md:text-5xl my-4 text-neutral-50 antialiased font-semibold'>Your Feelings Matter, <span className='text-[#e2690e]'>You’re Not Alone</span></motion.h2>
        <motion.h4 whileInView={{ translateY: 0 }} initial={{ translateY: 15 }} className='text-base backdrop-blur md:bg-gradient-to-r from-transparent to-yellow-100/30 px-3 rounded-2xl md:rounded-full font-normal text-start max-w-4xl'>Welcome to OurSoulss, your go-to platform for wellness and mental health. Connect with professionals like Psychiatrist, Psychologist, and Therapist, or talk to empathetic peers. We offer 24/7 support to help you through tough times. OurSoulss is always by your side!</motion.h4>
        <a href="/pricing"><motion.button initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className='group mt-6 text-neutral-800 py-2 w-full flex bg-[#FFC107] uppercase px-6 items-center hover:opacity-90 rounded-full transition ease mx-auto max-w-fit duration-500'>
          Try now <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2 scale-0 group-hover:scale-100 transition-all duration-300 hover:scale-100' />
        </motion.button></a>
        <div className='md:absolute top-4 flex md:block !right-0 h-full aspect-auto md:aspect-square -z-10 '>
          <motion.img initial={{ scale: 0.8 }} whileInView={{ scale: 1.1 }} src='/images/hero.png' className='scale-110 md:object-fill w-full ' />
        </div>

      </div>

      <motion.div initial={{ bottom: -160 }} whileInView={{ bottom: -80 }} className='absolute  w-full h-[40%] bg-white -skew-y-6'>

      </motion.div>
    </div>


  )
}

export default Hero