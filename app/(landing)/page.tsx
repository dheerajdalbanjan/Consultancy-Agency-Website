"use client"


import Image from "next/image";
import Hero from "./_components/hero";
import Features from "./_components/features";
import Offers from "./_components/offers";
import Pricing from "./_components/pricing";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Affiliate from "./_components/affiliate";

export default function Home() {
  const { data: session } = useSession();
  const [popupshowed, setPopupshowed] = useState(false); 
  const [open, setOpen] = useState(false) ;


  useEffect(()=>{
    function handleScroll(){
      if(window.scrollY > 30 && !popupshowed && !session){
        setOpen(true) ; 
      }
      else {
        setOpen(false) ; 
      }
    }

    window.addEventListener('scroll', handleScroll) ; 
    return ()=>{
      window.removeEventListener('scroll', handleScroll) ; 
    }
  })
  return (
    <main className="h-full bg-dot-white/[0.03]">
      <Hero />
      <Offers />
      <Pricing />
      <Features />
      <Affiliate />
      <Dialog open={open} onOpenChange={()=>{setOpen(false) ; 
        setPopupshowed(true) ;}}>
        <DialogContent className="mx-1 rounded-md w-fit p-8 bg-opacity-50 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="whitespace-nowrap">Sign Up to get Atmost Experience</DialogTitle>
            <DialogDescription className="text-zinc-900">
              Or Login if you are existing oursoulss user
            </DialogDescription>
          </DialogHeader>
          <DialogFooter >
            <div className="flex items-center w-full justify-end space-x-5 ">
            <a href="/signup" ><Button className="bg-blue-950">
              Sign Up
            </Button></a>
            <a href="/login" ><Button variant={'outline'} className="bg-opacity-50">
              Login
            </Button></a>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
