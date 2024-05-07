"use client";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import Formerror from "@/components/ui/formerror";
import Formsuccess from "@/components/ui/formsuccess";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  pin: z
    .string()
    .length(6, { message: "The Pin should contain exactly 6 digits" }),
  password: z.string().min(8, {message: "Password must contain minimum 8 characters"}), 
  confirmPass: z.string()
})
.refine((data) => data.confirmPass === data.password, {
    message: "Password did not match",
    path: ["confirmPass"],
  });

const Page = () => {
    const routerr = useSearchParams()
    const email = routerr.get('email');
    const [click, setClick] = useState(false)
    const [loading, setLoading] = useState(false) 
    const [success, setSuccess] = useState(false) ;
    const [verify, setVerify] = useState(false) ;
    const [actualPin, setActualPin] = useState('') ;
    const router = useRouter() ;
    const [error, setError] = useState(false) ;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{email: email?email:'', pin: '000000', password:'12345678', confirmPass:'12345678'}
  });

  const submi = async (value: z.infer<typeof formSchema>)=>{
    const {email, pin, password} = value ; 
    if(pin == '000000')
    {setValue('pin', '') 
    setLoading(true) ;
    try {
        const res = await fetch('/api/getpin', {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ email: email}),
          });
        const data = await res.json() ;
        setActualPin(data.pin) ;
    } catch (error) {
        console.log(error)
    }
    setLoading(false) ;
    setClick(true) ; }
    else {
        if(!verify && pin == actualPin){
            console.log('success')
            setValue('password', '');
            setValue('confirmPass', '')
            setLoading(true) ; 
            setVerify(true)
            setLoading(false) ;

        }

        else if(verify){
            setLoading(true) ;
            const res = await fetch('/api/changepassword', {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password}),
              });
            const data = await res.json() ;
            console.log(data) ; 
            setSuccess(true)
            setError(false)
            setLoading(false)
            router.push('/login') ;
        }

        if(pin != actualPin){
            setError(true)
        }
    }
  }


  return (


    <div>
      <form method="POST" onSubmit={handleSubmit(submi)}>
        <CardContent>
          {!click && <div className="flex flex-col gap-y-2  my-2">
            <label className={cn(errors.email && "text-red-500")}>Email</label>
            <Input
              {...register("email")}
              type="text"
              placeholder="eg: viratkohli@gmail.com"
            />
            {errors.email && (
              <span className="text-[0.9rem] text-red-500  antialised">
                {errors.email?.message}
              </span>
            )}
          </div>}
          {click && !verify && <div className="flex flex-col gap-y-2  my-2">
            <label className={cn(errors.pin && "text-red-500")}>Pin</label>
            <Input
              {...register("pin")}
              type="number"
              placeholder="eg: 123456"
            />
            {errors.pin && (
              <span className="text-[0.9rem] text-red-500  antialised">
                {errors.pin?.message}
              </span>
            )}
          </div>}

          {verify &&<> <div className="flex flex-col gap-y-2  my-4">
            <label className={cn(errors.password && "text-red-500")}>
              New Password
            </label>
            <Input
              {...register("password")}
              type="password"
              placeholder="eg: virat@18"
            />
            {errors.password && (
              <span className="text-[0.9rem] text-red-500 antialised">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-y-2  my-4">
            <label className={cn(errors.confirmPass && "text-red-500")}>
              Confirm Password
            </label>
            <Input
              {...register("confirmPass")}
              type="password"
              placeholder="eg: virat@18"
            />
            {errors.confirmPass && (
              <span className="text-[0.9rem] text-red-500 antialised">
                {errors.confirmPass.message}
              </span>
            )}
          </div></>}
          
        {success && <Formsuccess  msg="Successfully updated password"/>}
        {click && !verify && !error && <Formsuccess msg="Checkout your email for pin"/> }
        {error && <Formerror error="Incorrect Pin" />}
        </CardContent>


        <CardFooter>
        
      <Button onClick={handleSubmit(submi)} type='submit' className='w-full' disabled={loading?true:false} >
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {click && !verify && 'Verify Pin'}{!click && !verify && 'Request Pin'}{verify && 'Change Password'}</Button>
      </CardFooter>
      </form>
    </div>
  );
};

export default Page;
