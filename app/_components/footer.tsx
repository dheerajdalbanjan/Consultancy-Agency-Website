import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-6 md:px-12 py-4 border-t dark:border-gray-600 static bottom-0 mt-20 '>
        <p className='font-mono text-sm font-light text-center'>Copyright 2023 OurSoulss</p>
        <div className='text-base font-extralight flex items-center underline'>
            <Link href={'/privacy_policy'}>Privacy Policy</Link>
        </div>
    </div>
  )
}

export default Footer