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
            Price: "₹99",
            SessionsIncluded: "1 session",
            SessionLength: "15 mins",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Starter +",
            Package: "30 Minute Session Package",
            Price: "₹199",
            SessionsIncluded: "1 session",
            SessionLength: "30 mins",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Add On",
            Package: "15 Minute Add-On",
            Price: "₹49/session",
            SessionsIncluded: null,
            SessionLength: "15 minutes",
            CounselorMatching: "with non-professional counseling"
        },
        {
            type: "Add On +",
            Package: "30 Minute Add-On",
            Price: "₹99/session",
            SessionsIncluded: null,
            SessionLength: "30 minutes",
            CounselorMatching: "with non-professional counseling"
        }
    ];
    let monthly = [
        {
            name: "MONTHLY Plus",
            price: "Rs. 349/-",
            sessions_included: "1 Month Subscription",
            session_length: "50 minutes each",
            no_of_sessions: "14 phone sessions",
            counselor_matching: "with professional counseling",
            access_term: "1 month from purchase date"
        },
        {
            name: "MONTHLY Pro",
            price: "Rs. 499/- (Save Rs. 150)",
            sessions_included: "3 Month Subscription",
            session_length: "50 minutes each",
            no_of_sessions: "29 phone sessions",
            counselor_matching: "with professional counseling",
            access_term: "3 months from purchase date"
        },
        {
            name: "MONTHLY Premium",
            price: "Rs. 799/- (Save Rs. 300)",
            sessions_included: "6 Month Subscription",
            session_length: "50 minutes each",
            no_of_sessions: "49 phone sessions",
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
                        <Card key={i} className="!w-full !bg-transparent  md:w-auto  relative overflow-hidden">
                            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 rotate-45 text-neutral-900  text-[13px] uppercase">{e.type}</p>
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

            <h2 className="text-2xl sm:text-3xl  font-bold antialiased mt-6 pl-5 list-disc">Monthly Plans</h2>
            <div className="flex flex-col md:flex-row my-5 items-center justify-between p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
                {
                    monthly.map((e, i) => (
                        <Card key={i} className="!w-full !bg-transparent md:w-auto  relative overflow-hidden">
                            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500 rotate-45 text-neutral-950  text-[13px] uppercase">monthly</p>
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
                <DialogContent className="w-80 text-start rounded-xl">
                    <DialogHeader className="text-start justify-start">
                        <DialogTitle>Attention here!</DialogTitle>
                        <DialogDescription>
                            Due to some technical issues we are not able to proceed further payment so please do contact our team for the process of purchase
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="justify-end items-end">
                        <DialogClose asChild>
                            <a href="/contact?pricing=true" className="w-fit float-right">
                            <Button  type="button" className=" " variant="secondary">
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