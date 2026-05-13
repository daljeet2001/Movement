

export default function Founders(){
    return(
        <div className="flex flex-col w-full z-50">

            <div className=" h-[800px] md:h-[400px] w-full flex flex-col md:flex-row items-start md:items-center">

                <div className="h-[50%] md:h-full w-full md:w-[50%] px-[30px] flex items-center justify-start font-semibold text-[30px]  md:text-[37px] leading-[1.1] [font-family:var(--font-semi)] bg-white">Our Founders</div>


                <div className=" h-[50%] md:h-full w-full md:w-[50%] flex flex-col">
                    <img className="object-cover h-[307px] w-full" src="d23.webp"/>
                    <div className="h-[93px] bg-[#D900FF] p-5 flex flex-col items-start justify-center">

                        <div className="flex flex-col items-start gap-[11px] text-black">

                            <div className="text-2xl font-bold [font-family:var(--font-dm)]">Sophia Bennett</div>
                            <div className="text-base leading-[1.1] [font-family:var(--font-expanded)]">Founder & Instructor</div>

                        </div>

                   
                    </div>
                </div>



            </div>

                <div className="h-[800px] md:h-[400px] w-full flex flex-col md:flex-row items-start md:items-center">

                <div className="h-[50%] md:h-full w-full md:w-[50%] px-[30px] flex items-center justify-start bg-white">
                    <div className="flex flex-col items-start gap-[53px]">

                        <div className="text-[30px] leading-[1.1] [font-family:var(--font-semi)]">"Find your flow, and dance <br/>your truth."</div>

                        <div className="text-[17px] leading-[1.2] [font-family:var(--font-semi)]">— Sophia Bennett</div>

                    </div>
                </div>


                <div className="h-[50%] md:h-full w-full md:w-[50%] flex flex-col">
                    <img className="object-cover h-[307px] w-full" src="d22.avif"/>
                    <div className="h-[93px] bg-[#D0FBF9] p-5 flex flex-col items-start justify-center">

                        <div className="flex flex-col items-start gap-[11px] text-black">

                            <div className="text-2xl font-bold [font-family:var(--font-dm)]">Alisa Morris</div>
                            <div className="text-base leading-[1.1] [font-family:var(--font-expanded)]">Founder & Program Manager</div>

                        </div>

                   
                    </div>
                </div>



            </div>

        </div>
    )
}