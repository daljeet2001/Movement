import { motion } from "framer-motion";
import type { Variants } from "framer-motion";



const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item1: Variants = {
    hidden: {
        y: 10,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

const item2: Variants = {
    hidden: {
        y: 15,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export default function Footer() {
    return (
        <div className="min-h-[698px] h-auto bg-[#D0FBF9] flex flex-col items-start gap-[50px] md:gap-[10px] pt-[30px] w-full relative overflow-hidden">

            <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-col md:flex-row md:flex-wrap items-start gap-[32px] md:gap-0  justify-between pb-[36px] md:pb-[244px] w-full">

                <motion.div variants={item1} className="flex items-center justify-center px-[30px]">
                    <div className="font-semibold text-[62px] md:text-[96px] lg:text-[126px] [font-family:var(--font-condensed)] leading-[0.9] tracking-[-0.02em]">Mov.<br />Stu.</div>
                </motion.div>

                <motion.div variants={item2} className="flex flex-col items-start gap-[36px] px-[30px] [font-family:var(--font-expanded)] text-base leading-[1.1] border-box">

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div>Email:</div>
                        <div className="hover:text-gray-500 transition-colors duration-200 ease-out">hello@figma.com</div>
                    </div>

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div>Instagram:</div>
                        <div className="hover:text-gray-500 transition-colors duration-200 ease-out underline cursor-pointer">@figma</div>
                    </div>

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div>Facebook:</div>
                        <div className="hover:text-gray-500 transition-colors duration-200 ease-out underline cursor-pointer">hello@figma.com</div>
                    </div>

                </motion.div>

                <motion.div variants={item2} className="flex flex-col items-start gap-[36px] px-[30px] [font-family:var(--font-expanded)] text-base leading-[1.1] border-box">

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div>Address:</div>
                    </div>

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div className="hover:text-gray-500 transition-colors duration-200 ease-out cursor-pointer">224 Candyland Lane, Brooklyn, NY</div>
                        <div className="hover:text-gray-500 transition-colors duration-200 ease-out cursor-pointer">(646) 555-4567</div>
                    </div>

                    <div className="flex flex-col items-start gap-[8px] w-[430px]">
                        <div>Movement Studios©</div>
                        <div>2025 All Rights Reserved</div>
                    </div>

                </motion.div>

            </motion.div>

            <motion.div initial={{ y: 150 }} whileInView={{ y: 0 }} transition={{ duration: 0.2, ease: "easeOut" }} className="grid grid-cols-1 md:grid-cols-3 w-full">

                <motion.div className="w-full bg-[#1F41FF] flex flex-col items-start pt-[30px] px-[30px] pb-[134px]"><motion.span initial={{x:0}} whileHover={{x:10}} transition={{duration:0.2}} className="text-white text-[24px] font-bold [font-family:var(--font-dm)] cursor-pointer">Our Socials</motion.span></motion.div>

                <div className="w-full bg-black flex flex-col items-start pt-[30px] px-[30px] pb-[134px]"><motion.span initial={{x:0}} whileHover={{x:10}} transition={{duration:0.2}}  className="text-white text-[24px] font-bold [font-family:var(--font-dm)] cursor-pointer">Email us</motion.span></div>

                <div className="w-full bg-[#D900FF] flex flex-col items-start pt-[30px] px-[30px] pb-[134px]"><motion.span  initial={{x:0}} whileHover={{x:10}} transition={{duration:0.2}}  className="text-black text-[24px] font-bold [font-family:var(--font-dm)] cursor-pointer">Book with us</motion.span></div>

            </motion.div>

        </div>
    )
}