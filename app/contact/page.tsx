
"use client"

import React, { useState } from 'react'

import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ReloadIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import Formsuccess from '@/components/ui/formsuccess'

const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email(),
  category: z.string().nonempty() ,
  message: z.string().min(5).max(100)
})


const Page = () => {
  const { data: session } = useSession();
  const [success, setSuccess] = useState(false) ;
  const [loading , setLoading] = useState(false) ;
  const { toast } = useToast();
  const { register, handleSubmit,setValue,  formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })


  const submitee = async (data: z.infer<typeof formSchema>) => {
    setLoading(true) ; 
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    setLoading(false)
    if (response.ok) {
      // toast({
      //   variant: 'constructive',
      //   title: "Successfully sent to the team",
      //   description: "Explore different parts of the website till our team replies you",
      // })

      setSuccess(true)

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
        <label className={cn(errors.name && 'text-red-500')}>Enter your name</label>
        <Input className='bg-opacity-60' {...register('name')} type='text' placeholder='eg: virat kohli' />
        {errors.name && <span className="text-[0.9rem] ml-1 text-red-500 antialised">{errors.name.message}</span>}
      </div>
      <div className='flex flex-col gap-y-2  my-4'>
        <label className={cn(errors.email && 'text-red-500')}>Enter your email</label>
        <Input className='bg-opacity-60'  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
        {errors.email && <span className="text-[0.9rem] ml-1 text-red-500 antialised">{errors.email.message}</span>}
      </div>
      <div className='flex flex-col gap-y-2   my-4'>
        
      <label className={cn(errors.category && 'text-red-500')}>Enter your Problem </label>
        <Select onValueChange={(value)=>setValue('category', value)} {...register('category')}>
          <SelectTrigger className='bg-opacity-60'>
            <SelectValue placeholder="Select you category of concern" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Academic">Academic</SelectItem>
            <SelectItem value="Professional">Professional</SelectItem>
            <SelectItem value="Social">Social</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && <span className="text-[0.9rem] ml-1 text-red-500 antialised">{errors.category.message}</span>}
      </div>
      <div className='flex flex-col gap-y-2  my-4'>
        <label className={cn(errors.message && 'text-red-500')}>Enter your message</label>
        <Textarea className='bg-opacity-60' {...register('message')} placeholder='eg: I want to work with you guys' ></Textarea>
        {errors.message && <span className="text-[0.9rem] ml-1 text-red-500 antialised">{errors.message.message}</span>}
      </div>
      <div className='w-full flex justify-end gap-x-4'>
        <Button type='reset' variant={'outline'} onClick={handleClear}>Clear</Button>
        <Button type='submit' disabled={loading?true:false} >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit</Button>
      </div>

      {success && <div className='py-2'>
        <Formsuccess msg="Successfully sent to the team"></Formsuccess>
      </div>}
    </form>

  )
}

export default Page