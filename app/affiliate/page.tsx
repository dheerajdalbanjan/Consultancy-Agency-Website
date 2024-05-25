"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2Icon, LoaderIcon } from "lucide-react";

const Page = () => {
  const data: any = dat;
  const [value, setValue] = useState("Books");
  const [loading, setLoading] = useState(false);

  const handleLoading= ()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 500)
  }

  return (
    <div className="max-w-7xl px-2 mt-20 mx-auto min-h-screen">
      <h1 className="bg-clip-text pl-5 md:pl-0 bg-gradient-to-br antialiased  my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">
        Our Products
      </h1>

      <div className=" w-full">
        {loading && (
          <div className="fixed z-50 inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center ">
            <Loader2Icon className="animate-spin" />
          </div>
        )}
        <Tabs
          value={value}
          onValueChange={(e) => {setValue(e); handleLoading()}}
          defaultValue={"Books"}
          className=" px-5 rounded-full md:pl-0 mx-auto my-10  "
          orientation="horizontal"
        >
          <div className="md:hidden">
            <Select
              value={value}
              onValueChange={(e) => {
                setValue(e);
                handleLoading() ;
              }}
            >
              <SelectTrigger className="w-[180px] !outline-none !ring-0 ">
                <SelectValue placeholder="Books" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(data).map((e, i) => (
                  <SelectItem
                    value={e}
                    key={i}
                    className="!bg-transparent text-start w-full cursor-pointer"
                  >
                    {e}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <TabsList className="hidden md:block rounded-full w-fit">
            {Object.keys(data).map((e, i) => (
              <TabsTrigger className="rounded-full  px-6" key={i} value={e}>
                {e}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(data).map((e, i) => (
            <TabsContent value={e} key={i}>
              <div className="grid grid-cols-1 py-5  gap-y-11 md:gap-x-5 md:grid-cols-4 w-full  my-5 items-center justify-center  ">
                {data[e].map(
                  (
                    p: { [x: string]: string | undefined },
                    pi: React.Key | null | undefined
                  ) => (
                    <Card
                      key={i}
                      style={{
                        backgroundImage: `url(${p["image_link"]})`,
                        backgroundSize: "cover",
                      }}
                      className="shadow-xl group overflow-visible w-full rounded-xl  md:w-72 p-0 bg-transparent relative"
                    >
                      <div className="backdrop-blur-2xl h-full !rounded-lg bg-black bg-opacity-70 ">
                        <CardHeader className="md:w-72 rounded-lg  w-full aspect-square">
                          <Image
                            src={p["image_link"] || ""}
                            alt=""
                            height={300}
                            width={300}
                            className="object-fill absolute group-hover:rounded-b-none group-hover:scale-100 transition-all duration-300 ease-in-out -top-7 aspect-square w-full left-0 scale-90 rounded-xl shadow-xl"
                            style={{
                              aspectRatio: "",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                          />
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardTitle className="truncate mt-0">
                            {p["title"]}
                          </CardTitle>
                        </CardContent>
                        <CardFooter className="w-full flex items-center justify-between  my-0">
                          <Badge variant={"outline"}>{e}</Badge>
                          <a href={p["link"]}>
                            <Button>Buy now</Button>
                          </a>
                        </CardFooter>
                      </div>
                    </Card>
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

export default Page;
