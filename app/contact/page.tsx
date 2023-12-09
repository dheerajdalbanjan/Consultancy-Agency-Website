
"use client"

import React from 'react'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email() , 
    message: z.string().min(5).max(100)
})


const Page = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
      })

      function submit(value: z.infer<typeof formSchema>){
        console.log(value)
      }
      return (
    <div className='max-w-3xl mx-auto px-6 py-4  min-h-screen'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl  my-4  antialiased font-bold'>Contact Us</h1>
            <form   action={'mailto:dheerajdalbanjan0403@gmail.com'} className='py-6 px-2' onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col gap-y-2  my-4'>
                    <label className='text-lg font-thin'>Enter your name</label>
                    <Input  {...register('name')} type='text' placeholder='eg: virat kohli' />
                    {errors.name && <span className="text-base text-red-500 font-light antialised">{errors.name.message}</span>}
                </div>
                <div className='flex flex-col gap-y-2  my-4'>
                    <label className='text-lg font-thin'>Enter your email</label>
                    <Input  {...register('email')} type='text' placeholder='eg: virat kohli' />
                    {errors.email && <span className="text-base text-red-500 font-light antialised">{errors.email.message}</span>}
                </div>
                <div className='flex flex-col gap-y-2  my-4'>
                    <label className='text-lg font-thin'>Enter your message</label>
                    <Textarea  {...register('message')}  placeholder='eg: virat kohli' ></Textarea>
                    {errors.message && <span className="text-base text-red-500 font-light antialised">{errors.message.message}</span>}
                </div>
                <Button type='submit' >Submit</Button>
    </div>
  )
}

export default Page