

import { motion } from "framer-motion";

export default function Vision() {
    return (
        <div className="flex flex-col w-full z-50">

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

            <div className="h-[640px] flex flex-col md:flex-row items-center w-full border-y border-[#575757] bg-white">

                <div className="h-full w-full md:w-[50%] bg-[url('/d32.avif')] bg-cover bg-center relative">
                    <div className="absolute top-[30px] left-[30px] text-white text-[62px] md:text-[96px] lg:text-[126px] font-semibold [font-family:var(--font-condensed)] leading-[0.9]">Vision</div>
                </div>

                <div className="flex flex-col items-center justify-center py-[48px] lg:py-0 px-[44px]  md:px-[48px] lg:px-[110px] w-full md:w-[50%]">

                    <div className="flex flex-col items-start gap-[35px]">

                        <div className="text-xl font-semibold leading-[0.9] [font-family:var(--font-semi)]">
                            Who we are
                        </div>

                        <div className="text-[17px] [font-family:var(--font-semi)] leading-[1.2]">
                            At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you’ll find a home here.
                        </div>

                        <button className="flex items-center justify-center py-[18px] px-[26px] text-[13px] [font-family:var(-- --font-condensed)] leading-[0.9] text-white bg-[#2200FF] hover:bg-[#1F41FF]">About us</button>


                    </div>

                </div>

            </div>

            <div className="h-[640px] flex flex-col md:flex-row items-center w-full border-b border-[#575757] bg-white">

                <div className="h-full w-full md:w-[50%] bg-[url('/d33.avif')] bg-cover bg-center relative">
                    <div className="absolute top-[30px] left-[30px] text-white text-[62px] md:text-[96px] lg:text-[126px]  font-semibold [font-family:var(--font-condensed)] leading-[0.9]">Classes</div>
                </div>

                <div className="flex flex-col items-center justify-center  py-[48px] lg:py-0 px-[44px]  md:px-[48px] lg:px-[110px] w-full md:w-[50%] ">

                    <div className="flex flex-col items-start gap-[35px]">

                        <div className="text-xl font-semibold leading-[0.9] [font-family:var(--font-semi)]">
                            Our Classes
                        </div>

                        <div className="text-[17px] [font-family:var(--font-semi)] leading-[1.2]">
                            Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer.
                        </div>

                        <button className="flex items-center justify-center py-[18px] px-[26px] text-[13px] [font-family:var(-- --font-condensed)] leading-[0.9] text-white bg-[#2200FF] hover:bg-[#1F41FF]">Reserve your spot</button>


                    </div>

                </div>

            </div>


        </div>
    )
}