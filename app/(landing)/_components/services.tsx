import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {motion} from 'framer-motion'

const PricingCard = ({
  name,
  image,
  title,
  description,
  price,
  features,
}: {
  name: string;
  image: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}) => (
  <Card className={`w-full `}>
    <CardHeader className="pb-2 ">
      <div className="w-full p-3 flex flex-col items-center aspect-auto ">
        <img className="object-fill w-full" src={image}  alt={name} />
        <h3 className="md:text-3xl text-2xl font-bold antialiased text-[#072B4C]">
          {name}
        </h3>
      </div>
      <CardTitle className="text-lg md:px-5 font-bold text-[#00427c]">
        {title}
      </CardTitle>
      <p className="text-sm md:px-5 text-gray-600">{description}</p>
    </CardHeader>
    <CardContent className="">
      <ul className="space-y-4 px-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2">
            <div className="w-5 h-5 mt-0.5 bg-[#d5e8f7] rounded-sm flex items-center justify-center">
              <ChevronRight size={16} className="text-[#00427c] rounded-lg" />
            </div>
            <span className="text-sm flex-1">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter className="flex flex-col items-start pt-4 px-10">
      <a href="/pricing"><Button className="mb-2 !py-0.5 px-5 bg-[#FFC107] hover:bg-[#FFC10780] transition-colors text-neutral-950 rounded-full">
        Get Started
      </Button></a>
      <div className="text-sm">
        <span className="font-semibold">Starting @ </span>
        <span className="text-lg font-bold text-[#00427c]">₹{price}</span>
        <span className="text-gray-600"> / month</span>
      </div>
    </CardFooter>
  </Card>
);

const Services = () => {
  return (
    <div className="bg-[#f3f9ff]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 py-6 px-8 md:px-2 max-w-6xl mx-auto">
      <motion.div  initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (0/10), duration: 0.3}} className='w-full'>
      <PricingCard
          name="Professional Therapy"
          image="/images/p-therapy.png"
          title="Let's lighten your load together. Are you ready?"
          description="From relationship issues, anxiety, depression, addiction, or other personal challenges including mental health issues. life transitions stress, and anxiety, minor stress. Our experienced therapists are here to help you navigate life's difficulties. Let's collaborate to give you peace of mind and a brighter future."
          price="1,699"
          features={[
            "50 Minute session with a professional therapist",
            "Implement personal strategies and advice",
            "Discuss your concerns openly and safely",
            "Receive insights with renewed professional perspectives",
          ]}
        /></motion.div>
        <motion.div  initial={{translateY: 45}} whileInView={{translateY: 0}} transition={{delay: (1/10), duration: 0.3}} className='w-full'><PricingCard
          name="Non-Professional Therapy"
          image="/images/np-therapy.png"
          title="Looking to make your journey a little easier?"
          description="A non-professional therapist will provide supportive and empathetic listening to help you manage your thoughts and feelings. You'll be encouraged to reflect on what's on your mind, and receive non-judgmental, practical insights to help you feel better."
          price="599"
          features={[
            "50 Minute with our non-professional therapist",
            "Use this session as a safe space to vent and discuss your problems",
            "Complete therapist provided tasks and activities",
            "We listen to you throughout the process",
          ]}
        /></motion.div>
      </div>
    </div>
  );
};

export default Services;
