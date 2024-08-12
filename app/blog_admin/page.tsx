"use client"
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState(false) ;
  const router = useRouter() ;


  const handleDelete = async (e: any)=>{
    setSuccess(false) ;
    const id = e.target.nextElementSibling.value.split('_')[0] ;
    const res = await fetch(`api/blog/${id}`, {method:"DELETE"})
    const data = await res.json() ; 
    if(data.success){
      console.log('deleted successfully') ;
      setLoading("")
      setSuccess(true) ;
    }
  }

  const handleAuthorize = async (e:any)=>{
    setSuccess(false) ;
    const val = e.target.nextElementSibling.nextElementSibling.nextElementSibling.value ;
    const b = val.split('_') ;
    const res = await fetch(`api/blog_admin`, {method:"PUT", headers:{'Content-Type':"application/json"}, body:JSON.stringify({id:b[0], authorized:b[1]})})
    const data = await res.json() ; 
    if(data.success){
      setLoading("") ; 
      setSuccess(true) ;
    }
  }

  useEffect(() => {
    fetch("/api/blog_admin")
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
      .finally(()=>{
        
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });

  }, [success]);
  return (
    <div className="min-h-screen pt-20 md:py-20 px-8 max-w-6xl mx-auto md:px-24 ">
      {loading && (
        <div className="fixed inset-0 w-full h-full z-50 bg-opacity-50 backdrop-blur-lg flex items-center justify-center ">
          <LoaderIcon className="animate-spin" />
        </div>
      )}
      <h1 className="text-2xl md:text-3xl  font-bold antialiased my-5">
        Admin Panel
      </h1>
      {
        blogs.map((e: any, i: any)=>(
          <Card key={i} className="mb-5 bg-opacity-50 backdrop-blur-sm rounded-xl">
            <CardHeader>
              <CardTitle className="md:text-xl text-lg">{e?.title}</CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="flex space-x-2 self-end ml-auto">
                {<Button  onClick={(ev)=>{setLoading(`${e._id}_a`); handleAuthorize(ev);}} variant={'outline'} className="rounded-full !py-0.5 px-5">
                {loading == `${e._id}_a` &&  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  {!e.authorized?'Authorize':'Unauthorize'}</Button>}
                <a href={`updateblog/${e.slug}`}><Button variant={'outline'} className="bg-blue-950 rounded-full text-neutral-50 hover:text-neutral-200  !py-0.5 px-5 hover:bg-blue-900 duration-300 transition-colors">
                  
                  Edit</Button></a>
                <Button variant={'destructive'} className="rounded-full !py-0.5 px-5" onClick={(ev)=>{setLoading(`${e._id}_d`); handleDelete(ev);}}>
                {loading == `${e._id}_d` &&  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  Delete
                  </Button>
                <input hidden value={`${e._id}_${!e.authorized}`} />
              </div>
            </CardFooter>
          </Card>
        ))
      }

      <Button className="float-right my-3" variant={'secondary'} onClick={()=>router.push('/addblog')}>Add blog</Button>
    </div>
  );
};

export default Page;
