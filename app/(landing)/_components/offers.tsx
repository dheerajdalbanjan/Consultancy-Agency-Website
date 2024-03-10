import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const Offers = () => {

    const offers = [
        {
            title: "World Happiness Day Offer", 
            description: 'It is celebrated on March 20, first 11 minutes free till 20th March', 
            image: "https://i.ibb.co/m8hR7mm/Designer-3.png"
        }
        
    ] ;

    return (
        <div className="flex  flex-col md:flex-row gap-y-4 md:gap-y-7 md:justify-evenly items-center justify-center  py-6 px-7 max-w-5xl mx-auto">
            <h1 className="bg-clip-text bg-gradient-to-br  text-center my-2 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-bold  tracking-tight lg:text-5xl">Offers</h1>
            <div className="preview flex min-h-[350px] w-full justify-center p-5 items-center">
            <Carousel className=" max-w-xs w-full " >
        
                <CarouselContent>
                    {offers.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 ">
                                <Card className="overflow-hidden group relative">
                                    <CardHeader className="z-10">
                                        <CardTitle>{_.title}</CardTitle>
                                        <CardDescription>{_.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex group-hover:opacity-70 group-hover:blur-sm transition-all aspect-square p-0 items-center justify-center relative   overflow-hidden">
                                        <div className="h-full absolute top-0  w-full bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-slate-50/10 z-10"></div>
                                        <Image src={_.image} alt="offer_image" width={0} height={0} sizes="100vw" className="w-full h-full object-fill group-hover:scale-110 transition-all duration-300 -z-0"></Image>
                                    </CardContent>
                                    <CardFooter className="group-hover:scale-100 scale-0 transition-all absolute bottom-[25%] left-[19%]">
                                        <a href="/contact"><button className="bg-transparent px-8 py-3 border-neutral-500 dark:border-neutral-200  active:scale-90 transition-all duration-200 text-neutral-700 dark:text-neutral-200 font-bold bg-opacity-80 border ">Avail Offer</button></a>
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
        </div>
    )
}

export default Offers;