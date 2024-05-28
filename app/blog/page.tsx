"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vibrant from 'node-vibrant';

import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import {FastAverageColor} from 'fast-average-color';

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)
  const [length, setLen] = useState(0)


  useEffect(() => {
    // Fetch blogs from the API endpoint
    setLoading(true)
    fetch("/api/blog") // Adjust the URL to your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data: any) => {
        // Set the fetched blogs to the state
        console.log(data.data);
        setBlogs(data.data);
        setLen(data.data.length)
      })
      
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []);



 
  const imgLoad =  (e: any) => {
    const parent = e.target.parentNode.nextElementSibling;
    const id = e.target.parentNode.id ;
    const fac = new FastAverageColor() ;
      const dominantColor = fac.getColor(e.currentTarget).rgb;
    const gradient = `linear-gradient(to right,${dominantColor}, transparent)`;
    const gradient1 = `linear-gradient(to left,${dominantColor}, transparent, transparent)`;
    const gradien = `linear-gradient(to bottom,${dominantColor}, transparent)`;
    const gradien1 = `linear-gradient(to top, ${dominantColor}, transparent, transparent)`;
    const viewport = window.innerWidth ;
    if(viewport > 425){
    parent.style.background = gradient;
    e.target.nextElementSibling.style.background = gradient1;
    }else {
      parent.style.background = gradien;
    e.target.nextElementSibling.style.background = gradien1;
    }
    console.log(id + 1, length)
    if(length === Number(id) + 1){
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen pt-20 z-50 md:py-20 px-8 max-w-6xl mx-auto md:px-24 ">
      {loading && <div className='fixed inset-0 w-full h-full  bg-opacity-50 backdrop-blur-xl z-50 flex items-center justify-center '>

<LoaderIcon className='animate-spin' />
</div>}
      <h1 className="text-3xl  font-bold antialiased my-3">
        All Blogs
      </h1>
      <div className="flex flex-col space-y-7 my-3 py-5">
        {blogs.map((e: any, i) => (
          <a 
          key={i} href={`/blog/${e?.slug}`}>
          <Card
            
            className="relative shadow-blue-950/10 border-none flex flex-col md:flex-row p-0 md:h-60 overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 ease-in-out group"
          >
            <CardContent id={i.toString()} className="md:w-1/2 w-full p-0 relative overflow-hidden">
              <img
                crossOrigin="anonymous"
                onLoad={imgLoad}
                src={e.image}
                alt={e.title}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-110"
              />

              <div className="absolute inset-0 w-full h-full "></div>
              <Button variant={'outline'} className="absolute top-[43%] left-[33%] dark:!border-neutral-200 !bg-opacity-30  rounded-none scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out">Read more</Button>
            </CardContent>
            <CardHeader className="w-full ">
              <CardTitle>{e.title}</CardTitle>
              <CardDescription>
                <Markdown className={"text-neutral-800"}>{e.content.split("\n\n")[1].slice(0, 150)}</Markdown>...
              </CardDescription>
              <div className="flex flex-col  h-full justify-end space-y-2">
              <Badge className="w-fit my-2 !border-none">{e.author}</Badge>
              <div className="flex flex-wrap gap-2 my-3 ">
                {e.tags.slice(0, 3).map((e: any, i: number) => (
                  <Badge variant={"outline"} className="border-neutral-600" key={i}>
                    #{e}
                  </Badge>
                ))}
              </div>
              </div>
            </CardHeader>
          </Card>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;
