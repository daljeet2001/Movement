

export default function Promise(){
    return(
        <>
        <div className=" h-auto lg:h-[640px]  flex flex-col lg:flex-row items-start w-full border-t border-[#575757]">

            <div className="lg:w-[50%]  w-full h-full bg-black flex flex-col items-start gap-[15.167px] px-[30px] pt-[30px] pb-[62px]">

                <h2 className="font-semibold text-[30px] md:text-[37px] leading-[1.1] [font-family:var(--font-semi)] text-white">Our Promise</h2>

            </div>

            <div className="lg:w-[50%] w-full flex flex-col items-start">

                <div className="flex items-start p-[30px] bg-[#1F41FF]">

                    <p className="font-semibold text-[32px] [font-family:var(--font-semi)] leading-[1.1] text-white">
                        Whether you're a beginner looking to explore expressive movement or an advanced dancer ready to refine your technique, we have classes for you! 
                    </p>

                </div>

                <img className="h-[368.83px] md:h-[440px] object-cover  w-full" src={"./d16.jpeg"}/>

            </div>

        </div> 

        </>
    )
}