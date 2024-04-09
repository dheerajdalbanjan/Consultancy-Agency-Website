import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const Affiliate = () => {
  return (
    <div className="flex max-w-6xl w-full sm:w-auto mx-auto flex-col space-y-3 items-center justify-center">
            <h2 className="text-3xl w-full sm:text-4xl text-center sm:text-start font-bold  antialiased mt-6 mb-3   list-disc ">Products</h2>
            <div>
                <Card className='overflow-hidden relative group'>
                    <CardHeader className='bg-transparent z-10 absolute top-0 bg-gradient-to-b from-neutral-800 to-neutral-50 filter bg-opacity-5 backdrop-blur-md w-full overflow-hidden'>
                        <CardTitle className=''>Book </CardTitle>
                    </CardHeader>
                    <CardContent className=' p-0 aspect-square '>
                        <Image src={'https://m.media-amazon.com/images/I/81Ls+SBCLiL.SY342.jpg'} height={300} width={300} alt='image' className='object-contain  z-10 group-hover:scale-105 transition-all duration-300 ease-in-out'/>
                        
                    </CardContent>
                </Card>
            </div>
    </div>
  )
}

export default Affiliate