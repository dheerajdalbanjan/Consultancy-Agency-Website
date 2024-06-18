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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Formsuccess from "@/components/ui/formsuccess";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [cdata, setCdata] = useState<any>(null);
  const [referal, setReferal] = useState(false);
  const [btab, setBtab] = useState("non-professional");
  const [mtab, setMtab] = useState("non-professional");
  const [video, setVideo] = useState(false);
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [referralCode, setReferralCode] = useState('')
  const [discountApplied, setDiscountApplied] = useState(false);
  const [pamount , setPamount] = useState(0)


  const fixedDiscounts: any = {
    MANISH100OFF: 100,
    RONIT100OFF: 100,
    DHEERAJ100OFF: 100,
    SATWIK100OFF: 100
  };

  const percentageDiscounts: any = {
    VANYA10: 10 // 10% off
  };

  const applyReferralCode = (value: any) => {
    console.log(value)
    let discount = 0;

    if (fixedDiscounts[value]) {
      discount = fixedDiscounts[value];
    } else if (percentageDiscounts[value]) {
      discount = (amount * percentageDiscounts[value]) / 100;
    }

    if (discount > 0) {
      setAmount(prev =>{ setPamount(prev);  return Number((prev - discount).toFixed(2))});
      setDiscountApplied(true);
    } else {
      if(discountApplied){
        setAmount(pamount);
      setDiscountApplied(false);
      }
      console.log('invalid code')
    }
  };
  var pricing = [
    {
      type: "Starter Plus",
      mode: "starter",
      name: "40 Minute Session Package",
      price: "199",
      sessions_included: "1 session",
      session_length: "40 mins",
      counselor_matching: "non-professional",
      video: "89",
    },
    {
      type: "Starter Pro",
      mode: "starter",
      name: "90 Minute Session Package",
      price: "299",
      sessions_included: "1 session",
      session_length: "90 mins",
      counselor_matching: "non-professional",
      video: "89",
    },
    {
      type: "Add On Plus",
      mode: "add on",
      name: "15 Minute Add-On",
      price: "49",
      sessions_included: "1 session",
      session_length: "15 mins",
      counselor_matching: "non-professional",
      video: "89",
    },
    {
      type: "Add On Pro",
      mode: "add on",
      name: "30 Minute Add-On",
      price: "99",
      sessions_included: "1 session",
      session_length: "30 mins",
      counselor_matching: "non-professional",
      video: "89",
    },

    {
      type: "Starter Plus",
      mode: "starter",
      name: "Basic Pro 40 Minute Session",
      price: "349",
      sessions_included: "1 session",
      session_length: "40 mins",
      counselor_matching: "professional",
      video: "89",
    },
    {
      type: "Starter Pro",
      mode: "starter",
      name: "Basic Pro 90 Minute Session",
      price: "499",
      sessions_included: "1 session",
      session_length: "90 mins",
      counselor_matching: "professional",
      video: "89",
    },
    {
      type: "Add On Plus",
      mode: "add on",
      name: "Basic Pro 15 Minute Add-On",
      price: "49",
      sessions_included: "1 session",
      session_length: "15 mins",
      counselor_matching: "professional",
      video: "89",
    },
    {
      type: "Add On Pro",
      mode: "add on",
      name: "Basic Pro 30 Minute Add-On",
      price: "99",
      sessions_included: "1 session",
      session_length: "30 mins",
      counselor_matching: "professional",
      video: "89",
    },
  ];

  let monthly = [
    {
      name: "MONTHLY Silver",
      price: "599",
      bprice: "799",
      discounted_price: "₹599/-",
      sessions_included: "1 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "4 sessions",
      counselor_matching: "non-professional",
      access_term: "1 month from purchase date",
      mode: "monthly",
      video: "299",
    },
    {
      name: "MONTHLY Gold",
      price: "1199",
      bprice: "1399",
      discounted_price: "₹1199/-",
      sessions_included: "3 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "10 sessions",
      counselor_matching: "non-professional",
      access_term: "3 months from purchase date",
      mode: "monthly",
      video: "299",
    },
    {
      name: "MONTHLY Platinum",
      price: "1599",
      bprice: "1799",
      discounted_price: "₹1599/-",
      sessions_included: "6 Month Subscription",
      session_length: "40 minutes each",
      no_of_sessions: "16 sessions",
      counselor_matching: "non-professional",
      access_term: "6 months from purchase date",
      mode: "monthly",
      video: "299",
    },

    {
      name: "PRO Silver",
      price: "1699",
      bprice: "1799",
      discounted_price: "₹1699/-",
      sessions_included: "1 Month Subscription",
      session_length: "45 minutes each",
      no_of_sessions: "5 sessions",
      counselor_matching: "professional",
      access_term: "1 month from purchase date",
      mode: "monthly",
      video: "299",
    },
    {
      name: "PRO Gold",
      price: "3899",
      bprice: "3999",
      discounted_price: "₹3899/-",
      sessions_included: "3 Month Subscription",
      session_length: "45 minutes each",
      no_of_sessions: "12 sessions",
      counselor_matching: "professional",
      access_term: "3 months from purchase date",
      mode: "monthly",
      video: "299",
    },
    {
      name: "PRO Platinum",
      price: "6949",
      bprice: "7199",
      discounted_price: "₹6949/-",
      sessions_included: "6 Month Subscription",
      session_length: "45 minutes each",
      no_of_sessions: "20 sessions",
      counselor_matching: "professional",
      access_term: "6 months from purchase date",
      mode: "monthly",
      video: "299",
    },
  ];

  const [loading, setLoading] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
    } catch (err) {
      console.log(err);
    }
  }, []);

  function handleClick(details: any) {
    setLoading(`${details.mode}_${details.price}`);
    setCdata(details);
    let price = Number(details.price);
    price += (price / 100) * 2 + 3 + (price / 100) * 18;
    price = Number(price.toFixed(2));
    setAmount(price);
    setCheckout(true);
  }

  async function checkOut() {
    const details = cdata;
    setCheckout(false);

    if (!session) {
      router.replace("/login");
      return;
    }

    const res = await fetch("api/razorpay", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        amount: Number(Math.round(amount) * 100),
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
              setLoading("");
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

      rzp1.on("payment.cancelled", function () {
        setLoading("");
      });

      rzp1.on("payment.failed", function () {
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        setLoading("");
      });
    }
    //     console.log("taslaskjdf")
    //     // toast({
    //     //     variant: "default",
    //     //     title: "Currently no packs are available",
    //     //     description: "Explore different parts of the website till our team adds on the packs",
    //     // })
  }

  return (
    <div className="max-w-6xl px-2 mt-20 mx-auto min-h-screen">
      <h1 className=" antialiased pl-5 my-7 sm:text-start  text-3xl drop-shadow-md font-semibold  tracking-tight lg:text-4xl">
        Pricing
      </h1>

      <Tabs value={btab} onValueChange={setBtab} className="overflow-hidden">
      <Select
      
              value={btab}
              onValueChange={(e) => {
                setBtab(e)
              }}
            >
              <SelectTrigger className="w-[180px] !outline-none md:hidden ml-5  !ring-0 bg-opacity-50 backdrop-blur-md">
                <SelectValue placeholder="select the packs" />
              </SelectTrigger>
              <SelectContent className="bg-opacity-50 backdrop-blur-md border-none">
                  <SelectItem
                    value={"non-professional"}
                    className="!bg-transparent text-start w-full cursor-pointer"
                  >
                    non-professional
                  </SelectItem>
                  <SelectItem
                    value={"professional"}
                    className="!bg-transparent text-start w-full cursor-pointer"
                  >
                    professional
                  </SelectItem>
              </SelectContent>
            </Select>
        <TabsList className="ml-5 hidden md:flex rounded-xl md:rounded-full bg-orange-50 backdrop-blur-sm h-fit w-fit  flex-col md:flex-row ">
          <TabsTrigger
            className={`rounded-full   ${
              btab === "non-professional"
                ? "!bg-dark_purple-400 !text-neutral-50"
                : "bg-transparent"
            }`}
            value="non-professional"
          >
            Basic non-professional plans
          </TabsTrigger>
          <TabsTrigger
            className={`rounded-full  ${
              btab === "professional"
                ? "!bg-dark_purple-400 !text-neutral-50"
                : "bg-transparent"
            } `}
            value="professional"
          >
            Basic professional plans
          </TabsTrigger>
        </TabsList>
        <TabsContent value={btab} >
          <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-y-8 items-center justify-between">
            {pricing.map((plan, i) => {
              if (plan.counselor_matching === btab) {
                return (
                  <Card key={i}  className="w-full border-none max-w-md bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg overflow-hidden dark:bg-gray-950">
                        <CardHeader className="bg-indigo-500 to-amber-500 p-6 text-center">
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                          <p className="text-gray-200 mt-2">Get started with basic plan</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-indigo-500 dark:text-indigo-400">₹{plan.price}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">/session</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Session Length</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.session_length}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Counselor Matching</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.counselor_matching}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Sessions Included</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.sessions_included}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-3 bg-indigo-500 to-purple-500 text-white hover:bg-indigo-600 hover:to-purple-600"onClick={() => handleClick(plan)}
                        
                        disabled={
                          checkout && loading === `${plan.mode}_${plan.price}`
                            ? true
                            : false
                        }
                      >
                        {checkout && loading === `${plan.mode}_${plan.price}` && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                            Buy now
                          </Button>
                        </CardContent>
                      </Card>
                );
              }
            })}
          </div>
        </TabsContent>
      </Tabs>

      <Tabs value={mtab} onValueChange={setMtab} className="overflow-hidden">
        <TabsList className="ml-5 rounded-xl hidden  md:rounded-full bg-orange-50 backdrop-blur-sm h-fit w-fit md:flex flex-col md:flex-row  ">
          <TabsTrigger
            className={`rounded-full   ${
              mtab === "non-professional"
                ? "!bg-dark_purple-400 !text-neutral-50"
                : "bg-transparent"
            }`}
            value="non-professional"
          >
            Monthly non-professional plans
          </TabsTrigger>
          <TabsTrigger
            className={`rounded-full   ${
              mtab === "professional"
                ? "!bg-dark_purple-400 !text-neutral-50"
                : "bg-transparent"
            }`}
            value="professional"
          >
            Monthly professional plans
          </TabsTrigger>
        </TabsList>
        <Select
      
              value={mtab}
              onValueChange={(e) => {
                setMtab(e)
              }}
            >
              <SelectTrigger className="w-fit !outline-none md:hidden ml-5  !ring-0 bg-opacity-50 backdrop-blur-md">
                <SelectValue placeholder="select the packs" />
              </SelectTrigger>
              <SelectContent className="bg-opacity-50 backdrop-blur-md border-none">
                  <SelectItem
                    value={"non-professional"}
                    className="!bg-transparent text-start w-full cursor-pointer"
                  >
                    Monthly Non-Professional
                  </SelectItem>
                  <SelectItem
                    value={"professional"}
                    className="!bg-transparent text-start w-full cursor-pointer"
                  >
                    Professional
                  </SelectItem>
              </SelectContent>
            </Select>
        <TabsContent value={mtab}>
          <div className="flex flex-col md:flex-row my-5 items-center justify-between p-5 space-x-0 md:space-x-5 space-y-4 md:space-y-0">
            {monthly.map((plan, i) => {
              if (plan.counselor_matching === mtab) {
                return (
                  <Card key={i}  className="w-full max-w-md border-none bg-opacity-50 backdrop-blur-md shadow-lg rounded-lg overflow-hidden dark:bg-gray-950">
                        <CardHeader className="bg-gradient-to-r from-indigo-500 to-emerald-400 p-6 text-center">
                          <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                          <p className="text-gray-200 mt-2">Get started with monthly plan</p>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-bold text-indigo-500 dark:text-indigo-400">₹{plan.price}</span>
                            <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">/session</span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Session Length</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.session_length}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Counselor Matching</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.counselor_matching}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Sessions Included</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.sessions_included}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">Access Term</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.access_term}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 dark:text-gray-400">No. of sessions</span>
                              <span className="text-gray-900 dark:text-gray-50 font-medium">{plan.no_of_sessions}</span>
                            </div>
                          </div>
                          <Button className="w-full mt-3 transition-colors duration-300 bg-gradient-to-r from-indigo-500 to-emerald-400 text-white hover:from-indigo-600 hover:to-emerald-600"onClick={() => handleClick(plan)}
                        
                        disabled={
                          checkout && loading === `${plan.mode}_${plan.price}`
                            ? true
                            : false
                        }
                      >
                        {checkout && loading === `${plan.mode}_${plan.price}` && (
                          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                            Buy now
                          </Button>
                        </CardContent>
                      </Card>
                );
              }
            })}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog   open={checkout} onOpenChange={(e)=>{setCheckout(e); setReferralCode(""); setDiscountApplied(false); setReferal(false)}}>
        <DialogContent className="rounded-xl w-[96%] max-h-[90vh] p-3 overflow-y-auto overflow-auto mx-auto">
          <DialogHeader>
            <DialogTitle className="text-start">Checkout Page</DialogTitle>
          </DialogHeader>
          <div>
            {cdata && (
              <Card className="shadow-lg rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <CardHeader>
                  <CardTitle>{cdata.sessions_included}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-neutral-300">
                        Plan
                      </CardDescription>
                      <div className="font-bold">{cdata.name}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <CardDescription className="text-neutral-300">
                        Price
                      </CardDescription>
                      <div className="font-bold">₹{cdata.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="shadow-lg rounded-lg mt-3">
              <CardHeader>
                <CardTitle>Checkout</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>Plan</div>
                    <div className="font-bold">₹{cdata && cdata.price}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Platform Charge</div>
                    <div className="font-bold">₹3</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Payment Gateway Charge</div>
                    <div className="font-bold">
                      ₹{cdata && ((cdata.price / 100) * 2).toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>GST (18%)</div>
                    <div className="font-bold">
                      ₹{cdata && ((cdata.price / 100) * 18).toFixed(2)}
                    </div>
                  </div>
                  {cdata && (
                    <div className="flex items-center space-x-2 py-2">
                      <Checkbox
                        id="video"
                        onCheckedChange={(e) => {
                          e
                            ? setAmount((prev) =>
                                Number((prev + Number(cdata.video)).toFixed(2))
                              )
                            : setAmount((prev) =>
                                Number((prev - Number(cdata.video)).toFixed(2))
                              );
                        }}
                      />
                      <label
                        htmlFor="video"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Prefer video meet (Addition Rs. {cdata.video} charges.)
                      </label>
                    </div>
                  )}
                  {referal && <Input className={`${discountApplied?'!ring-2 ring-emerald-500 ring-offset-2 ': ''}`} type="text" value={referralCode}
              onChange={(e) => {setReferralCode(e.target.value); applyReferralCode(e.target.value)}} placeholder="enter the referal code"/>}
                  {discountApplied && <Formsuccess  msg="successfully applied referral code"/>}
                 {cdata && cdata.mode === 'monthly' && <Button
                    variant={"link"}
                    onClick={(e) => {
                      e.preventDefault();
                      setReferal(!referal);
                    }}
                    className="text-blue-800 px-0 w-fit float-right"
                  >
                    Have a coupon code ?
                  </Button>}
                  <Separator />
                  <div className="flex items-center justify-between font-bold">
                    <div>Total</div>
                    <div>₹{amount}</div>
                  </div>
                </div>
                <Button onClick={checkOut} className="w-full mt-4">
                  Proceed to Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </DialogContent>
      </Dialog>

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
