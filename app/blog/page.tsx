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
var ColorThief = require('colorthief');

import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true)

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
      .then((data) => {
        // Set the fetched blogs to the state
        console.log(data.data);
        setBlogs(data.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
      handleLoading();
  }, []);

  const delay = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));


    const handleLoading = async () => {
        await delay(3000);
        setLoading(false);
      };


  function componentToHex(c: any) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r: any, g: any, b: any) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const imgLoad = (e: any) => {
    const parent = e.target.parentNode.nextElementSibling;
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(e.target);
    const rgbColor = rgbToHex(
      dominantColor[0],
      dominantColor[1],
      dominantColor[2]
    );
    const gradient = `linear-gradient(to right, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent)`;
    const gradient1 = `linear-gradient(to left, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent, transparent)`;
    const gradien = `linear-gradient(to bottom, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent)`;
    const gradien1 = `linear-gradient(to top, rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}), transparent, transparent)`;
    const viewport = window.innerWidth ;
    if(viewport > 425){
    parent.style.background = gradient;
    e.target.nextElementSibling.style.background = gradient1;
    }else {
      parent.style.background = gradien;
    e.target.nextElementSibling.style.background = gradien1;
    }
  };

  return (
    <div className="min-h-screen py-20 px-8 max-w-6xl mx-auto md:px-24 ">
      {loading && <div className='fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center '>

<LoaderIcon className='animate-spin' />
</div>}
      <h1 className="text-3xl text-neutral-100 font-bold antialiased my-3">
        All Blogs
      </h1>
      <div className="flex flex-col space-y-7 my-3 py-5">
        {blogs.map((e: any, i) => (
          <a 
          key={i} href={`/blog/${e.slug}`}>
          <Card
            className="relative flex flex-col md:flex-row p-0 md:h-60 overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 ease-in-out group"
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
                <Markdown className={"text-neutral-300"}>{e.content.slice(0, 100)}</Markdown>...
              </CardDescription>
              <div className="flex flex-col  h-full justify-end space-y-2">
              <Badge className="w-fit my-2 !border-none">{e.author}</Badge>
              <div className="flex space-x-1 my-3 overflow-hidden">
                {e.tags.map((e: any, i: any) => (
                  <Badge variant={"outline"} className="dark:!border-neutral-300" key={i}>
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
