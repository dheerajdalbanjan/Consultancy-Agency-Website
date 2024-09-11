"use client";

import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { UseScrollHook } from "@/hooks/UseScrollTop";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/dark-mode";
import {motion, useMotionValueEvent, useScroll, useSpring} from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, ChevronLeft, ChevronRight, LogOut, Menu, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(true) ;
  const [open, setOpen] = useState(false)
  const { data: session } = useSession();

  const {scrollY} = useScroll() ;
  const sscroll = useSpring(scrollY) ;

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(scrollY, latest)
    if(scrollY.get() - (scrollY.getPrevious() || 0) < -40) setScrolled(true) ;
    else if(scrollY.get() - (scrollY.getPrevious() || 0) > 40) setScrolled(false);
  })

  const links = [
    { "name": "Home", "link": "/" },
    { "name": "About", "link": "/about" },
    { "name": "Contact", "link": "/contact" },
    { "name": "Pricing", "link": "/pricing" },
    { "name": "Affiliate", "link": "/affiliate" },
    { "name": "Blog", "link": "/blog" },
    { "name": "Add Blog", "link": "/addblog" }
  ] ;

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <motion.div
      
      className={` transition-all duration-300 ease-in-out bg-[#072B4C]  text-neutral-50  border-blue-700/10 ${
        scrolled
          ? "  fixed translate-y-0 "
          : "-translate-y-40"
      }  z-50 fixed top-0 h-[4.5rem]  flex items-center  justify-between w-full  px-8 md:px-48 `}
    >
      
      <div className="flex gap-x-3 items-center justify-between ">
      
        <Sheet open={open} onOpenChange={e=>setOpen(e)}  >
          <SheetTrigger className="md:hidden ">
            {/* <Button
              variant={"outline"}
              className="!bg-transparent px-2  active:scale-95 transition-all duration-300"
            >
              <ChevronRight width={20}/>
            </Button> */}
            <div className={`flex flex-col ${open?'space-y-0':'space-y-[10px]'} justify-center items-center`}>
              <div className={`w-6 h-[1px] bg-neutral-50 ${open?'rotate-45':''} transition-all duration-300 ease-in-out`}></div>
              <div className={`w-6 h-[1px] bg-neutral-50 ${open?'-rotate-45':''} transition-all duration-300 ease-in-out`}></div>
            </div>
          </SheetTrigger>
          <SheetContent side={"left"} className="  border-blue-700/10 !bg-[#F7ECE1]">
            <SheetHeader className="h-full">
              <SheetTitle className="text-zinc-900">OurSoulss</SheetTitle>
              <SheetDescription className="flex h-full w-full flex-col gap-y-8 items-start justify-between">
                <div className="flex flex-col gap-y-4 justify-start mt-3 items-start text-zinc-800 text-[1.05rem]">
                  {links.map((e , i)=> (<motion.a initial={{translateX:-30, opacity:0.7}} whileInView={{translateX:0, opacity:1}} transition={{delay: (i/20), duration: 0.4, ease: 'easeInOut'}}  key={i} href={e.link}>{e.name}</motion.a>))}
                </div>
                {!session && (
                  <div className="flex items-center justify-between mt-auto gap-x-4 ml-auto">
                    <a href="/login">
                      <Button variant="outline" className="text-neutral-800">Login</Button>
                    </a>
                    <a href="/signup">
                      <Button className="bg-dark_purple">SignUp</Button>
                    </a>
                  </div>
                )}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />

        
      </div>
      <div className="flex justify-center items-center space-x-4">
        <div className="hidden md:flex justify-center items-start space-x-4 text-neutral-50 ">
        <a href="/"><div className="hover:opacity-50  cursor-pointer transition-all ease-in duration-300">
          Home
        </div></a>
        <a href="/about"><div className="hover:opacity-50  cursor-pointer transition-all ease-in duration-300">
          About
        </div></a>
        <a href="/contact"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Contact
        </div></a>
        <a href="/pricing"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Pricing
        </div></a>
        <a href="/affiliate"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Affiliate
        </div></a>
        <a href="/blog"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Blog
        </div></a>
        <a href="/addblog"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
          Add Blog
        </div></a>

        

        
        </div>
        {!session && (
          <a href="/signup">
            <div className="">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#FFC107] text-neutral-800 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span>{`Sign Up`}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                    ></path>
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>
            </div>
          </a>
        )}
        {session && (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild className="focus:outline-none active:scale-95 transition-all duration-300 ">
              <Button
                className="rounded-full ml-3 px-3 group !py-0 hover:bg-violet-100/80  bg-violet-100    transition-all duration-300"
              >
                <User className="w-4 h-4 text-neutral-800 group-hover:scale-110 transition-all"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-opacity-80 backdrop-blur-lg">
              <DropdownMenuLabel>Profile</DropdownMenuLabel>

              <DropdownMenuGroup>
                <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
                <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
                <a href="/mypackages"><DropdownMenuItem className="flex items-center space-x-2 cursor-pointer lucide lucide-square-arrow-out-up-right"><span>My Packages</span> <svg className=" " xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg></DropdownMenuItem></a>
                {/* <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Change Theme</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        Default
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub> */}
                <DropdownMenuItem
                  className="hover:!bg-red-600/10 cursor-pointer flex items-center !text-red-600"
                  onClick={() => signOut()}
                >
                 <LogOut className="mr-2 w-4 h-4" /> Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
        
    </motion.div>
  );
};

export default Navbar;
