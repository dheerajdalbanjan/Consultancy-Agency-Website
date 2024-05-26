import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Add blog",
    description: "Lets heal the world."
}


const Layout = ({children}: {children:React.ReactNode})=>{
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout ;