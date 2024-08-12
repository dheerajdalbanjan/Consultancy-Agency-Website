import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

const Experts = () => {

    const employees = [
      {
        name: "Payal Mishra",
        role: "Professional Psychologist",
        skills: [
          "Counseling Psychology",
          "Psychotherapy",
          "Clinical Psychology"
        ],
        image:"/images/payal.jpg" ,
        description: "Passionate and experienced psychology professional with extensive experience in providing innovative treatments and ongoing support to patients. Skilled in developing individualized treatment plans and leading therapy sessions."
      },
        {
          name: "Vanya Sri Chettiar",
          role: "Non-Professional Therapist",
          skills: [
            "Counseling",
            "Life Coaching",
            "Critical Thinking",
            "Problem Solving",
            "Empathy"
          ],
          image:"/images/vanya.jpg" ,
          description: "Dynamic educational mentor and life coach with experience in tutoring, counseling, and habit coaching. Passionate about empowering individuals to achieve academic and personal success through tailored strategies and holistic development."
        },
        
      ];
      
  return (
    <div className="w-full py-10 bg-[#FFC107]">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
      <h2 className='text-2xl sm:text-start text-neutral-800 sm:text-3xl ml-2 md:text-4xl max-w-xl my-5 text-center antialiased font-bold tracking-tight'>Our Experts </h2>

        <Carousel >
          <CarouselContent className="w-full !-ml-2">
            {employees.map((e,i)=>(<CarouselItem key={i} className=" w-full !-ml-0 ">
                <Card className="flex md:flex-row flex-col w-full gap-y-4 p-5 !ml-0  group">
                    <CardHeader className="md:w-[25%] w-[60%] mx-auto outline outline-2 outline-emerald-500 outline-offset-2 p-0  aspect-square  rounded-full overflow-hidden shadow-sm">
                        <img src={e.image} className="object-fill group-hover:scale-110 transition-all duration-300"/>
                    </CardHeader>
                    <CardContent className="md:w-[75%] space-y-4 justify-center  flex flex-col">
                        <p className="font-semibold">Name: <span className="font-normal">{e.name}</span></p>
                        <p className="font-semibold">Role: <span className="font-normal">{e.role}</span></p>
                        <div className="flex space-x-3">
                            <span className="font-semibold">Skills: </span>
                            <div className="gap-x-2 flex flex-wrap gap-y-2">
                                {e.skills.map((e,i)=>(<Badge key={i} >{e}</Badge>))}
                            </div>
                        </div>
                        <p className="font-semibold">Description: <span className="font-normal">{e.description}</span></p>

                    </CardContent>
                </Card>
            </CarouselItem>))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Experts;
