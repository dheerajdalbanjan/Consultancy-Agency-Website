"use client";

import React, { useEffect, useState } from "react";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { UseScrollHook } from "@/hooks/UseScrollTop";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/dark-mode";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, ChevronLeft, ChevronRight, Menu } from "lucide-react";
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
  const scrolled = UseScrollHook();
  const [open, setOpen] = useState(false)
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <div
      className={` bg-opacity-70 ${
        scrolled
          ? "filter backdrop-blur-xl bg-[#09090b] border-b border-neutral-300 dark:border-neutral-600"
          : "bg-transparent"
      } text-neutral-50 z-50 fixed top-0 h-16 flex items-center justify-between w-full  px-8 md:px-20 `}
    >
      
      <div className="flex gap-x-3 items-center justify-between ">
      
        <Sheet open={open} onOpenChange={e=>setOpen(e)} >
          <SheetTrigger className="md:hidden">
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
          <SheetContent side={"left"} className="!bg-opacity-20 border-neutral-800 backdrop-blur-md">
            <SheetHeader className="h-full">
              <SheetTitle>OurSoulss</SheetTitle>
              <SheetDescription className="flex h-full w-full flex-col gap-y-8 items-start justify-between">
                <div className="flex flex-col gap-y-4 justify-start mt-3 items-start text-[1.05rem]">
                  <a href={"/"}>Home</a>
                  <a href={"/about"}>About</a>
                  <a href={"/contact"}>Contact</a>
                  <a href="/pricing">Pricing</a>
                  <a href="/affiliate">Affiliate</a>
                  <a href="/blog">Blog</a>
                </div>
                {!session && (
                  <div className="flex items-center justify-between mt-auto gap-x-4 ml-auto">
                    <a href="/login">
                      <Button variant="outline">Login</Button>
                    </a>
                    <a href="/signup">
                      <Button>SignUp</Button>
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
        <div className="hidden md:flex justify-center items-start space-x-4 text-neutral-700 dark:text-neutral-50">
        <a href="/about"><div className="hover:opacity-50 cursor-pointer transition-all ease-in duration-300">
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
        

        
        </div>
        {!session && (
          <a href="/signup">
            <div className="">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
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
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Button
                variant={"outline"}
                className="rounded-full ml-3 p-0 active:scale-95 transition-all duration-300"
              >
                <Avatar  >
                  <AvatarFallback className="scale-90" >
                    {session.user?.name?.slice(0, 1)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Profile</DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
                <DropdownMenuItem>{session.user?.email}</DropdownMenuItem>
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
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="!hover:bg-red-600/50 cursor-pointer hover:text-red-600"
                  onClick={() => signOut()}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
        
    </div>
  );
};

export default Navbar;
