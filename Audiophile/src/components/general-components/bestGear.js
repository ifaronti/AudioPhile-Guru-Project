import { useMediaQuery } from "@mui/material";
import { QueryMedia } from "../general-components/mediaQuery";
import { motion } from "framer-motion";

//This component is used in all pages except checkout
export default function BestGear(){
    //used material UI's useMediaQuery to display different images according to screensize
    const matchesSM = useMediaQuery('(max-width:699px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    return (
        <motion.div role='presentation'
        initial={{ opacity: 0 }}
        transition={{ duration: 1.8 }}
        whileInView={{ opacity: 1, scale:1 }}
        viewport={{ once: false}}
        >
            <section className="sm:gap-[40px] relative md:gap-[63px] xl:gap-[125px] mx-auto sm:flex-col-reverse xl:flex-row sm:w-[327px] md:w-[689px] xl:h-[588px] md:h-[633px] sm:h-[698px] flex xl:content-between xl:w-[1110px] items-center">
                <article>
                    <h6 className="sm:w-[327px] relative xl:w-[445px] md:w-[573px] md:text-[40px] xl:text-left sm:mx-auto sm:text-center md:tracking-[1.43px] md:leading-[44px] sm:text-[28px] sm:tracking-[1px] sm:leading-normal font-Manrope-Bold">
                        BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
                    </h6>
                    <p className="sm:w-[327px] relative mt-[32px] md:w-[573px] sm:mx-auto xl:mx-o sm:text-center xl:tracking-[0.1px] xl:w-[445px] leading-[25px] xl:text-left font-Maronpe-Medium opacity-50 text-black text-[15px]">
                        Located at the heart of New York City, Audiophile is the 
                        premier store for high end headphones, earphones, speakers, 
                        and audio accessories. We have a large showroom and luxury 
                        demonstration rooms available for you to browse and 
                        experience a wide range of our products. Stop by our store 
                        to meet some of the fantastic people who make Audiophile 
                        the best place to buy your portable audio equipment.
                    </p>
                </article>
                <img src={`${process.env.PUBLIC_URL}/assets/shared/${media}/image-best-gear.jpg`} alt="Person wearing a headphone" 
                    className=" relative sm:w-[327px] md:w-[689px] md:h-[300px] xl:w-[588px] sm:h-[300px] xl:h-[588px] rounded-lg" 
                />
            </section>
        </motion.div>
    )
}