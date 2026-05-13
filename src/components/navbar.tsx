import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";


export default function Navbar(){

    const [ menu, setMenu ] = useState(false);
    return(
        <>

        <div className="flex flex-col fixed top-0 left-0 z-500 h-auto  md:hidden w-screen">

        <div  className="bg-black flex  items-center bg-black w-full  h-[50px] border-b border-[#575757]">

<div onClick={()=>setMenu(!menu)} className="p-[10px]"><RxHamburgerMenu size={30} color={"white"}/></div>
    

    <div className="flex flex-1 items-center justify-end pl-[30px] pr-[20px] text-[30px] [font-family:var(--font-semi)] h-full text-white border-l border-[#575757] px-[10px]"><Link to="/" className="cursor-pointer">Movement Studios.</Link></div>
    
    </div>

    {menu && <motion.div initial={{width:"90%"}} animate={{width:"100%"}} transition={{duration:0.4,ease:"easeOut"}} className="flex flex-col items-start w-full">

        <div className="flex items-center p-[30px] w-full bg-[#D0FBF9] border-b border-black">
            <Link to="/classes">
            <p className="text-[32px] [font-family:var(--font-semi)] font-bold">Classes</p>
            </Link>
        </div>

            <div className="flex items-center p-[30px] w-full bg-[#D0FBF9] border-b border-black">
            <Link to="/about-us">
            <p className="text-[32px] [font-family:var(--font-semi)] font-bold">About us</p>
            </Link>
        </div>

        </motion.div>}

    </div>

    


   

       


            <div className="bg-black md:flex items-center  h-19 border-b border-[#575757] w-screen fixed top-0 left-0 z-500 hidden ">

            

                <div className="flex items-center py-[10px] px-[30px] justify-center text-white hover:bg-[#1F41FF] border-r border-[#575757] text-lg [font-family:var(--font-semi)]  leading-[1.1]  h-full"><Link to="/classes" className="cursor-pointer">Classes</Link></div>

                      <div className="py-[10px] px-[30px] flex items-center justify-center text-white border-r hover:bg-[#1F41FF] border-[#575757] text-lg [font-family:var(--font-semi)] leading-[1.1]  h-full"><Link to="/about-us" className="cursor-pointer">About</Link></div>

                        <motion.div  className="py-[10px] px-[30px] flex items-center justify-center text-white  border-r border-[#575757] text-lg     [font-family:var(--font-semi)] leading-[1.1]  h-full"><span className=" hover:text-[#575757] transition-colors duration-200 ease-out">224 Nostrand Ave, Brooklyn, NY</span></motion.div>
      


            <div className="h-full text-white flex-1  text-[30px] flex items-center justify-end [font-family:var(--font-semi)] py-[10px] px-[30px]"><Link to="/" className="cursor-pointer">Movement Studios.</Link></div>

        </div>
        </>
    
    )
}