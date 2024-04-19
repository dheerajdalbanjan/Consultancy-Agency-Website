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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const data: any = dat;
  return (
    <div className="max-w-7xl px-2 mt-20 mx-auto min-h-screen">
      <h1 className="bg-clip-text pl-5 md:pl-0 bg-gradient-to-br antialiased  my-3 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">
        Our Products
      </h1>

      <div className=" w-full">
        <Tabs
          defaultValue={"Books"}
          className=" px-5 md:pl-0 mx-auto my-10  "
          orientation="horizontal"
        >
          <div className="md:hidden">
            <Select>
              <SelectTrigger className="w-[180px] !outline-none !ring-0 ">
                <SelectValue placeholder="Books" />
              </SelectTrigger>
              <SelectContent>
                <TabsList className="flex flex-col h-full items-start !bg-transparent">
                  {Object.keys(data).map((e, i) => (
                    <TabsTrigger
                      key={i}
                      className="rounded-full text-start px-6"
                      value={e}
                    >
                      <SelectItem
                        value={e}
                        className="!bg-transparent text-start w-full cursor-pointer"
                      >
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
              <div className="grid grid-cols-1 py-5  space-y-5 md:grid-cols-4 w-full gap-5 my-5 items-center justify-center md:space-y-5 ">
                {data[e].map(
                  (
                    p: { [x: string]: string | undefined },
                    pi: React.Key | null | undefined
                  ) => (
                    <Card
                      key={i}
                      className="shadow-xl overflow-visible w-full  md:w-72 p-0 bg-transparent relative"
                    >
                      <CardHeader className="md:w-72   w-full aspect-square">
                        <Image
                          src={p["image_link"] || ""}
                          alt=""
                          height={300}
                          width={300}
                          className="object-fill absolute -top-7 aspect-square w-full left-0 scale-90 rounded-md shadow-xl"
                          style={{
                            aspectRatio: "",
                            objectFit: "cover",
                          }}
                        />
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardTitle className="truncate mt-0">{p["title"]}</CardTitle>
                      </CardContent>
                      <CardFooter className="w-full flex items-center justify-between my-0">
                        <Badge variant={"outline"}>{e}</Badge>
                        <a href={p["link"]}>
                          <Button>Buy now</Button>
                        </a>
                      </CardFooter>
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

export default page;
