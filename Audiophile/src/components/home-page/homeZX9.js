import { changePage } from "../features/pageSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { QueryMedia } from "../general-components/mediaQuery";
import { motion } from "framer-motion";

//section3's speaker ZX9 using material UI's useMediaQuery to determine image path
export default function ZX9(){
    const dispatch = useDispatch()
    const patternImg = <img src={`${process.env.PUBLIC_URL}/assets/home/desktop/pattern-circles.svg`} alt="circles"/>

    function dispatcher(id){
       return dispatch(changePage(id))
    }

    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    const zx9Speaker = 
    <motion.div initial={{ opacity: 0}} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
        <div className="xl:w-[1110px] overflow-hidden sm:w-[327px] md:w-[689px] relative flex items-center content-center rounded-lg p-0 xl:h-[560px] md:h-[720px] h-[720px] sm:h-[600px] bg-[#D87D4A]">
            <div className="absolute xl:left-[-9rem] md:left-[-7rem] md:w-[900px] sm:left-[-8rem] sm:top-[-8rem] sm:w-[580px] md:top-[-16rem] xl:top-[-2rem] xl:w-[944px] z-[1] ">{patternImg}</div>
            <article className="xl:absolute z-[50] sm:content-center xl:items-start sm:items-center sm:relative sm:gap-[unset] sm:flex-col xl:flex-row flex bottom-0 sm:ml-[0] xl:ml-[117.49px] w-full xl:gap-[139px]">
                <img src={`${process.env.PUBLIC_URL}/assets/home/${media}/image-speaker-zx9.png`} className="z-[50] md:w-[197.21px] sm:w-[172.25px] md:h-[237px] sm:h-[207px] relative xl:w-[410.23px] xl:h-[463px]" alt="" />
                <div>
                    <h3 className="md:tracking-[2px] md:leading-[58px] sm:text-[36px] sm:mt-[29px] xl:mx-[unset] sm:w-[200px] md:w-[261px] md:mt-[35px] sm:mx-auto sm:text-center xl:text-left sm:leading-[40px] sm:tracking-[1.29px] sm:mb-[unset] md:mb-[24px] text-white font-Manrope-Bold w-[3ch] xl:mt-[35px] h-[116px] md:text-[56px]">ZX9 SPEAKER</h3>
                    <p className="md:mb-[40px] sm:mt-[-9px] sm:mb-[24px] sm:text-center xl:text-left font-Maronpe-Medium text-[15px] text-white opacity-75 leading-[25px] sm:w-[289px] h-[75px] md:w-[349px]">
                        Upgrade to premium speakers that are phenomenally 
                        built to deliver truly remarkable sound.
                    </p>
                    <div className="sm:mx-auto w-fit xl:mx-[unset]">
                        <Link to={'/speakers/product/6657a6d93cb648a4f9194f37'} onClick={()=>dispatcher('6657a6d93cb648a4f9194f37')} >
                            <button className="w-40 z-[200] font-Manrope-Bold leading-normal hover:bg-[#4c4c4c] tracking-[1px] text-white text-[13px] h-12 bg-black">SEE PRODUCT</button>
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    </motion.div>

        return zx9Speaker
}