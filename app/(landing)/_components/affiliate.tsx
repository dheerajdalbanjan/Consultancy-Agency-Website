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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
          className="flex md:flex-row flex-col space-y-3 md:space-y-0 py-5 gap-8 overflow-x-hidden max-w-6xl "
        >
          {Object.keys(products).map((e, i) => (
            // <div key={i} className="flex-none w-80">
            //   <Card className="overflow-hidden relative group shadow-lg hover:shadow-2xl rounded-xl">
            //     <CardHeader className="flex justify-between py-5 rounded-b-md rounded-t-none z-10 absolute top-0 bg-neutral-900 filter bg-opacity-80 backdrop-blur-lg w-full">
            //       <CardTitle className="w-fit flex text-base">
            //         {products[e][0]["title"]}
            //       </CardTitle>
            //     </CardHeader>
            //     <CardContent
            //       className="p-0 aspect-square w-full bg-center bg-cover"
            //       style={{
            //         backgroundImage: `url(${products[e][0]["image_link"]})`,
            //         height: "400px"
            //       }}
            //     >
            //       <div
            //         className={`overflow-hidden  h-full -z-10  backdrop-blur-xl `}
            //       >
            //         {" "}
            //         <Image
            //           src={products[e][0]["image_link"]}
            //           height={300}
            //           width={300}
            //           alt="image"
            //           className="object-cover bg-opacity-80  z-50 shadow-2xl   w-full h-full group-hover:scale-75 hover:w-[400px] transition-all duration-300 ease-in-out"
            //         />
            //       </div>
            //     </CardContent>
            //     <CardFooter className="absolute bottom-0 p-5 w-full flex items-center justify-between rounded-t-xl shadow-lg border-neutral-100 bg-neutral-800 filter bg-opacity-50 backdrop-blur-md">
            //       <p className=" text-neutral-800 font-medium text-base bg-neutral-300 rounded-full px-4 py-0.5">
            //         {e}
            //       </p>
            //       <a href={products[e][0]["link"]}>
            //         <button className="inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-1 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-90 transition-all">
            //           Buy Now
            //         </button>
            //       </a>
            //     </CardFooter>
            //   </Card>
            // </div>
            <Card key={i} style={{backgroundImage:`url(${products[e][0]["image_link"]})`, backgroundSize:'cover'}} className="shadow-xl rounded-xl group  overflow-visible w-full  md:w-64 p-0 bg-opacity-80 backdrop-blur-xl  relative" >
              <div className="backdrop-blur-2xl h-full !rounded-lg bg-black bg-opacity-70 ">
              <CardHeader className="md:h-60 md:w-64  w-full aspect-square ">
                <Image
                  src={products[e][0]["image_link"]}
                  alt=""
                  height={300}
                  width={300}
                  className="object-fill   absolute aspect-square w-full -top-7 left-0 scale-90 rounded-xl shadow-xl"
                  style={{
                    aspectRatio: "",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                
              </CardHeader>
              <CardContent>
              <CardTitle className="truncate">{products[e][0]["title"]}</CardTitle>
              </CardContent>
              <CardFooter className="w-full flex items-center pb-5 justify-between my-0">
                <Badge variant={"outline"}>{e}</Badge>
                <a href={products[e][0]['link']}><Button>Buy now</Button></a>
              </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <Button
          variant={"outline"}
          className="hidden absolute rounded-full top-[42%] -left-2 h-8 w-8 bg-gray-900 bg-opacity-50 text-white p-2 md:flex items-center justify-center transform -translate-x-full  transition-transform duration-300 focus:outline-none"
          onClick={() =>
            document
              .getElementById("scrollContainer")
              ?.scrollBy({ left: -300, behavior: "smooth" })
          }
        >
          <ArrowLeft size={24} />
        </Button>
        <Button
          variant={"outline"}
          className="hidden absolute rounded-full top-[42%]  -right-2 h-8 w-8 bg-gray-900 bg-opacity-50 text-white p-2 md:flex items-center justify-center transform translate-x-full  transition-transform duration-300 focus:outline-none"
          onClick={() =>
            document
              .getElementById("scrollContainer")
              ?.scrollBy({ left: 300, behavior: "smooth" })
          }
        >
          <ArrowRight size={24} />
        </Button>
      </div>
      <a href="/affiliate">
        <Button
          size={"lg"}
          variant={"outline"}
          className="group rounded-full transition ease py-0.5 my-2 mx-auto max-w-fit duration-500"
        >
          Explore more{" "}
          <ArrowRight className="w-4 h-4 -ml-4 group-hover:ml-2  scale-0 group-hover:scale-100  transition-all duration-300 hover:scale-100" />
        </Button>
      </a>
    </div>
  );
};

export default Affiliate;
