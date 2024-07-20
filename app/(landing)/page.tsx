"use client";

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
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TestimonialsComponent from "./_components/testimonials";
import Services from "./_components/services";
import Experts from "./_components/experts";
import { Badge } from "@/components/ui/badge";
import Comparison from "./_components/comparison";

export default function Home() {
  const { data: session } = useSession();
  const [popupshowed, setPopupshowed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30 && !popupshowed && !session) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <main className="h-full bg-dot-white/[0.03]">
      <Hero />
      <Offers />

      <Features />
      {/* <TestimonialsComponent/> */}
      <div className="flex items-center bg-dot-white/10 justify-center  bg-[#e2690e]">
        <div className="max-w-4xl px-6 py-12 space-y-6 text-center">
          <div className="md:text-3xl text-2xl capitalize font-bold text-[#f0f0f0] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            {
              "ALONE, THE WEIGHT ON YOUR HEART MAY SEEM INSURMOUNTABLE, BUT TOGETHER ,WITH THE STRENGTH OF OUR SHARED SPIRITS, WE CAN LIFT ANY BURDEN"
            }
          </div>
          <div className="text-lg italic text-[#c0c0c0]">- OurSoulss</div>
        </div>
      </div>

      <Services />
      <Experts />
      <div className="w-full bg-neutral-50 p-6">
        <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-y-4 items-center  justify-between">
          <div className="flex flex-col items-start md:h-full justify-start space-y-4">
            <Badge className="bg-[#072B4C] text-xl px-6 !font-semibold ">
              Affordable and Accessible
            </Badge>
            <p>An advantage of online counseling is the flexibility to have sessions from anywhere while maintaining privacy. It allows individuals to receive guidance and solve problems effectively through convenient and discreet online interactions.</p>
          </div>
          <div className="h-full aspect-square">
            <img src="/images/aaa.png" className="object-fill" />
          </div>
        </div>
      </div>

      <Comparison />

      <TestimonialsComponent />

      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          setPopupshowed(true);
        }}
      >
        <DialogContent className="mx-1 rounded-md w-fit p-8 bg-opacity-50 border-none backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="whitespace-nowrap">
              Sign Up to get Atmost Experience
            </DialogTitle>
            <DialogDescription className="text-zinc-900">
              Or Login if you are existing oursoulss user
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="flex items-center w-full justify-end space-x-5 ">
              <a href="/signup">
                <Button className="bg-dark_purple">Sign Up</Button>
              </a>
              <a href="/login">
                <Button variant={"outline"} className="bg-opacity-50">
                  Login
                </Button>
              </a>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
