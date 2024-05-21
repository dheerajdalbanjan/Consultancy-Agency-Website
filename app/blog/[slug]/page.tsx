"use client"


import { Badge } from '@/components/ui/badge';
import { LoaderIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
var ColorThief = require('color-thief');


const Page = ({ params }: { params: { slug: string } }) => {
    const [loading, setLoading] = useState(true)

    const [data, setData]: any = useState() ;


    useEffect(()=>{
        setLoading(true)
        fetch(`/api/blog/${params.slug}`) // Adjust the URL to your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched blogs to the state
        if(data.success)
        setData(data.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });

      handleLoading();
    }, [])

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const handleLoading = async () => {
        await delay(3000);
        setLoading(false);
      };


    const imageLoad = (e: any)=>{
        const element = e.target.parentNode.nextElementSibling ;
        const imgnext = e.target.nextElementSibling ;
        const colorThief = new ColorThief();
        const dominantColor = colorThief.getColor(e.target);
        const gradien = `linear-gradient(to bottom, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent)`;
        const gradien1 = `linear-gradient(to top, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent)`;
        element.style.background = gradien; 
        console.log(imgnext)
        imgnext.style.background = gradien1 ;

    }

  return (
    <div className='min-h-screen py-20'>
        {loading && <div className='fixed z-50 inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center '>

            <LoaderIcon className='animate-spin' />
        </div>}
        <div className='max-w-4xl mx-auto px-8 md:px-0'>
            <h1 className='text-3xl md:text-4xl font-bold my-5 antialiased text-neutral-200'>{data?.title}</h1>
            <div className='  w-full relative  overflow-hidden'>
                <img src={data?.image} crossOrigin='anonymous' onLoad={imageLoad} className='w-full object-fill rounded-lg shadow-lg'/>
                <div className='absolute bottom-0 w-full h-1/2 '></div>
                
            </div>
            <div className='flex flex-col px-4 md:px-8 md:py-8 rounded-b-lg  md:flex-row space-y-4 md:space-y-0 md:items-center justify-between py-5'>
                    <Badge className='text-base w-fit border-none'>{data?.author}</Badge>
                    <div className='flex space-x-1'>
                        {data?.tags.map((e: any, i: number)=><Badge className='dark:!border-neutral-400' variant={'outline'} key={i}>#{e}</Badge>)}
                    </div>
            </div>
            <Markdown className={'prose prose-base prose-neutral prose-headings:text-neutral-200 max-w-full py-5 text-neutral-100 !w-full'}>
                {data?.content}
            </Markdown>
            <div className='py-5 flex md:flex-row flex-col space-y-3 md:space-y-0 md:items-center justify-between'>
                <Badge className='w-fit' variant={'secondary'}>Created at: {data?.createdAt}</Badge>
                <Badge className='w-fit' variant={'outline'}>Updated at: {data?.updatedAt}</Badge>
            </div>
        </div>
    </div>
  )
}

export default Page