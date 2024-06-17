"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import {motion } from 'framer-motion'


const Pricing = ()=>{
    var pricing = [
        {
            type: "Starter Plus",
            mode: "starter",
            name: "40 Minute Starter",
            price: "199",
            sessions_included: "1 session",
            session_length: "40 mins",
            counselor_matching: "non-professional",
            video: "89"
        },
        {
            type: "Starter Pro",
            mode: "starter",
            name: "90 Minute Starter",
            price: "299",
            sessions_included: "1 session",
            session_length: "90 mins",
            counselor_matching: "non-professional",
            video: "89"
        },
        {
            type: "Add On Plus",
            mode: "add on",
            name: "15 Minute Add-On",
            price: "49",
            sessions_included: "1 session",
            session_length: "15 mins",
            counselor_matching: "non-professional",
            video: "89"
        },
        {
            type: "Add On Pro",
            mode: "add on",
            name: "30 Minute Add-On",
            price: "99",
            sessions_included: "1 session",
            session_length: "30 mins",
            counselor_matching: "non-professional",
            video: "89"
        },
    
    ];
    

    

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
                    pricing.slice(0,3).map((plan, i)=>(
                        <motion.div initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (i/10), duration: 0.3}}  key={i} className="w-full" >
                        <Card  className="w-full whitespace-nowrap max-w-md bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg overflow-hidden dark:bg-gray-950">
                        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 text-center">
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                          <p className="text-gray-200 mt-2">Get started with basic plan</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-indigo-500 dark:text-indigo-400">₹{plan.price}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">/session</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Session Length</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.sessions_included} minutes</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Counselor Matching</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.counselor_matching}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Sessions Included</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.sessions_included} session</span>
                            </div>
                          </div>
                          <a href="/pricing" className="w-full"><Button className="w-full mt-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600">
                            Buy now
                          </Button></a>
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