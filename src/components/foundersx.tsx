import { motion } from "framer-motion";


export default function Foundersx() {
    return (
        <div className="flex flex-col w-full ">

            <div className="h-[50px] bg-[#1F41FF] text-white  text-[15px] font-semibold [font-family:var(--font-smei)] flex items-center  leading-[1.1] px-[30px] overflow-hidden w-full">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap items-center">

                    <div className="mx-[40px]">Fluid.Expressive.Powerful.Move with us!</div>
                    <div className="mx-[40px]">Masterclass Alert: Guest Choreographer Workshop This Saturday</div>
                    <div className="mx-[40px]">New Contemporary Dance Classes Now Enrolling - Secure Your Spot</div>

                    <div className="mx-[40px]">Fluid.Expressive.Powerful.Move with us!</div>
                    <div className="mx-[40px]">Masterclass Alert: Guest Choreographer Workshop This Saturday</div>
                    <div className="mx-[40px]">New Contemporary Dance Classes Now Enrolling - Secure Your Spot</div>

                </motion.div>




            </div>


            <div className="flex flex-col lg:flex-row items-center border-t border-[#575757]">

                <div className="lg:flex-1 w-full lg:h-[497px] flex flex-col items-start p-[30px] bg-black text-white">
                    <h2 className="font-semibold text-[30px] md:text-[37px] leading-[1.1] [font-family:var(--font-semi)]">Founders</h2>
                </div>

                <div className="flex flex-col md:flex-row w-full lg:w-[854px]">

                                <div className=" w-full md:w-[50%] lg:w-[427px] h-[450px] md:h-[473px] lg:h-[497px] flex flex-col">
                    <img className="object-cover h-[337px] md:h-[360px] lg:h-[384px] w-full" src="d23.webp"/>
                    <div className="h-[113px] bg-[#D900FF] p-[30px] flex flex-col items-start justify-center">

                        <div className="flex flex-col items-start gap-[11px] text-black">

                            <div className="text-2xl font-bold [font-family:var(--font-dm)]">Sophia Bennett</div>
                            <div className="text-base leading-[1.1] [font-family:var(--font-expanded)]">Founder & Instructor</div>

                        </div>

                   
                    </div>
                </div>


                   <div className="w-full md:w-[50%] lg:w-[427px] h-[450px] md:h-[473px] lg:h-[497px] flex flex-col">
                    <img className="object-cover h-[337px] md:h-[360px] lg:h-[384px] w-full" src="d22.avif"/>
                    <div className="h-[113px] bg-[#D0FBF9] p-[30px] flex flex-col items-start justify-center">

                        <div className="flex flex-col items-start gap-[11px] text-black">

                            <div className="text-2xl font-bold [font-family:var(--font-dm)]">Alisa Morris</div>
                            <div className="text-base leading-[1.1] [font-family:var(--font-expanded)]">Founder & Program Manager</div>

                        </div>

                   
                    </div>
                </div>

                </div>

      

            </div>

        </div>
    )
}