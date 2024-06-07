"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import {motion } from 'framer-motion'


const Pricing = ()=>{
    const [open, setOpen] = useState(false);
    var pricing = [
        {
            type: "Starter Plus",
            mode: "starter",
            Package: "15 Minute Session Package",
            Price: "₹99",
            SessionsIncluded: "1 session",
            SessionLength: "15 mins",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Starter Pro",
            mode: "starter",
            Package: "30 Minute Session Package",
            Price: "₹199",
            SessionsIncluded: "1 session",
            SessionLength: "30 mins",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Add On Plus",
            mode: "add on",
            Package: "15 Minute Add-On",
            Price: "₹49/session",
            SessionsIncluded: null,
            SessionLength: "15 minutes",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Add On Pro",
            mode: "add on",
            Package: "30 Minute Add-On",
            Price: "₹99/session",
            SessionsIncluded: null,
            SessionLength: "30 minutes",
            CounselorMatching: "with non-professional counseling"
        }
    ];
    

    function handleClick() {
        console.log("taslaskjdf")
        // toast({
        //     variant: "default",
        //     title: "Currently no packs are available",
        //     description: "Explore different parts of the website till our team adds on the packs",
        // })

        setOpen(true)
    }

    return (
        <div className="flex max-w-6xl w-full sm:w-auto mx-auto flex-col space-y-3 items-center justify-center">
            <h2 className="text-3xl w-full sm:text-4xl text-center sm:text-start font-bold  antialiased mt-6 mb-3   list-disc ">Basic Pricing</h2>
            <div className="flex flex-col md:flex-row my-5 !w-full px-6 sm:px-0 sm:w-fit items-center  justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i)=>(
                        <motion.div initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (i/10), duration: 0.3}}  key={i} ><Card className="!w-full rounded-xl shadow-[#9067C6]/30 bg-opacity-30 backdrop-blur-sm md:w-auto shadow-md  relative overflow-hidden">
                            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 rotate-45 text-neutral-900  text-[13px] uppercase">{e.mode}</p>
                            <CardHeader>
                                <CardTitle>{e.Price}</CardTitle>
                                <CardDescription>
                                    <p className="text-lg ">{e.type}</p>
                                    <p>{e.Package}</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="">
                                <p>Session Length: <p className="px-2 text-sm inline-flex text-center py-0.5  rounded-full bg-neutral-100 dark:bg-neutral-700">{e.SessionLength}</p></p>
                                <p>Counsellor Matching: <p className=" text-sm inline-flex text-center py-0.5   ">{e.CounselorMatching}</p></p>
                            </CardContent>
                            <CardFooter >
                                <Button className="w-full bg-[#242038] transition-colors duration-300 hover:opacity-95 rounded-full" onClick={handleClick}>Buy now</Button>
                            </CardFooter>
                        </Card>
                        </motion.div>
                    ))
                }
            </div>
            <a href="/pricing"><Button size={'lg'} variant={'outline'} className='group rounded-full bg-opacity-30 backdrop-blur-sm transition ease py-1 mx-auto max-w-fit duration-500'>
            Explore more <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/>
        </Button></a>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent className="w-80 text-start bg-opacity-50 border-none backdrop-blur-sm text-zinc-800 rounded-xl">
                    <DialogHeader className="text-start justify-start">
                        <DialogTitle>Attention here!</DialogTitle>
                        <DialogDescription className="text-zinc-800">
                            Due to some technical issues we are not able to proceed further payment so please do contact our team for the process of purchase
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-end items-end">
                        <DialogClose asChild className="">
                            <a href="/contact?pricing=true" className="w-fit float-right">
                            <Button  type="button" className="float-right bg-dark_purple rounded-full px-4" >
                                Contact 
                            </Button>
                            </a>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>

        
    )
}

export default Pricing ;