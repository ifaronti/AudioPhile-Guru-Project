import HomeSection2 from "./section2";
import HomeSection3 from "./section3";
import BestGear from "../general-components/bestGear";
import Footer from "../general-components/footer";
import Hero from "./hero";

//all home page sections
export default function HomePage(){

    return(
        <div role="presentation" className="w-[full] relative flex flex-col sm:gap-[120px] md:gap-[96px] xl:gap[120px] items-center content-center p-0">
            <Hero/>
            <section className="xl:mb-[48px] sm:mt-[-80px] md:mt-[unset]"><HomeSection2/></section>
            <HomeSection3/>
            <section className="xl:mt-[80px] xl:mb-[80px] sm:mt-0 sm:mb-[unset]"><BestGear/></section>
            <Footer/>
        </div >
    )
}