import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const Offers = () => {

    const offers = [
        {
            title: "First 5 mins free, upto 22nd Feb", 
            description: "This offer is specially dedicated to the Inaugaration of Shree Ram mandir in Ayodhya.", 
            image: "https://images.news9live.com/wp-content/uploads/2024/01/7-54.png"
        }, 
        {
            title: "Valentine's Special: First 7 mins free, upto 22nd Feb",
            description: "Celebrate the season of love with our special offer dedicated to Valentine's week. Enjoy the first 7 minutes free and make your moments extra special.",
            image: "https://i.ibb.co/5FMKtfD/lovely-frame-with-hearts-valentine-s-day-1361-1063.jpg"
        }, 
    ] ;

    return (
        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-7 md:justify-evenly items-center justify-center  py-6 px-7 max-w-5xl mx-auto">
            <h1 className="bg-clip-text bg-gradient-to-br  text-center my-2 sm:text-start from-pink-400 to-red-600 text-3xl drop-shadow-md font-extrabold  tracking-tight lg:text-5xl">Offers</h1>
            <Carousel className=" max-w-xs">
                <CarouselContent>
                    {offers.map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1 w-72 sm:w-auto">
                                <Card className="overflow-hidden group">
                                    <CardHeader className="z-50">
                                        <CardTitle>{_.title}</CardTitle>
                                        <CardDescription>{_.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex aspect-square p-0 items-center justify-center relative   overflow-hidden">
                                        <div className="h-full absolute top-0  w-full bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-slate-50/10 z-10"></div>
                                        <Image src={_.image} alt="offer_image" width={0} height={0} sizes="100vw" className="w-full h-full object-fill group-hover:scale-110 transition-all duration-300 -z-0"></Image>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Offers;