import SeeProduct from "../general-components/productBtn"
import { useDispatch } from "react-redux"
import { changePage } from "../features/pageSlice"
import useMediaQuery from '@mui/material/useMediaQuery';
import { QueryMedia } from "../general-components/mediaQuery"
import { useNavigate } from "react-router-dom";

export default function Hero(){
    const dispatch = useDispatch()
    const goTo = useNavigate()

    //
    const matchesSM = useMediaQuery('(max-width:480px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    //Uses the QueryMedia function to determine if screensize is desktop, mobile or tablet with above const
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

   //changes redux state value of current product id to be displayed on product page
    function dispatcher(slug){
        dispatch(changePage(slug))
        goTo('/headphones/xx99-mark-two-headphones')
        return
    }

    //Contents on homePages' hero section
    const itemDescribe = 
        <section className="xl:w-[77.0715%] md:mt-[216px] sm:mt-[198px] xl:mt-[225px] md:w-[49.348958333333%] flex flex-col sm:items-center sm:content-center w-[100%] h-[346px] xl:content-start xl:items-start relative">
            <p className="font-Manrope-Regular text-center xl:text-left text-[14px] opacity-50 h-[19px] tracking-[10px] text-white ">NEW PRODUCT</p>
            <article className="">
                <h1 className="font-Manrope-Bold md:w-[396px] mb-[24px] sm:mt-[16px] md:mt-[24px] sm:w-[328px] sm:text-[36px] md:text-[56px] xl:w-[396px] sm:text-center xl:text-left sm:h-[80px] md:h-[116px] sm:tracking-[1.29px] sm:leading-[40px] md:tracking-[2px] md:leading-[58px] text-white ">XX99 MARK II HEADPHONES</h1>
                <p className="opacity-75 sm:w-[328px] md:w-[349px] text-[15px] sm:mb-[28px] md:mb-[40px] h-[75px] sm:text-center xl:text-left font-Maronpe-Medium relative leading-[25px] text-white">
                    Experience natural, lifelike audio and exceptional build quality 
                    made for the passionate music enthusiast.
                </p>
            </article>
            <SeeProduct text={'SEE PRODUCT'} event={()=>dispatcher('xx99-mark-two-headphones')}/>
        </section>

    const heroSection = 
        <header className={`w-full relative flex flex-col items-center content-center sm:h-[600px] md:h-[729px]`}>
            <img className="absolute w-full md:h-[729px] sm:h-[600px]" src={`${process.env.PUBLIC_URL}/assets/home/${media}/image-header.jpg`} alt="black backgroud" />
            {itemDescribe}
        </header>

        return heroSection
}