import Link from "next/link";
import React from "react";
import { socialIcons } from "./socialicons";

const Footer = () => {
  const social = socialIcons;
  return (
    <div className="flex flex-col justify-between items-center md:px-12 py-4 border-t dark:border-gray-600 static bottom-0 mt-20 ">
      <div className="flex flex-col  sm:flex-row items-center justify-between   w-full">
        <span className="text-base text-neutral-100 antialiased ">
          Copyright ©{" "}
          <a className="underline" href="/">
            oursoulss.com
          </a>
          . All Rights Reserved
        </span>
        <p className="w-72 text-justify py-1 px-5 mt-3 text-sm sm:mt-0 bg-neutral-900 rounded">
          EWS-3, Near Police Station, Navanagar, 2nd Bus Stop,
          Gamanagatti Road, Hubballi
        </p>
        <div className="flex space-x-5 items-center  justify-around">
          {Object.keys(social).map((e, i) => (
            <a
              href={social[e].link}
              key={i}
              className="hover:drop-shadow-xl hover:grayscale hover:scale-110 h-fit w-fit transition-all duration-300 drop-shadow-lg"
            >
              {social[e]?.icon}
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
