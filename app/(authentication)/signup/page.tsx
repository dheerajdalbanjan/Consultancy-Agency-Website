"use client"
import { Button } from '@/components/ui/button'
import Formerror from '@/components/ui/formerror'
import Formsuccess from '@/components/ui/formsuccess'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
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
  const [success, setSuccess] = useState(false) ; 
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
    setSuccess(true)
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
          <label className={cn(errors.name && 'text-red-500')}>Full Name</label>
          <Input  {...register('name')} type='text' placeholder='eg: virat kohli' />
          {errors.name && <span className="text-[0.9rem] text-red-500 antialised">{errors.name.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className={cn(errors.email && 'text-red-500')}>Email</label>
          <Input  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
          {errors.email && <span className="text-[0.9rem] text-red-500 antialised">{errors.email.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className={cn(errors.password && 'text-red-500')}>Password</label>
          <Input  {...register('password')} type='password' placeholder='eg: virat kohli' />
          {errors.password && <span className="text-[0.9rem] text-red-500 antialised">{errors.password.message}</span>}
        </div>
      <div className='flex flex-col gap-y-2  my-4'>
          <label className={cn(errors.confirmPass && 'text-red-500')}>Confirm Password</label>
          <Input  {...register('confirmPass')} type='password' placeholder='eg: virat kohli' />
          {errors.confirmPass && <span className="text-[0.9rem] text-red-500 antialised">{errors.confirmPass.message}</span>}
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

        {success && <div className='py-2'>
        <Formsuccess msg="Successfully Signed Up"></Formsuccess>
      </div>}

        
      </form>  
      
    </div>
  )
}

export default Signup