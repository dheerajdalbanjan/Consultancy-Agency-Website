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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CopyIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Offers = () => {
  const offers = [
    {
      title: "Sign Up offer", 
      description:"Sign Up to Oursoulss and get 30 minutes session free,which can be used anytime after signup.", 
      image:"https://i.ibb.co/JzmsFwP/the-convo-that-soothes-your-soul-3.jpg", 
      coupon_code:"NEW_TO_OURSOULSS"
    },{
      title:"Healing Starts Here",
      description:"25% Off Counseling Services with Code \'OURSERVICES\'. Start Your Journey with OurSoulss!",
      image:"https://i.ibb.co/CQqSYc5/www-oursoulss-com-1.jpg", 
      coupon_code:"OURSERVICES"
    }
  ];

  return (
    <div className="bg-dot-white/[0.09] flex items-center justify-center relative  self-center py-6 px-7 w-full md:px-24 mx-auto">
      <div className="flex  flex-col md:flex-row gap-y-4 md:gap-y-7 md:gap-x-16 md:justify-evenly items-center justify-center">
      
      <h1 className="bg-clip-text bg-gradient-to-br  text-center my-2 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">
        Offers
      </h1>

      <div className="preview flex min-h-[350px] w-full justify-center p-5 items-center">
        <Carousel className=" max-w-xs w-full ">
          <CarouselContent >
            {offers.map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 ">
                  <Card className="overflow-hidden group relative">
                    <CardHeader className="z-10 bg-blue-100">
                      <CardTitle>{_.title}</CardTitle>
                      <CardDescription>{_.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex group-hover:opacity-70 group-hover:blur-sm transition-all duration-300 ease-in-out aspect-square p-0 items-center justify-center relative   overflow-hidden">
                      <div className="h-full absolute top-0  w-full bg-gradient-to-b from-blue-100  dark:from-neutral-950 to-slate-50/10 z-10"></div>
                      <Image
                        src={_.image}
                        alt="offer_image"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-fill group-hover:scale-110 transition-all duration-300 -z-0"
                      ></Image>
                    </CardContent>
                    <CardFooter className="group-hover:scale-100 scale-0 transition-all absolute bottom-[25%] left-[19%]">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="bg-transparent px-8 py-3 border-neutral-500 dark:border-neutral-200  active:scale-90 transition-all duration-200 text-neutral-700 dark:text-neutral-200 font-bold bg-opacity-80 border ">
                            Avail Offer
                          </button>
                        </DialogTrigger>
                        <DialogContent className="mx-2 rounded-md min-w-[300px] w-fit p-5">
                          <DialogHeader>
                            <DialogTitle>Coupon Code</DialogTitle>
                            <DialogDescription>
                              Copy the coupon code from below and paste in the
                              contact form to avail the offer.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-2">
                              <Label htmlFor="link" className="sr-only">
                                Link
                              </Label>
                              <Input
                                id="link"
                                defaultValue={_.coupon_code}
                                readOnly
                              />
                            </div>
                            <Button type="submit" size="sm" className="px-3">
                              <span className="sr-only">Copy</span>
                              <CopyIcon className="h-4 w-4" />
                            </Button>
                          </div>
                          <DialogFooter className="sm:justify-start w-full">
                            <div className="w-full flex items-center justify-end space-x-3">
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                Close
                              </Button>
                            </DialogClose>

                            <a href={`/contact?offer=${_.coupon_code}`}>
                              <Button>Avail Offer</Button>
                            </a>
                            </div>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      
      <div className="absolute top-0 h-[20%] w-full bg-gradient-to-b from-[#F7EEDD]">

      </div>

      </div>
    </div>
  );
};

export default Offers;
