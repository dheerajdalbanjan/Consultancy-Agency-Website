import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const montserrat = Montserrat({subsets:['latin']})

const Logo = () => {
  return (
    <Link href={'/'}  className='flex gap-x-2 items-center justify-center' style={montserrat.style}>
      <Image src={'/favicon.png'} className='text-center' alt='Logo' width={25} height={25} />
      <p className='font-semibold text-xl antialiased font-sans dark:text-neutral-50 text-neutral-900'>OURSOULSS</p>
    </Link>
  )
}

export default Logo