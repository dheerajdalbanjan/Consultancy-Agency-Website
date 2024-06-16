import { Bai_Jamjuree, Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Logo = () => {
  return (
    <Link href={'/'}  className='flex gap-x-2 items-center justify-center' >
      <Image src={'/logo.png'} className='text-center' alt='Logo' width={25} height={25} />
      <p className='font-semibold text-xl antialiased dark:text-neutral-50 text-neutral-900'>OurSoulss</p>
    </Link>
  )
}

export default Logo