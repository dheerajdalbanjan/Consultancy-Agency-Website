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
    let monthly = [
        {
            name: "1 Month Subscription",
            price: "Rs. 199/-",
            sessions_included: "14 phone sessions",
            session_length: "50 minutes each",
            counselor_matching: "Assigned based on your needs and preferences",
            access_term: "1 month from purchase date"
        },
        {
            name: "3 Month Subscription",
            price: "Rs. 349/- (Save Rs. 50)",
            sessions_included: "29 phone sessions",
            session_length: "50 minutes each",
            counselor_matching: "Assigned based on your needs and preferences",
            access_term: "3 months from purchase date"
        },
        {
            name: "6 Month Subscription",
            price: "Rs. 599/- (Save Rs. 100)",
            sessions_included: "49 phone sessions",
            session_length: "50 minutes each",
            counselor_matching: "Assigned based on your needs and preferences",
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
        <div className="max-w-7xl mx-auto min-h-screen">
            <h1 className="bg-clip-text bg-gradient-to-br antialiased pl-5 my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-extrabold  tracking-tight lg:text-5xl">Pricing</h1>

            <h2 className="text-2xl sm:text-3xl font-bold antialiased mt-6 pl-5 list-disc">Basic Plans</h2>
            <div className="flex flex-col md:flex-row my-5 items-center justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    pricing.map((e, i) => (
                        <Card key={i} className="min-w-[250px] w-full pt-6 pb-1 px-1 relative overflow-hidden">
                            <p className="absolute top-3 -left-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 -rotate-45 text-neutral-900  text-[13px] uppercase">{e.type}</p>
                            <CardHeader>
                                <CardTitle>{e.Price}</CardTitle>
                                <CardDescription>{e.Package}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Session Length: <span className="px-2 text-center py-0.5 text-base rounded-xl bg-neutral-100 dark:bg-neutral-700">{e.SessionLength}</span></p>
                            </CardContent>
                            <CardFooter >
                                <Button className="w-full " onClick={handleClick}>Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold antialiased mt-6 pl-5 list-disc">Monthly Plans</h2>
            <div className="flex flex-col md:flex-row my-5 items-center justify-center p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    monthly.map((e, i) => (
                        <Card key={i} className="min-w-[250px] w-full pt-6 pb-1 px-1 relative overflow-hidden">
                            <p className="absolute top-3 -left-8 py-0.5 w-28 text-center bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500 -rotate-45 text-neutral-950  text-[13px] uppercase">monthly</p>
                            <CardHeader>
                                <CardTitle>{e.price}</CardTitle>
                                <CardDescription>{e.name}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p>Session Length: <span className="px-2 text-center py-0.5 text-base rounded-xl  bg-neutral-100 dark:bg-neutral-700">{e.session_length}</span></p>
                                <p>No. Of Sessions: <span className="px-2 text-center py-0.5 text-base rounded-xl font-thin">{e.sessions_included}</span></p>

                            </CardContent>
                            <CardFooter >
                                <Button className="w-full " onClick={handleClick}>Buy now</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>

            <Dialog open={open} onOpenChange={setOpen} >
                <DialogContent className="w-80 text-start">
                    <DialogHeader className="text-start justify-start">
                        <DialogTitle>Attention here!</DialogTitle>
                        <DialogDescription>
                            Due to some technical issues we are able to proceed further payment so please do contact our team for the process of purchase
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-end">
                        <DialogClose asChild>
                            <a href="/contact">
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

export default Pricing;