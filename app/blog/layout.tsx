import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "OurSoulss Blog",
    description: "Let's heal the world with some meaningfull blogs."
}


const Layout = ({children}: {children:React.ReactNode})=>{
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout ;