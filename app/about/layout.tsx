import { Metadata } from "next";
import React from "react";


export const metadata : Metadata = {
    title: "About us"
  }

const layout = ({children}:{children: React.ReactNode})=>{
    return (
        <>
            {children}
        </>
    )
}

export default layout ;