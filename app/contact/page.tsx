
"use client"

import React from 'react'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email(),
  message: z.string().min(5).max(100)
})


const Page = () => {

  
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
    <div className='max-w-3xl mx-auto px-6 py-4  min-h-screen'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl    antialiased font-bold'>Contact Us</h1>
      <form method='post' onSubmit={handleSubmit(submitee)} className='py-6 px-1' >
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg font-thin'>Enter your name</label>
          <Input  {...register('name')} type='text' placeholder='eg: virat kohli' />
          {errors.name && <span className="text-base text-red-500 font-light antialised">{errors.name.message}</span>}
        </div>
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg font-thin'>Enter your email</label>
          <Input  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
          {errors.email && <span className="text-base text-red-500 font-light antialised">{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg font-thin'>Enter your message</label>
          <Textarea  {...register('message')} placeholder='eg: I want to work with you guys' ></Textarea>
          {errors.message && <span className="text-base text-red-500 font-light antialised">{errors.message.message}</span>}
        </div>
        <div className='w-full flex justify-end gap-x-4'>
          <Button type='reset' variant={'outline'} onClick={handleClear}>Clear</Button>
          <Button type='submit' >Submit</Button>
        </div>
      </form>
      
    </div>
  )
}

export default Page