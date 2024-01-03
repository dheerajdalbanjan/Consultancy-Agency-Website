"use client"
import { Button } from '@/components/ui/button'
import Formerror from '@/components/ui/formerror'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const formSchema = z.object({
  name: z.string().min(5).max(50),
  email: z.string().email(),
  password: z.string().length(8, {message:"The password must be of length 8"}) ,
  confirmPass: z.string().length(8, {message:"The password must be of length 8"})
}).refine(data => data.confirmPass === data.password , {message:"password and confirm password do not match", path: ["confirmPass"]})



const Signup = () => {
  const router = useRouter() ;
  const {register, handleSubmit, formState:{errors} , reset} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  }); 
  const [error, setError] = useState(""); 
  const [loading , setLoading] = useState(false) ;
  const submitt =async (value:z.infer<typeof formSchema>) => {
    setLoading(true)
    const res = await fetch('/api/userExist', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify({email: value.email})
    })

    const {user} = await res.json() ;
    console.log(user + " :userexist")

    if(user){
      setError("The Email Id already exists.")
      return ;
    }

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(value)
    }); 

    setLoading(false)
    if(response.ok){
      console.log("signup success")
      router.push('/login')
    }
    else {
      console.log("error occured while signing up")
    }
  }
  return (
    <div>
      <form action="" method='POST' onSubmit={handleSubmit(submitt)} >
      <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Full Name</label>
          <Input  {...register('name')} type='text' placeholder='eg: virat kohli' />
          {errors.name && <span className="text-base text-red-500 font-light antialised">{errors.name.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Email</label>
          <Input  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
          {errors.email && <span className="text-base text-red-500 font-light antialised">{errors.email.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Password</label>
          <Input  {...register('password')} type='password' placeholder='eg: virat kohli' />
          {errors.password && <span className="text-base text-red-500 font-light antialised">{errors.password.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className='md:text-lg  dark:font-thin'>Confirm Password</label>
          <Input  {...register('confirmPass')} type='password' placeholder='eg: virat kohli' />
          {errors.confirmPass && <span className="text-base text-red-500 font-light antialised">{errors.confirmPass.message}</span>}
        </div>
        <Link href='login' className='text-right  text-sm py-5 '>
          Existing User  <span className='underline'>Login</span>
        </Link>
        {
          error && <Formerror error={error}></Formerror>
        }
        <div className='w-full flex justify-end gap-x-4 mt-5'>
          <Button type='reset' variant={'outline'} onClick={()=>reset()}>Clear</Button>
          <Button type='submit' disabled={loading?true:false} >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit</Button>
        </div>
        
      </form>  
      
    </div>
  )
}

export default Signup