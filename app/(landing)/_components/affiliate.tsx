import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Affiliate = () => {
  return (
    <div className="flex max-w-6xl w-full sm:w-auto mx-auto flex-col space-y-3 items-center justify-center">
      <h2 className="text-3xl w-full sm:text-4xl text-center sm:text-start font-bold  antialiased mt-6 mb-3   list-disc ">
        Products
      </h2>
      <div>
        <Card className="overflow-hidden relative group shadow-lg hover:shadow-2xl rounded-none ">
          <CardHeader className="bg-transparent  flex justify-between z-10 absolute top-0 bg-gradient-to-b from-neutral-900 to-neutral-100 filter bg-opacity-10 backdrop-blur-md w-full ">
            <CardTitle className="w-fit flex">Book </CardTitle>
          </CardHeader>
          <CardContent className=" p-0 aspect-square ">
            <Image
              src={"https://m.media-amazon.com/images/I/81Ls+SBCLiL.SY342.jpg"}
              height={300}
              width={300}
              alt="image"
              className="object-contain filter  z-10 group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </CardContent>
          <CardFooter className="absolute bottom-0 p-5 w-full flex items-center justify-between rounded-t-xl shadow-lg border-neutral-100 backdrop-blur-md">
            
          <p className="px-3 py-1 rounded-full text-neutral-800 font-medium ">Category</p>
            <a href=""><button className="inline-flex  animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-90  transition-all">
              Buy Now
            </button></a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Affiliate;
