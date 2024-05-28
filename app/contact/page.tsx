"use client";

import React, { useEffect, useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReloadIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Formsuccess from "@/components/ui/formsuccess";
import { useSearchParams } from "next/navigation";
import { CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string()
    .min(5, { message: "Name must be at least 5 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),
  email: z.string()
    .email({ message: "Please provide a valid email address." }),
  category: z.string()
    .nonempty({ message: "Category cannot be empty. Please select or enter a category." }),
  pricing: z.string()
    .optional(),
  message: z.string()
    .min(5, { message: "Message must be at least 5 characters long." })
    .max(100, { message: "Message must be at most 100 characters long." }),
  phone: z.string()
    .length(10, { message: "Phone number must be exactly 10 digits long." }),
  coupon: z.string()
    .optional(),
});


const Page = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState(false);

  const router = useSearchParams();
  const pricing = router.get("pricing");
  const offer = router.get("offer");

  useEffect(() => {
    if (offer && offer.length > 0) {
      setCoupon(true);
    }
  }, [offer]);

  const { toast } = useToast();
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      pricing: "",
      message: "",
      phone: "",
      coupon: offer ? offer : "",
    },
  });

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = methods;

  let selectOptions = [
    { label: "15 Minute Session Package", value: 0, price: "₹99" },
    { label: "30 Minute Session Package", value: 1, price: "₹199" },
    { label: "15 Minute Add-On", value: 2, price: "₹49/session" },
    { label: "30 Minute Add-On", value: 3, price: "₹99/session" },
    {
      label: "1 Month Subscription",
      value: 4,
      price: "Rs. 599/- (Save Rs. 200",
    },
    {
      label: "3 Month Subscription",
      value: 5,
      price: "Rs. 1199/- (Save Rs. 200)",
    },
    {
      label: "6 Month Subscription",
      value: 6,
      price: "Rs. 1599/- (Save Rs. 200)",
    },
  ];

  const submitee = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (response.ok) {
      // toast({
      //   variant: 'constructive',
      //   title: "Successfully sent to the team",
      //   description: "Explore different parts of the website till our team replies you",
      // })

      setSuccess(true);

      console.log("mail sent");
      console.log(toast);
    } else {
      console.log("mail failed");
    }
  };

  return (
    <Form {...methods}>
      <form
        method="post"
        onSubmit={handleSubmit(submitee)}
        className="  bg-dot-white/[0.08]"
      >
        <CardContent className="gap-y-3  flex flex-col">
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="enter you name" className="bg-opacity-70" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"  className="bg-opacity-70"
                    placeholder="enter you email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone No.</FormLabel>
                <FormControl>
                  <Input
                    type="number"  className="bg-opacity-70"
                    placeholder="enter your phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => setValue("category", value)}  
                    {...field}
                  >
                    <SelectTrigger className="bg-opacity-60">
                      <SelectValue placeholder="Select you category of concern" />
                    </SelectTrigger>
                    <SelectContent className="bg-opacity-70">
                      <SelectItem value="Academic">Academic</SelectItem>
                      <SelectItem value="Professional">Professional</SelectItem>
                      <SelectItem value="Social">Social</SelectItem>
                      <SelectItem value="Personal">Personal</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {pricing && (
            <FormField
              control={control}
              name="pricing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pricing</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={(value) => setValue("pricing", value)}
                      {...field}  
                    >
                      <SelectTrigger className="bg-opacity-60">
                        <SelectValue placeholder="Select your Pack" />
                      </SelectTrigger>
                      <SelectContent className="bg-opacity-70">
                        {selectOptions.map((e, i) => (
                          <SelectItem key={i} value={e.label}>
                            {e.label}{" "}
                            <span className="text-neutral-500 ml-2">
                              {e.price}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe you problem</FormLabel>
                <FormControl>
                  <Textarea
                    className="bg-opacity-60"
                    {...field}
                    placeholder="eg: I want your assitance in the above category"
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        {coupon && <FormField
          control={control}
          name="coupon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coupon</FormLabel>
              <FormControl>
              <Select
                      onValueChange={(value) => setValue("coupon", value)}  
                      {...field}
                    >
                      <SelectTrigger className="bg-opacity-60">
                        <SelectValue placeholder="Select your coupon" />
                      </SelectTrigger>
                      <SelectContent className={"bg-opacity-70"}>
                          <SelectItem  value="NEW_TO_OURSOULSS">
                            NEW_TO_OURSOULSS
                          </SelectItem>
                          <SelectItem  value="OURSERVICES">
                            OURSERVICES
                          </SelectItem>
                      </SelectContent>
                    </Select>
              </FormControl>
              <FormMessage />
              {getValues("coupon") != "" && (
                <Formsuccess msg="Successfully Added Coupon"></Formsuccess>
              )}
            </FormItem>
          )}
        />}

  
        </CardContent>
        <CardFooter className="flex flex-col">
          {success && (
            <div className="py-2 w-full ">
              <Formsuccess msg="Successfully sent to the team"></Formsuccess>
            </div>
          )}

          <div className="w-full flex flex-row items-center justify-between ">
            <Button
              variant={"link"}
              onClick={(e) => {
                e.preventDefault();
                setCoupon(!coupon);
              }}
              className="my-3"
            >
              Have a coupon code ?
            </Button>
            <Button
              type="submit"
              className="w-44 rounded-full bg-blue-950 hover:bg-blue-900 transition-colors"
              disabled={loading ? true : false}
            >
              {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </div>
        </CardFooter>
      </form>
    </Form>
  );
};

export default Page;
