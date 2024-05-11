// import { Link } from "react-router-dom";
import NavBar from "../nav";

export default function HomePage(){
    const line = <hr className="relative md:w-[89.713541666667%] w-full xl:w-[1110px] h-[1px] border-[#363636] bg-[#979797]" />

    const itemDescribe = <section className="xl:w-[77.0715%] mt-[128px] md:w-[49.348958333333%] w-[100%] h-[346px] relative">
        <p className="font-Manrope-Regular text-center xl:text-left text-[14px] opacity-50 h-[19px] tracking-[10px] text-white ">NEW PRODUCT</p>
        <article className="w-[35.855855855856%]">
            <h1 className="font-Manrope-Bold mb-[24px] mt-[24px] text-[56px] xl:w-[396px] w-[99.497487437186%] text-center xl:text-left h-[116px] tracking-[2px] leading-[58px] text-white ">XX99 MARK II HEADPHONES</h1>
            <p class="opacity-75 text-[15px] mb-[40px] xl:w-[71%] h-[75px] text-center xl:text-left font-Maronpe-Medium relative leading-[25px] text-white">
                Experience natural, lifelike audio and exceptional build quality 
                made for the passionate music enthusiast.
            </p>
        </article>
        <button className="bg-[#d87d4a] hover:bg-[#FBAF85] w-40 relative h-12 text-[13px] font-Manrope-Bold tracking-[1px] text-white">SEE PRODUCT</button>
    </section>

    const heroSection = 
            <header className="w-full relative flex flex-col items-center content-center sm:h-[600px] h-[729px]">
                <img className="absolute w-full h-[full]" src={`${process.env.PUBLIC_URL}/assets/images/homePage/desktop/image-hero.jpg`} alt="black backgroud" />
                <NavBar/>
                {line}
                {itemDescribe}
            </header>

            return(
                <main className="w-[full] min-h-[100vh] bg-[#fafafa] relative flex flex-col items-center content-center p-0">
                    {heroSection}
                </main >
            )
}