"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, LoaderIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

const Mypackages = () => {
  const [data, setData] = useState<any>(null);
  const {data:session} = useSession() ;
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [availed, setAvailed] = useState(false) ;
  const router = useRouter() 


  const handleClick = async (e: any)=>{
    setLoading(true) 
    try {
        const res = await fetch('/api/availPackage', {method:"POST", headers: {"Content-type": "application/json"}, body: JSON.stringify({...e, ...session?.user})})
        const data = await res.json() ; 
        if(res.ok){
            console.log('success') ;
            setSuccess(true)
        }
    } catch (error) {
        console.log(error)
    }
    finally {
        setLoading(false) ; 
        setAvailed(true) ;
        
        
    }
  }

  useEffect(() => {
    setLoading(true)
    fetch("/api/package", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: any) => {
        setData(data.data)
        console.log(data.data)
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    // if(availed && !success){
    //   window.location.reload() 
    // }
  }, [availed]);

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-8 pt-20">
      
      <h1 className="my-5 text-3xl font-bold antialiased">My packages</h1>
      {loading && (
        <div className="w-full h-[60vh]  flex items-center justify-center ">
          <p className="text-neutral-700 font-semibold animate-pulse">loading...</p>
        </div>
      )}
      {data &&
        data.map((e: any, i: number) => (
            <motion.div initial={{scale:0.95}} whileInView={{scale:1}} transition={{duration:0.3}} key={i}><Card
            className="!w-full mb-4 bg-gradient-to-tl from-violet-100 to-amber-100   relative overflow-hidden"
          >
            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 rotate-45 text-neutral-900  text-[13px] uppercase">
              {e.mode}
            </p>
            <CardHeader>
              <CardTitle className="animate-shimmer">Rs. {e.price}</CardTitle>
              <CardDescription>
                <p className="text-lg ">{e.type}</p>
                <p>{e.name}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="">
            <Button
                className="rounded-full  px-5 mb-3 bg-[#242038] hover:opacity-95 transition-colors duration-300 "
                onClick={()=>handleClick(e)}
                disabled={e.availed}
              >
                {e.availed?'Package Availed':'Avail now'}
              </Button>
              <p>
                Session Length:{" "}
                <p className="px-2 text-sm inline-flex text-center py-0.5  rounded-full bg-neutral-100 dark:bg-neutral-700">
                  {e.session_length}
                </p>
              </p>
              <p>
                Counsellor Matching:{" "}
                <p className=" text-sm inline-flex  py-0.5   ">
                  {e.counselor_matching}
                </p>
              </p>
              <p>
                Sessions Included:{" "}
                <span className="px-2 text-center py-0.5 text-sm rounded-xl ">
                  {e.sessions_included}
                </span>
              </p>
            </CardContent>
            
          </Card></motion.div>
        ))}

        {
           data && data.length === 0 && <p className="my-3 text-lg ">No packages purchased</p>
        }

        <Dialog open={success} onOpenChange={setSuccess}>
            
            <DialogContent className="bg-emerald-700 border-none text-neutral-50">
            <DialogHeader>
                <DialogTitle>Success</DialogTitle>
                <DialogDescription className="text-neutral-100">successfully informed the team for availing the package</DialogDescription>
            </DialogHeader>
            <Check className="w-36 mx-auto  h-36 border-emerald-200 text-emerald-300 border-4 my-3 rounded-full font-bold" />
            </DialogContent>
        </Dialog>
    </div>
  );
};

export default Mypackages;
