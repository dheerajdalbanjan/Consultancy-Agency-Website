'use client'
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react"


// export const UseScrollHook = (threshold = 10) =>{
//     const [scroll, setScroll] = useState(false) ; 
    

//     useEffect(() => {
//         function handleScroll(){
//             if(window.scrollY > threshold){
//                 setScroll(true)  ;
//             }
//             else {
//                 setScroll(false) ; 
//             }
//         }


//         window.addEventListener("scroll",handleScroll)
//       return () => {
//         window.removeEventListener("scroll", handleScroll)
//       }
//     }, [threshold])
    

//     return scroll ;

// }

export const UseScrollHook = ()=>{
    const [scrolled, setScrolled] = useState(false) ; 
    const {scrollY} = useScroll() ;
    const [prev, setPrev] = useState(0) ;

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log()
      })

   

    return scrolled ;
}