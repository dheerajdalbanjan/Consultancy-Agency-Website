"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Toast } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Check } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Razorpay = require("razorpay");

// razorpay.d.ts or at the top of your TypeScript file

interface CustomUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  phone: string;
}

const Pricing = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  var pricing = [
    {
      type: "Starter Plus",
      mode: "starter",
      name: "15 Minute Session Package",
      price: "99",
      sessions_included: "1 session",
      session_length: "15 mins",
      counselor_matching: "with non-professional counseling",
    },
    {
      type: "Starter Pro",
      mode: "starter",
      name: "30 Minute Session Package",
      price: "199",
      sessions_included: "1 session",
      session_length: "30 mins",
      counselor_matching: "with non-professional counseling",
    },
    {
      type: "Add On Plus",
      mode: "add on",
      name: "15 Minute Add-On",
      price: "49",
      sessions_included: "1 session",
      session_length: "15 mins",
      counselor_matching: "with non-professional counseling",
    },
    {
      type: "Add On Pro",
      mode: "add on",
      name: "30 Minute Add-On",
      price: "99",
      sessions_included: "1 session",
      session_length: "30 mins",
      counselor_matching: "with non-professional counseling",
    },
  ];

  let monthly = [
    {
      name: "MONTHLY Silver",
      price: "599",
      bprice: "799",
      discounted_price: "Rs. 599/-",
      sessions_included: "1 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "4 phone sessions",
      counselor_matching: "with professional counseling",
      access_term: "1 month from purchase date",
      mode: "monthly",
    },
    {
      name: "MONTHLY Gold",
      price: "1199",
      bprice: "1399",
      discounted_price: "Rs. 1199/-",
      sessions_included: "3 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "13 phone sessions",
      counselor_matching: "with professional counseling",
      access_term: "3 months from purchase date",
      mode: "monthly",
    },
    {
      name: "MONTHLY Platinum",
      price: "1599",
      bprice: "1799",
      discounted_price: "Rs. 1599/-",
      sessions_included: "6 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "25 phone sessions",
      counselor_matching: "with professional counseling",
      access_term: "6 months from purchase date",
      mode: "monthly",
    },
  ];

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
    } catch (err) {
      console.log(err);
    }
  }, []);

  async function handleClick(details: any) {
    console.log(details);


    if(!session){
        router.replace('/login')
        return ;
    }
        setLoading(true);

    const res = await fetch("api/razorpay", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        amount: Number(details.price * 100),
        currency: "INR",
      }),
    });
    const response = await res.json();
    if (res.ok) {
      const order = response.order;
      var options = {
        key: process.env.RAZOR_KEY_ID,
        amount: order.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "OurSoulss", //your business name
        description: "Test Transaction",
        image: "/logo.png",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response: any) {
          const body = { ...response };
          const res = await fetch("/api/verify_razorpay", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body),
          });
          const resp = await res.json();
          if (res.ok) {
            const { order_id, payment_id } = resp;
            const res = await fetch("/api/package", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                ...details,
                order_id,
                payment_id,
                user_id: (session?.user as CustomUser).id,
              }),
            });
            const data = await res.json();
            if (res.ok) {
              setOpen(true);
              setLoading(false);
            }
          } else {
            alert("invalid payment");
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: session?.user?.name, //your customer's name
          email: session?.user?.email,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options, {
        key_id: process.env.RAZOR_KEY_ID,
      });

      rzp1.open();
    }
    //     console.log("taslaskjdf")
    //     // toast({
    //     //     variant: "default",
    //     //     title: "Currently no packs are available",
    //     //     description: "Explore different parts of the website till our team adds on the packs",
    //     // })
  }

  return (
    <div className="max-w-7xl px-2 mt-20 mx-auto min-h-screen">
      <h1 className="bg-clip-text bg-gradient-to-br antialiased pl-5 my-5 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-semibold  tracking-tight lg:text-4xl">
        Pricing
      </h1>

      <h2 className="text-2xl sm:text-3xl font-bold antialiased mt-6 pl-5 list-disc">
        Basic Plans
      </h2>
      <div className="flex flex-col l  md:flex-row my-5 items-center justify-start p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
        {pricing.map((e, i) => (
          <Card
            key={i}
            className="!w-full bg-opacity-50 rounded-xl backdrop-blur-sm shadow-blue-950/10 shadow-lg  relative overflow-hidden"
          >
            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-emerald-50 via-emerald-200 to-emerald-300 rotate-45 text-neutral-900  text-[13px] uppercase">
              {e.mode}
            </p>
            <CardHeader>
              <CardTitle>Rs. {e.price}</CardTitle>
              <CardDescription>
                <p className="text-lg ">{e.type}</p>
                <p>{e.name}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <p>
                Session Length:{" "}
                <p className="px-2 text-sm inline-flex text-center py-0.5  rounded-full bg-neutral-100 dark:bg-neutral-700">
                  {e.session_length}
                </p>
              </p>
              <p>
                Counsellor Matching:{" "}
                <p className=" text-sm inline-flex  py-0.5   ">
                  {e.counselor_matching}
                </p>
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleClick(e)}
                className="w-full rounded-full bg-blue-950 hover:bg-blue-900 transition-colors"
                disabled={loading ? true : false}
              >
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Buy now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl  font-bold antialiased mt-6 pl-5 list-disc">
        Monthly Plans
      </h2>
      <div className="flex flex-col md:flex-row my-5 items-center justify-between p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
        {monthly.map((e, i) => (
          <Card
            key={i}
            className="!w-full rounded-xl bg-opacity-50 backdrop-blur-sm  md:w-auto  relative overflow-hidden shadow-lg shadow-blue-950/10"
          >
            <p className="absolute top-3 -right-8 py-0.5 w-28 text-center bg-gradient-to-r from-indigo-100 via-indigo-300 to-indigo-500 rotate-45 text-neutral-950  text-[13px] uppercase">
              monthly
            </p>
            <CardHeader>
              <CardTitle className="flex ">
                <h2>Rs. {e.price}</h2>
                <h4 className="text-rose-700 ml-2 line-through text-lg font-semibold">
                  Rs. {e.bprice}
                </h4>
              </CardTitle>
              <CardDescription>{e.name}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Session Length:{" "}
                <span className="px-2 text-center text-sm py-0.5  rounded-xl  bg-neutral-100 inline-flex  dark:bg-neutral-700">
                  {e.session_length}
                </span>
              </p>
              <p>
                Sessions Included:{" "}
                <span className="px-2 text-center py-0.5 text-sm rounded-xl ">
                  {e.sessions_included}
                </span>
              </p>
              <p>
                No. Of Sessions:{" "}
                <span className="px-2 text-center py-0.5 text-sm rounded-xl ">
                  {e.no_of_sessions}
                </span>
              </p>
              <p>
                Access term:{" "}
                <span className="px-2 text-center py-0.5 text-sm rounded-xl ">
                  {e.access_term}
                </span>
              </p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleClick(e)}
                className="w-full rounded-full bg-blue-950 hover:bg-blue-900 transition-colors"
                disabled={loading ? true : false}
              >
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Buy now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-emerald-700 border-none text-neutral-50">
          <DialogHeader>
            <DialogTitle>Payment successfull</DialogTitle>
            <DialogDescription className="text-neutral-100">
              {" "}
              Your payment has been successfully verified by OurSoulss team, you
              can avail you package from the below link
            </DialogDescription>
          </DialogHeader>
          <Check className="w-36 mx-auto  h-36 border-emerald-200 text-emerald-300 border-4 my-3 rounded-full font-bold" />

          <DialogFooter className="justify-end items-end">
            <DialogClose asChild>
              <a href="/mypackages" className="w-fit float-right">
                <Button type="button" className="bg-[#242038] rounded-full">
                  My packages
                </Button>
              </a>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Pricing;
