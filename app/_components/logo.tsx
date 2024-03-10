import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}  className='flex gap-x-1 items-center justify-center'>
      <Image src={'/logo.png'} className='text-center' alt='Logo' width={30} height={30} />
      <p className='font-semibold text-xl antialiased font-sans'>OurSoulss</p>
    </Link>
  )
}

export default Logo