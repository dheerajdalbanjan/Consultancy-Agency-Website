import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import data from "../../../lib/data_affiliate.json";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Affiliate = () => {
  const products: any = data;
  console.log(products);

  return (
    <div className="flex max-w-6xl w-full sm:w-auto mx-auto flex-col space-y-3 items-center justify-center">
      <h2 className="text-3xl w-full sm:text-4xl text-center sm:text-start font-bold  antialiased mt-6 mb-3   list-disc ">
        Products
      </h2>
      <div className="relative">
        <div
          id="scrollContainer"
          className="flex md:flex-row flex-col gap-8 overflow-hidden  max-w-6xl "
        >
          {Object.keys(products).map((e, i) => (
            <div key={i} className="flex-none w-80">
              <Card className="overflow-hidden relative group shadow-lg hover:shadow-2xl rounded-none">
                <CardHeader className="flex justify-between py-5 rounded-b-md z-10 absolute top-0 bg-neutral-900 filter bg-opacity-80 backdrop-blur-lg w-full">
                  <CardTitle className="w-fit flex text-base">
                    {products[e][0]["title"]}
                  </CardTitle>
                </CardHeader>
                <CardContent
                  className="p-0 aspect-square w-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${products[e][0]["image_link"]})`,
                    height: "400px" 
                  }}
                >
                  <div
                    className={`overflow-hidden  h-full -z-10  backdrop-blur-xl `}
                  >
                    {" "}
                    <Image
                      src={products[e][0]["image_link"]}
                      height={300}
                      width={300}
                      alt="image"
                      className="object-cover bg-opacity-80  z-50 shadow-2xl   w-full h-full group-hover:scale-75 hover:w-[400px] transition-all duration-300 ease-in-out"
                    />
                  </div>
                </CardContent>
                <CardFooter className="absolute bottom-0 p-5 w-full flex items-center justify-between rounded-t-xl shadow-lg border-neutral-100 bg-neutral-800 filter bg-opacity-50 backdrop-blur-md">
                  <p className=" text-neutral-800 font-medium text-base bg-neutral-300 rounded-full px-4 py-0.5">
                    {e}
                  </p>
                  <a href={products[e][0]["link"]}>
                    <button className="inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-1 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-90 transition-all">
                      Buy Now
                    </button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <button
          className="hidden absolute  top-0 bottom-0 left-0 bg-gray-900 bg-opacity-50 text-white p-2 md:flex items-center justify-center transform -translate-x-full  transition-transform duration-300 focus:outline-none"
          onClick={() =>
            document
              .getElementById("scrollContainer")
              ?.scrollBy({ left: -300, behavior: "smooth" })
          }
        >
          {"<"}
        </button>
        <button
          className="hidden absolute top-0 bottom-0 right-0 bg-gray-900 bg-opacity-50 text-white p-2 md:flex items-center justify-center transform translate-x-full  transition-transform duration-300 focus:outline-none"
          onClick={() =>
            document
              .getElementById("scrollContainer")
              ?.scrollBy({ left: 300, behavior: "smooth" })
          }
        >
          {">"}
        </button>
      </div>
      <a href="/affiliate"><Button size={'lg'} variant={'outline'} className='group rounded-full transition ease py-0.5 my-2 mx-auto max-w-fit duration-500'>
            Explore more <ArrowRight className='w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100'/>
        </Button></a>
    </div>
  );
};

export default Affiliate;
