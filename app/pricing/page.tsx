"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";




const Pricing = () => {
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
    let monthly = [
        {
            name: "MONTHLY Silver",
            aprice: "Rs. 599/-",
            price: "Rs. 799",
            discounted_price: "Rs. 599/-",
            sessions_included: "1 Month Subscription",
            session_length: "40 minutes each",
            no_of_sessions: "4 phone sessions",
            counselor_matching: "with professional counseling",
            access_term: "1 month from purchase date"
        },
        {
            name: "MONTHLY Gold",
            aprice: "Rs. 1199/-",
            price: "Rs. 1399",
            discounted_price: "Rs. 1199/-",
            sessions_included: "3 Month Subscription",
            session_length: "40 minutes each",
            no_of_sessions: "13 phone sessions",
            counselor_matching: "with professional counseling",
            access_term: "3 months from purchase date"
        },
        {
            name: "MONTHLY Platinum",
            aprice: "Rs. 1599/-",
            price: "Rs. 1799",
            discounted_price: "Rs. 1599/-",
            sessions_included: "6 Month Subscription",
            session_length: "40 minutes each",
            no_of_sessions: "25 phone sessions",
            counselor_matching: "with professional counseling",
            access_term: "6 months from purchase date"
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
        <div className="max-w-6xl px-2 mt-20 mx-auto min-h-screen">
            <h1 className="bg-clip-text bg-gradient-to-br antialiased pl-5 my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">Pricing</h1>

            <h2 className="text-2xl sm:text-3xl font-bold antialiased mt-6 pl-5 list-disc">Basic Plans</h2>
            <div className="flex flex-col l  md:flex-row my-5 items-center justify-start p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i) => (
                        <Card key={i} className="!w-full bg-opacity-50 rounded-xl backdrop-blur-sm shadow-blue-950/10 md:w-auto shadow-lg  relative overflow-hidden">
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
                            <Button className="w-full bg-blue-950 hover:bg-blue-900 transition-colors duration-300 rounded-full " onClick={handleClick}>Buy now</Button>
                        </CardFooter>
                    </Card>
                    ))
                }
            </div>

            <h2 className="text-2xl sm:text-3xl  font-bold antialiased mt-6 pl-5 list-disc">Monthly Plans</h2>
            <div className="flex flex-col md:flex-row my-5 items-center justify-between p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    monthly.map((e, i) => (
                        <Card key={i} className="!w-full rounded-xl bg-opacity-50 backdrop-blur-sm  md:w-auto  relative overflow-hidden shadow-lg shadow-blue-950/10">
                            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500 rotate-45 text-neutral-950  text-[13px] uppercase">monthly</p>
                            <CardHeader>
                                <CardTitle className="flex ">
                                    <h2>{e.aprice}</h2>
                                    <h4 className="text-rose-700 ml-2 line-through text-lg font-semibold">{e.price}</h4>
                                </CardTitle>
                                <CardDescription>{e.name}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>Session Length: <span className="px-2 text-center text-sm py-0.5  rounded-xl  bg-neutral-100 inline-flex  dark:bg-neutral-700">{e.session_length}</span></p>
                                <p>Sessions Included: <span className="px-2 text-center py-0.5 text-sm rounded-xl font-thin">{e.sessions_included}</span></p>
                                <p>No. Of Sessions: <span className="px-2 text-center py-0.5 text-sm rounded-xl font-thin">{e.no_of_sessions}</span></p>
                                <p>Access term: <span className="px-2 text-center py-0.5 text-sm rounded-xl font-thin">{e.access_term}</span></p>

                            </CardContent>
                            <CardFooter >
                                <Button className="w-full bg-blue-950 hover:bg-blue-900 transition-colors duration-300 rounded-full " onClick={handleClick}>Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>

            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent className="w-80 text-start bg-opacity-50 border-none backdrop-blur-sm text-zinc-800 rounded-xl">
                    <DialogHeader className="text-start justify-start">
                        <DialogTitle>Attention here!</DialogTitle>
                        <DialogDescription className="text-zinc-800">
                            Due to some technical issues we are not able to proceed further payment so please do contact our team for the process of purchase
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="justify-end items-end">
                        <DialogClose asChild>
                            <a href="/contact?pricing=true" className="w-fit float-right">
                            <Button  type="button" className="bg-blue-950 rounded-full">
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

export default Pricing;