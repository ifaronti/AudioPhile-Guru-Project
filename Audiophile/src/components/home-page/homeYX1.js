import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../features/pageSlice";
import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'

export default function YX1(){
    const dispatch = useDispatch()

    function dispatcher(id){
       return dispatch(changePage(id))
    }
    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    const yx1 = 
        <div className="sm:h-[200px] content-center md:h-[320px] relative flex md:flex-row sm:flex-col sm:gap-[24px] item-center md:gap-[11px] xl:gap-[30px] xl:w-[1110px] lg:w-[689px] sm:w-full">

            <img src={`${process.env.PUBLIC_URL}/assets/home/${media}/image-earphones-yx1.jpg`} className="rounded-lg md:w-[339px] xl:w-[540px] md:h-[320px] sm:h-[200px] sm:w-[327px]" alt="YX1 EARPHONES" />
                <article className="rounded-lg relative gap-[32px] p-0 bg-[#f1f1f1] flex-shrink-0 xl:w-[540px] md:w-[339px] flex flex-col sm:h-[200px] sm:w-[327px] md:h-[320px]">
                    <div className="flex w-fit h-fit sm:mx-auto my-auto xl:mx-[95px] flex-col gap-[32px]">
                        <h5 className="relative font-Manrope-Bold md:mx-auto tracking-[2px] leading-normal text-black text-[28px]">YX1 EARPHONES</h5>
                        
                        <Link to={'/earphones/product/6657a6d93cb648a4f9194f32'} onClick={()=>dispatch(changePage('6657a6d93cb648a4f9194f32'))}>
                            <button className="w-[160px] border-solid relative h-[48px] border-[1.5px] hover:bg-black hover:text-white  text-black border-black font-Manrope-Bold text-[13px] leading-normal tracking-[1px]">SEE PRODUCT</button>
                        </Link>
                   </div> 
                </article>
        
        </div>

    return yx1
}