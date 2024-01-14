"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";


const Pricing = ()=>{
    const [open, setOpen] = useState(false);
    var pricing = [
        {
            type: "Starter",
            Package: "15 Minute Session Package",
            Price: "₹39",
            SessionsIncluded: "1 session",
            SessionLength: "15 mins",
            CounselorMatching: "Assigned based on needs"
        },
        {
            type: "Starter",
            Package: "30 Minute Session Package",
            Price: "₹69",
            SessionsIncluded: "1 sessions",
            SessionLength: "30 mins",
            CounselorMatching: "Assigned based on needs"
        },
        {
            type: "Add On",
            Package: "15 Minute Add-On",
            Price: "₹24/session",
            SessionsIncluded: null,
            SessionLength: "15 minutes",
            CounselorMatching: null
        },
        {
            type: "Add On",
            Package: "30 Minute Add-On",
            Price: "₹45/session",
            SessionsIncluded: null,
            SessionLength: "30 minutes",
            CounselorMatching: null
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
            <h2 className="text-3xl w-full sm:text-5xl text-center sm:text-start font-extrabold antialiased mt-6 mb-3 pl-5 sm:pl-8 list-disc ">Basic Pricing</h2>
            <div className="flex flex-col md:flex-row my-5 w-full px-6 sm:px-0 sm:w-fit items-center  justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i)=>(
                        <Card key={i} className="w-full md:w-auto pt-6 pb-1 px-1 relative overflow-hidden">
                            <p className="absolute top-3 -left-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 -rotate-45 text-neutral-900  text-[13px] uppercase">{e.type}</p>
                            <CardHeader>
                                <CardTitle>{e.Price}</CardTitle>
                                <CardDescription>{e.Package}</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <p>Session Length: <span className="px-2 text-center py-0.5 text-base rounded-xl bg-neutral-100 dark:bg-neutral-700">{e.SessionLength}</span></p>
                            </CardContent>
                            <CardFooter >
                                <Button onClick={handleClick} className="w-full ">Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
            <a href="/pricing"><Button size={'lg'} variant={'outline'} className='group rounded-full transition ease py-1 mx-auto max-w-fit duration-500'>
            Explore more <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/>
        </Button></a>
            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent className="w-80 text-start rounded-xl">
                    <DialogHeader className="text-start justify-start">
                        <DialogTitle>Attention here!</DialogTitle>
                        <DialogDescription>
                            Due to some technical issues we are able to proceed further payment so please do contact our team for the process of purchase
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-end items-end">
                        <DialogClose asChild>
                            <a href="/contact?pricing=true" className="w-fit float-right">
                            <Button  type="button" className="float-right" variant="secondary">
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