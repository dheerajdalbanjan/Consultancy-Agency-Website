
"use client"

import React from 'react'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'

const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email(),
  message: z.string().min(5).max(100)
})


const Page = () => {
  const {data: session} = useSession() ;
  console.log('session from contact: ', session);
  
  const {toast} = useToast() ;
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  
const submitee = async ( data: z.infer<typeof formSchema>) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    }, 
    body: JSON.stringify(data)
  }); 
  if (response.ok) {
    toast({
      variant:'constructive', 
      title: "Successfully sent to the team",
      description: "Explore different parts of the website till our team replies you",
    })
    
    console.log("mail sent")
    console.log(toast)
  } else {
    console.log("mail failed")
  }
}

  function handleClear() {
    reset()
  }
  return (
      <form method='post' onSubmit={handleSubmit(submitee)} className=' px-1' >
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Enter your name</label>
          <Input className='bg-opacity-60' {...register('name')} type='text' placeholder='eg: virat kohli' />
          {errors.name && <span className="text-base text-red-500 font-light antialised">{errors.name.message}</span>}
        </div>
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Enter your email</label>
          <Input className='bg-opacity-60'  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
          {errors.email && <span className="text-base text-red-500 font-light antialised">{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Enter your message</label>
          <Textarea  className='bg-opacity-60' {...register('message')} placeholder='eg: I want to work with you guys' ></Textarea>
          {errors.message && <span className="text-base text-red-500 font-light antialised">{errors.message.message}</span>}
        </div>
        <div className='w-full flex justify-end gap-x-4'>
          <Button type='reset' variant={'outline'} onClick={handleClear}>Clear</Button>
          <Button type='submit' >Submit</Button>
        </div>
      </form>
      
  )
}

export default Page