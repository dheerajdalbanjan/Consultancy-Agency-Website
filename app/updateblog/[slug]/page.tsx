"use client";

import { Button } from "@/components/ui/button";
const sluggify = require("slugify");
import Markdown from "react-markdown";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import * as z from "zod";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Formsuccess from "@/components/ui/formsuccess";
import { ReloadIcon } from "@radix-ui/react-icons";
import Formerror from "@/components/ui/formerror";
import { Cross, LoaderIcon, XIcon } from "lucide-react";

const blogPostSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title should contain a minimum of 5 characters" })
    .max(150, { message: "Title should contain a maximum of 150 characters" }),
  content: z
    .string()
    .min(20, { message: "Content should contain a minimum of 20 characters" }),
  image: z
    .string()
    .min(5, { message: "Image link should be minimum 5 charecters." }),
  author: z
    .string()
    .min(3, { message: "Author name should contain a minimum of 3 characters" })
    .max(50, {
      message: "Author name should contain a maximum of 50 characters",
    }),
  tags: z.array(z.string()),
  slug: z.string().optional(),
});

const AddBlog = ({ params }: { params: { slug: string } }) => {
  const [dataa, setData]: any = useState();
  const methods = useForm({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      author: "",
      image: "",
      tags: [],
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/blog/${params.slug}`); // Adjust the URL to your API endpoint
          if (!response.ok) {
            throw new Error("Failed to fetch blogs");
          }
          const data = await response.json();
          // Set the fetched blogs to the state
          if (data.success) {
            setData(data.data);
            // Set form values
            Object.keys(data.data).forEach((key: any) => {
              setValue(key, data.data[key]);
            });
          }
        } catch (error) {
          console.error(error);
          // Handle error
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
  }, [params.slug, setValue]);

  const [tags, setTags] = useState<string[]>(getValues().tags || []);
  const [content, setContent] = useState(getValues().content || "")
  const [tag, setTag] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitt = async (data: any) => {
    const dat = { ...data, slug: sluggify(data.title).toLowerCase() };
    setLoading(true);
    const response = await fetch(`/api/blog/${dataa._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dat),
    });

    const da = await response.json();
    setLoading(false);
    if (da.success) {
      setSuccess(true);
    } else {
      setError(da.error);
    }
  };

  const handleTagKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    const currentTags = getValues().tags;

    // Ensure currentTags is an array of strings
    const tags = Array.isArray(currentTags) ? currentTags : [];

    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        if (inputValue.trim()) {
            setValue('tags', (tags as any).concat(inputValue.trim()));
            setTag('');
        }
    }
  };

  const [removingTag, setRemovingTag] = useState("");
  const handleTagClick = (value: string) => {
    // Get the current tags from the state
    const currentTags = getValues().tags;

    // Add the tag to removingTags to trigger the animation
    setRemovingTag(value);

    // Set a timeout to remove the tag after the animation
    setTimeout(() => {
      // Filter out the clicked tag from current tags
      const newTags = currentTags.filter((tag) => tag !== value);

      // Updating the tags state
      setTags(newTags);

      // Updating the form values
      setValue("tags", newTags);

      // Remove the tag from removingTags
      setRemovingTag("");

      // Logging the updated tags
      console.log(newTags);
    }, 500); // Duration should match the CSS animation duration
  };

  useEffect(() => {
    // Set initial tags when component mounts
    setTags(getValues().tags || []);
  }, [getValues().tags]);
  useEffect(() => {
    // Set initial tags when component mounts
    setTags(getValues().tags || []);
  }, [ getValues().tags]);

  useEffect(() => {
    // Set initial tags when component mounts
    setContent(getValues().content );
  }, [ getValues().content]);




  return (
    <Form {...methods}>
      {loading && (
        <div className="fixed z-50 inset-0 w-full h-full z-50 bg-opacity-50 backdrop-blur-lg flex items-center justify-center ">
          <LoaderIcon className="animate-spin" />
        </div>
      )}
      {!loading && <form onSubmit={handleSubmit(onSubmitt)} className=" mt-20 px-5">
        <Card className="max-w-5xl mx-auto md:p-5 bg-opacity-50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Update blog</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter title"
                      {...field}
                      onChange={(e) => {
                        setValue("title", e.target.value);
                        setValue("slug", sluggify(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    This is the title of your blog post.
                  </FormDescription>
                  {errors.title && (
                    <FormMessage>{errors.title.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="slug"
              disabled
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter slug" {...field} />
                  </FormControl>
                  {errors.slug && (
                    <FormMessage>{errors.slug.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image link" {...field} />
                  </FormControl>
                  {errors.image && (
                    <FormMessage>{errors.image.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter content"
                      {...field}
                      className="input"
                      rows={25}
                      onChange={(e)=>{setValue('content', e.target.value); setContent(e.target.value)}}
                    ></Textarea>
                  </FormControl>
                  {errors.content && (
                    <FormMessage>{errors.content.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Preview the blog content here
                </AccordionTrigger>
                <AccordionContent>
                  <Markdown
                    className={"prose prose-invert"}
                  >
                    {content}
                  </Markdown>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <FormField
              control={control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter author name" {...field} />
                  </FormControl>
                  {errors.author && (
                    <FormMessage>{errors.author.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input
                      value={tag}
                      placeholder="Enter tag"
                      onChange={(newTags) => setTag(newTags.target.value)}
                      onKeyDown={handleTagKey}
                    />
                  </FormControl>

                  <FormDescription>
                    Press Enter or , key to add the tag
                  </FormDescription>
                  {errors.tags && (
                    <FormMessage>{errors.tags.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <div className="flex flex-wrap gap-2 py-2">
            {tags.map((e, i) => (
                <Badge
                  onClick={() => handleTagClick(e)}
                  className={`cursor-pointer active:scale-90 hover:text-neutral-50  hover:bg-red-800 hover:border-none group transition-all duration-300 ease-in-out ${
                    removingTag === e ? "scale-0" : ""
                  }`}
                  variant={"outline"}
                  key={i}
                >
                  {e}
                  <XIcon className="w-3 h-3 -ml-4 group-hover:ml-2 scale-0 group-hover:scale-100 transition-all duration-300 hover:scale-100" />
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3">
            {success && <Formsuccess  msg="Blog udpated successfully." />}
            {error.length > 0 && <Formerror error={error} />}
            <Button
              type="submit"
              className="w-full rounded-full bg-blue-950 hover:bg-blue-900 transition-colors duration-300"
              disabled={loading ? true : false}
            >
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Update blog
            </Button>
          </CardFooter>
        </Card>
      </form>}
    </Form>
  );
};

export default AddBlog;
