"use client"
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter() ;


  const handleDelete = async (e: any)=>{
    setLoading(true)
    const id = e.target.nextElementSibling.value ;
    const res = await fetch(`api/blog/${id}`, {method:"DELETE"})
    const data = await res.json() ; 
    if(data.success){
      console.log('deleted successfully') ;
      setLoading(false)
      router.refresh() ;
    }
  }

  useEffect(() => {
    setLoading(true);
    fetch("/api/blog")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setBlogs(data.data);
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });

      setLoading(false)
  }, []);
  return (
    <div className="min-h-screen pt-20 md:py-20 px-8 max-w-6xl mx-auto md:px-24 ">
      {loading && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg flex items-center justify-center ">
          <LoaderIcon className="animate-spin" />
        </div>
      )}
      <h1 className="text-3xl text-neutral-100 font-bold antialiased my-3">
        All Blogs
      </h1>
      {
        blogs.map((e: any, i: any)=>(
          <Card key={i} className="mb-3 ">
            <CardHeader>
              <CardTitle>{e?.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="flex space-x-2 self-end ml-auto">
                <Button onClick={()=>{setLoading(true) ;router.push(`updateblog/${e.slug}`); setLoading(false)}} variant={'outline'}>Edit</Button>
                <Button variant={'destructive'} onClick={handleDelete}>Delete</Button>
                <input hidden value={e._id} />
              </div>
            </CardFooter>
          </Card>
        ))
      }

      <Button className="float-right my-3" onClick={()=>router.push('/addblog')}>Add blog</Button>
    </div>
  );
};

export default Page;
