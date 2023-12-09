import React from 'react'
import Logo from './logo'

const Footer = () => {
  return (
    <div className='flex justify-between items-center px-6 py-4 border-t dark:border-gray-600 static bottom-0 mt-20 '>
        <p className='font-mono text-sm font-light text-center'>Copyright 2023 OurSouls</p>
        <div className='text-base font-extralight flex items-center underline'>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer