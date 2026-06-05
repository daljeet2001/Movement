


export default function Space(){
    return(
        <div className="flex flex-col md:flex-row items-start md:items-center w-full h-auto border-t border-[#575757]">

           <img className="h-[287px] md:h-[319px] lg:h-[480px] w-full md:w-[50%] md:flex-1  object-cover" src="/d38.webp"/>

           <div className="flex items-center justify-center bg-black h-auto md:h-[319px] lg:h-[480px] w-full md:w-[50%] lg:w-[427px]" >
            
            <div className="flex flex-col items-start gap-[21px]  px-[30px] md:px-[78px] py-[30px]">
                <h2 className="font-semibold text-[20px] leading-[0.9] [font-family:var(--font-semi)] text-white">Our Space</h2>
                <p className="text-[17px] leading-[1.2] [font-family:var(--font-semi)] text-white">Whether you're a beginner looking to explore expressive movement or an advanced dancer ready to refine your technique, we have classes for you! Join our weekly sessions, <span className="text-[#D900FF]">drop in for open-level classes,</span> or take part in our upcoming choreography series. Don’t miss our special Masterclass with Maxime Longue this Saturday! Limited spots available</p>




            </div>
           </div>
            
        </div>
    )
}