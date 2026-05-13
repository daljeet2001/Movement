

export default function Header(){
    return(
        <div className=" fixed top-0 left-0 z-0 h-[95vh] w-full px-[30px] pt-[116px] pb-[64px] flex flex-col items-start justify-end md:justify-between bg-[url(d1.jpeg)] bg-cover bg-center gap-[30px] md:gap-0">

            <div className="[font-family:var(--font-condensed)] font-semibold text-[62px] md:text-[96px] lg:text-[126px] leading-[0.9] text-white">Find your<br/>flow.</div>

             

            <button className="flex items-center justify-center px-[26px] py-[18px] text-[13px] [font-family:var(--font-expanded)] border-none outline-none bg-[#D0FBF9] text-black hover:bg-[#D900FF] hover:text-white">Reserve your spot</button>

        </div>
    )
}