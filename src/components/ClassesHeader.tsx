import { motion, useScroll, useTransform } from "framer-motion";


export default function ClassesHeader() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -100])
    return (
        <motion.div style={{ y }} className="h-[100vh] fixed top-0 left-0 pt-[88px] md:pt-[116px] w-full bg-[url('/d7.jpeg')] bg-cover bg-center px-[30px] pb-[64px]">
            <div className="text-white text-[62px] md:text-[96px] lg:text-[126px] [font-family:var(--font-expanded)] leading-[0.9]">Classes</div>
        </motion.div>
    )
}