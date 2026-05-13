import { motion, } from "framer-motion"
import type { Variants } from "framer-motion"

const item1: Variants = {
    hidden: {
        y: 10,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}


export default function Intructors() {
    return (
        <div className="flex flex-col lg:flex-row items-center h-auto">

            <div className="h-[204px] md:h-[217px] lg:h-[1035px] flex flex-col items-start p-[30px] bg-black text-white w-full lg:flex-1 border-t border-r border-[#575757]  border-box">
                <h2 className="font-semibold text-[30px] md:text-[37px] leading-[1.1] [font-family:var(--font-semi)] text-white">Instructors</h2>
            </div>

<div className="flex flex-wrap w-full lg:w-[854px] h-auto">

        <div className="w-full md:w-[50%] lg:w-[427px] h-[373px] md:h-[363px] lg:h-[345px] border-t lg:border-t-0 border-b border-r border-[#575757]  flex flex-col items-start gap-[125px] px-5 pt-5 pb-[30px] md:pb-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div variants={item1} initial="hidden" whileInView="show" className="flex flex-col">
                    <p className="text-white">Maya Rodriguez</p>
                    <p className="text-[#D900FF]">Modern & Contemporary Instructor</p>
                </motion.div>

                <motion.p variants={item1} initial="hidden" whileInView="show" className="text-white">
                    Maya's passion for modern and contemporary dance is infectious. With a background in performance and choreography, she brings a dynamic and expressive approach to her classes. She has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats.


                </motion.p>
            </div>

               <div className="w-full md:w-[50%] h-[373px] md:h-[363px]  lg:w-[427px] border-t lg:border-t-0  border-b border-r border-[#575757]  lg:h-[345px] flex flex-col items-start gap-[125px] p-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div className="flex flex-col" variants={item1} initial="hidden" whileInView="show" >
                    <p className="text-white">Kai Chen</p>
                    <p className="text-[#D900FF]">Hip Hop Foundations & Freestyle Instructor</p>
                </motion.div>

                <motion.p className="text-white" variants={item1} initial="hidden" whileInView="show">
                   Kai's energy and love for hip hop are undeniable. He has been immersed in the culture for over a decade, mastering various styles from old-school grooves to contemporary beats. Kai's classes are a blend of technical instruction and creative freedom, encouraging students to develop their own unique style.
                </motion.p>
            </div>

                <div className="w-full md:w-[50%] lg:w-[427px] h-[373px] md:h-[363px] lg:h-[345px] border-b border-r border-[#575757]  flex flex-col items-start gap-[125px] p-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div className="flex flex-col" variants={item1} initial="hidden" whileInView="show" >
                    <p className="text-white">Lena Evans</p>
                    <p className="text-[#D900FF]">Jazz Technique & Jazz Funk Instructor</p>
                </motion.div>

                <motion.p className="text-white" variants={item1} initial="hidden" whileInView="show">
                    Lena brings a vibrant and dynamic energy to her jazz classes. With a strong foundation in classical jazz technique, she also loves to explore the funky, high-energy side of the style. Lena's classes focus on building strength, flexibility, and musicality, while also encouraging students to express their personality through movement.


                </motion.p>
            </div>

               <div className="w-full md:w-[50%] lg:w-[427px] h-[373px] md:h-[363px] lg:h-[345px] border-b border-r border-[#575757]   flex flex-col items-start gap-[125px] p-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div className="flex flex-col" variants={item1} initial="hidden" whileInView="show" >
                    <p className="text-white">Noah Sinclair</p>
                    <p className="text-[#D900FF]">Improvisation for Performance Instructor</p>
                </motion.div>

                <motion.p className="text-white" variants={item1} initial="hidden" whileInView="show">
                   Noah is a master of spontaneous movement and connection. He has a deep understanding of contact improvisation and its ability to foster trust and communication through touch and weight sharing. His classes are a journey of exploration, encouraging dancers to listen to their bodies and connect with others in a meaningful way.
                </motion.p>
            </div>

                 <div className="w-full md:w-[50%] lg:w-[427px] h-[373px] md:h-[363px] lg:h-[345px] border-r border-[#575757]  flex flex-col items-start gap-[125px] p-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div className="flex flex-col" variants={item1} initial="hidden" whileInView="show" >
                    <p className="text-white">Jasmine Patel</p>
                    <p className="text-[#D900FF]">Modern & Contemporary Instructor</p>
                </motion.div>

                <motion.p className="text-white" variants={item1} initial="hidden" whileInView="show">
               Jasmine has a gift for making modern dance accessible and enjoyable for beginners. Her classes are a gentle introduction to the fundamental principles of modern movement, focusing on body awareness, grounding, and creative exploration.


                </motion.p>
            </div>

               <div className="w-full md:w-[50%] lg:w-[427px] h-[373px] md:h-[363px] lg:h-[345px] border-r border-[#575757] flex flex-col items-start gap-[125px] p-5 text-[16px] leading-[1.1] [font-family:var(--font-expanded)] bg-black border-box">
                <motion.div className="flex flex-col" variants={item1} initial="hidden" whileInView="show" >
                    <p className="text-white">Ricky Gomez</p>
                    <p className="text-[#D900FF]">Hip Hop Choreography Instructor</p>
                </motion.div>

                <motion.p className="text-white" variants={item1} initial="hidden" whileInView="show">
                   Ricky brings a contagious passion and a wealth of experience to his hip hop choreography classes. He has worked with numerous dance crews and artists, developing a sharp eye for detail and a knack for creating dynamic and engaging routines.
                </motion.p>
            </div>


            

</div>
           

        </div>
    )
}