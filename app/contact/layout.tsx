import { ReactNode } from "react"


const layout = ({children} : {children: ReactNode})=>{
    return (
        <div className='min-h-screen py-10'>
    <div className='flex flex-col bg-transparent dark:border-neutral-800 border relative  from-neutral-400/10 to-neutral-300/10  dark:from-neutral-800 rounded-lg dark:to-neutral-800/10 gap-y-5 max-w-xl backdrop-blur-md sm:mx-auto shadow-xl sm:px-8 px-6 mx-5 py-5'>
      <svg className='absolute top-[15%] left-[15%] h-3/4 w-3/4 blur-3xl -z-[1000]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M24.3,-30.8C30.3,-23.8,33.3,-15.1,34.1,-6.6C34.8,1.8,33.3,10.1,29.7,18.1C26.2,26.1,20.7,33.8,13.4,36C6.2,38.3,-2.7,35.1,-10,31C-17.3,26.8,-23,21.7,-27.1,15.3C-31.2,8.9,-33.7,1.3,-32.8,-6.1C-31.9,-13.5,-27.6,-20.6,-21.5,-27.6C-15.5,-34.5,-7.8,-41.3,0.7,-42.1C9.1,-42.9,18.2,-37.7,24.3,-30.8Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" ></path>              </svg>
      <h1 className='uppercase text-3xl sm:text-4xl  mx-auto  my-3  antialiased font-bold'>Contact</h1>
      <div >
        {children}
      </div>
    </div>
    </div>
    )
}

export default layout 