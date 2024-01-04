"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ReloadIcon } from "@radix-ui/react-icons"
import { z } from 'zod'
import Formerror from '@/components/ui/formerror'
import { cn } from '@/lib/utils'
import Formsuccess from '@/components/ui/formsuccess'


const formSchema = z.object({
  email: z.string().email(),
  password: z.string().length(8, { message: "The password must be of length 8" })
})



const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const [loading , setLoading] = useState(false) ;
  const [success, setSuccess] = useState(false) ;
  const router = useRouter()

  const [error, setError] = useState('')

  const submitt = async (value: z.infer<typeof formSchema>) => {
    const { email, password } = value;
    try {
      console.log('tryingto lognin')
      setLoading(true)
      const res = await signIn("credentials", {email, password,redirect:false})
      console.log(res?.status)
      if (res?.error) {
        console.log(res.error)
        setError(res?.error);
        setLoading(false)
        return
      }
      setSuccess(true)
      setLoading(false)
      

      router.replace('/')
      console.log('success')
    } catch (error) {
      console.log('error')
    }
  }
  return (
    <div>
      <form method='POST' onSubmit={handleSubmit(submitt)} >
        <div className='flex flex-col gap-y-2  my-4'>
          <label className={cn(errors.email && 'text-red-500')}>Email</label>
          <Input  {...register('email')} type='text' placeholder='eg: viratkohli@gmail.com' />
          {errors.email && <span className="text-[0.9rem] text-red-500  antialised">{errors.email.message}</span>}
        </div>
        <div className='flex flex-col gap-y-2  my-4'>
          <label className={cn(errors.password && 'text-red-500')}>Password</label>
          <Input  {...register('password')} type='password' placeholder='eg: virat kohli' />
          {errors.password && <span className="text-[0.9rem] text-red-500  antialised">{errors.password.message}</span>}
        </div>
        <Link href='signup' className='text-right  text-sm py-5 '>
          New to OurSoulss <span className='underline'>SignUp</span>
        </Link>

        {
          error && <Formerror error={error}></Formerror>
        }
        {success && <div className='py-2'>
        <Formsuccess msg="Successfully logged In"></Formsuccess>
      </div>}
        <div className='w-full flex justify-end gap-x-4 mt-5'>
          <Button type='reset' variant={'outline'} onClick={() => reset()}>Clear</Button>
          <Button type='submit' disabled={loading?true:false} >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit</Button>
        </div>

        
      </form>

    </div>
  )
}

export default Login