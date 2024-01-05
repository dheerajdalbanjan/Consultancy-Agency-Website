import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-x-1 items-center justify-center'>
      <Link href={'/'} className='font-semibold text-xl antialiased font-sans'>OurSoulss</Link>
    </div>
  )
}

export default Logo