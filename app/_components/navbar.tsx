"use client"

import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'
import { UseScrollHook } from '@/hooks/UseScrollTop'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/dark-mode'

const Navbar = () => {
  const scrolled = UseScrollHook() ;

  return (
    <div className={cn(scrolled &&"border-b dark:border-gray-600 shadow-sm", 'flex w-full z-50  items-center justify-between  backdrop-blur supports-[backdrop-filter]:bg-background/90 bg-background  px-6 md:px-12 py-4 fixed top-0')}>
        <Logo />
        <div className='flex gap-x-2 md:gap-x-4 items-center justify-center'>
            <Button >Login</Button>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar