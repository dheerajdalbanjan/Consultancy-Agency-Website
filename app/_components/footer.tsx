import Link from "next/link";
import React from "react";
import { socialIcons } from "./socialicons";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const social = socialIcons;
  return (
    <div className="flex flex-col justify-between items-center md:px-24 py-6 border-t dark:border-gray-600 static bottom-0 mt-20 ">
      <div className="flex flex-col  sm:flex-row items-center justify-between   w-full">
        <div className="w-full p-5 ">
          <h3 className="text-2xl antialiased my-2 font-semibold">Contact Information</h3>
        <span className="text-base text-neutral-800 antialiased ">
        <a href="callto:+919353857659" className="underline">+91 93538 57659</a> <a href="mailto:oursoulss.com@gmail.com" className="underline block">oursoulss.com@gmail.com</a> PLOT NO - 88, C.I.T.B Gamanagatti , Navanagar Hubballi - 580025
          <p className="text-neutral-600 text-sm my-1">Copyright ©{" "}
          
            OurSoulss
          . All Rights Reserved</p>
        </span>
        </div>
        
        <div className="flex space-x-1 py-5 items-center  justify-around">
          {Object.keys(social).map((e, i) => (
            <a
              href={social[e].link}
              key={i}
              className="hover:drop-shadow-xl hover:grayscale hover:scale-110 h-fit w-fit transition-all duration-300 drop-shadow-lg"
            >
              <Button className="rounded-full bg-opacity-50 backdrop-blur-sm hover:bg-opacity-75  px-2 scale-75 py-1" variant={'outline'}>
              {social[e]?.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-xs w-full sm:w-fit sm:text-base self-end sm:px-0 px-6 items-center space-x-4">
        <a href="/privacy_policy" className="underline ">
          Privacy Policy
        </a>
        <a href="/refund_policy" className="underline ">
          Refund Policy
        </a>
        <a href="/termsandconditions" className="underline ">
          Terms and Conditions
        </a>
      </div>
    </div>
  );
};

export default Footer;
