import { changePage } from "../features/pageSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'
import { motion } from "framer-motion";

//section3's speaker ZX7 using material UI's useMediaQuery to determine image path
export default function ZX7(){
    const dispatch = useDispatch()
    function dispatcher(id){
       return dispatch(changePage(id))
    }

    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    const zx7 = 
        <motion.div role='presentation' initial={{ opacity: 0}} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
            <section className="xl:w-[1110px] h-[320px] rounded-lg relative sm:w-[327px] md:w-[689px]">
                <img src={`${process.env.PUBLIC_URL}/assets/home/${media}/image-speaker-zx7.jpg`} className="absolute w-[100%] rounded-lg h-[100%]" alt="zx7 speaker" />
                
                <article className="xl:ml-[95px] left-[2px] top-[97px] relative md:ml-[62px] sm:ml-[24px]">
                    <h4 className="relative top-[2px] font-Manrope-Bold tracking-[2px] m leading-normal text-black text-[28px] mb-[32px]">ZX7 SPEAKER</h4>
                    <Link to={'/speakers/zx7-speaker'} onClick={()=>dispatcher('zx7-speaker')}>
                        <button className="w-[160px] border-solid relative h-[48px] border-y-[1.5px] border-x-[1.5px] text-black border-y-black border-x-black border-black font-Manrope-Bold hover:bg-black z-50 hover:text-white cursor-pointer text-[13px] leading-normal tracking-[1px]">SEE PRODUCT</button>
                    </Link>
                </article>
            </section>
        </motion.div>

    return zx7
}