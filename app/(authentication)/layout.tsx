"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({children}: {children:React.ReactNode}) => {
  
  const pathname = usePathname()
  return (
    <div className='flex flex-col gap-y-5 max-w-3xl mx-auto min-h-screen px-7 py-2'>
      <h1 className='capitalize text-3xl sm:text-4xl md:text-5xl  my-3  antialiased font-bold'>{pathname.slice(1)}</h1>
      <div >
        {children}
      </div>
    </div>
  )
}

export default Layout