"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, CheckIcon } from "lucide-react";
import {motion } from 'framer-motion'; 
import { pricing } from "@/lib/pricing_data";

const Pricing = ()=>{
    

    

    return (
        <div className="flex max-w-6xl w-full sm:w-auto mx-auto flex-col space-y-3 items-center justify-center">
            <h2 className="text-3xl w-full sm:text-4xl text-center sm:text-start font-bold  antialiased mt-6 mb-3   list-disc ">Basic Pricing</h2>
            {/* <div className="flex flex-col md:flex-row my-5 !w-full px-6 sm:px-0 sm:w-fit items-center  justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i)=>(
                        <motion.div initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (i/10), duration: 0.3}}  key={i} ><Card className="!w-full rounded-xl shadow-[#9067C6]/30 bg-opacity-30 backdrop-blur-sm md:w-auto shadow-md  relative overflow-hidden">
                            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 rotate-45 text-neutral-900  text-[13px] uppercase">{e.mode}</p>
                            <CardHeader>
                                <CardTitle>Rs. {e.price}</CardTitle>
                                <CardDescription>
                                    <p className="text-lg ">{e.type}</p>
                                    <p>{e.name}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="">
                                <p>Session Length: <p className="px-2 text-sm inline-flex text-center py-0.5  rounded-full bg-neutral-100 dark:bg-neutral-700">{e.session_length}</p></p>
                                <p>Counsellor Matching: <p className=" text-sm inline-flex text-center py-0.5   ">{e.counselor_matching}</p></p>
                            </CardContent>
                            <CardFooter >
                                <a href="/pricing" className="w-full"><Button className="w-full bg-[#242038] transition-colors duration-300 hover:opacity-95 rounded-full " >Buy now</Button></a>
                            </CardFooter>
                        </Card>
                        </motion.div>
                    ))
                }
            </div> */}
            <div className="flex flex-col md:flex-row my-5 !w-full px-6 sm:px-0 sm:w-fit items-center  justify-between p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.slice(0,4).map((plan, i)=>(
                        <motion.div initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (i/10), duration: 0.3}}  key={i} className="w-full" >
                        <Card
                    key={i}
                    className="p-1 hover:-translate-y-2 transition-all duration-300  bg-opacity-70 backdrop-blur-sm rounded-lg shadow-md"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">
                        {plan.type}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        Get started with basic plan
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="">
                      <div className="text-3xl font-bold text-gray-900">
                        ₹{plan.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        /session
                      </div>
                      <a href="/pricing"><Button  className="mt-4 w-full  rounded-full py-2 px-4">
                        Buy Now
                      </Button></a>
                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        {(plan?.features as string[]).map(
                          (f: any, i: number) => (
                            <li key={i} className="flex items-center whitespace-nowrap">
                              <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                              {f}
                            </li>
                          )
                        )}
                      </ul>
                    </CardContent>
                  </Card></motion.div>
                      ))} </div>
            <a href="/pricing"><Button size={'lg'} variant={'outline'} className='group rounded-full bg-opacity-30 backdrop-blur-sm transition ease py-1 mx-auto max-w-fit duration-500'>
            Explore more <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/>
        </Button></a>
            
        </div>

        
    )
}

export default Pricing ;