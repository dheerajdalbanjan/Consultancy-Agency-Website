import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import dat from "../../lib/data_affiliate.json";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  const data: any = dat;
  return (
    <div className="max-w-7xl px-2 mt-20 mx-auto min-h-screen">
      <h1 className="bg-clip-text pl-8 md:pl-0 bg-gradient-to-br antialiased  my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">
        Our Products
      </h1>

      <div className=" w-full">
        <Tabs
          defaultValue={"Books"}
          className=" pl-8 md:pl-0 mx-auto my-10 overflow-x-scroll "
          orientation="horizontal"
        >
          <div className="md:hidden">
          <Select >
            <SelectTrigger className="w-[180px] !outline-none !ring-0 ">
              <SelectValue placeholder="Books" />
            </SelectTrigger>
            <SelectContent>
                <TabsList className="flex flex-col h-full items-start !bg-transparent">
                  {Object.keys(data).map((e, i) => (
                    
                    <TabsTrigger key={i} className="rounded-full text-start px-6" value={e}>
                    <SelectItem value={e} className="!bg-transparent text-start w-full cursor-pointer" >
                        {e}
                    </SelectItem>
                    
                    </TabsTrigger>
                  ))}
                </TabsList>
            </SelectContent>
          </Select>
          </div>
          <TabsList className="hidden md:block w-fit">
            {Object.keys(data).map((e, i) => (
              <TabsTrigger className="rounded-full  px-6" key={i} value={e}>
                {e}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(data).map((e, i) => (
            <TabsContent value={e} key={i}>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-5 my-5 items-center justify-center md:space-x-3">
                {data[e].map(
                  (
                    p: { [x: string]: string | undefined },
                    pi: React.Key | null | undefined
                  ) => (
                    <div key={pi} className="flex-none w-80 md:w-72">
                      <Card className="overflow-hidden relative group shadow-lg hover:shadow-2xl rounded-none">
                        <CardHeader className="flex justify-between py-5 rounded-b-md z-10 absolute top-0 bg-neutral-900 filter bg-opacity-80 backdrop-blur-lg w-full">
                          <CardTitle className="w-fit flex text-base truncate">
                            {p["title"]}
                          </CardTitle>
                        </CardHeader>
                        <CardContent
                          className="p-0 aspect-square w-full bg-center bg-cover"
                          style={{
                            backgroundImage: `url(${p["image_link"]})`,
                            height: "400px",
                          }}
                        >
                          <div
                            className={`overflow-hidden  h-full -z-10  backdrop-blur-xl `}
                          >
                            {" "}
                            <Image
                              src={p["image_link"] || ""}
                              height={300}
                              width={300}
                              alt="image"
                              className="object-cover bg-opacity-80  z-50 shadow-2xl   w-full h-full group-hover:scale-90 mt-7 hover:w-[400px] transition-all duration-300 ease-in-out"
                            />
                          </div>
                        </CardContent>
                        <CardFooter className="absolute bottom-0 p-5 w-full flex items-center justify-between rounded-t-xl shadow-lg border-neutral-100 bg-neutral-800 filter bg-opacity-50 backdrop-blur-md">
                          <p className=" text-neutral-800 font-medium text-sm bg-neutral-300 rounded-full px-4 py-0.5">
                            {e}
                          </p>
                          <a href={p["link"]}>
                            <button className="inline-flex animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-1 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 active:scale-90 !text-base transition-all">
                              Buy Now
                            </button>
                          </a>
                        </CardFooter>
                      </Card>
                    </div>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default page;
