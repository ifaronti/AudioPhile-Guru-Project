import { changePage } from "../features/pageSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'

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
        <div className="xl:w-[1110px] h-[320px] rounded-lg relative sm:w-[327px] md:w-[89.713541666667%] xl:min-w-[1110px] md:max-w-[689px]">
            <img src={`${process.env.PUBLIC_URL}/assets/home/${media}/image-speaker-zx7.jpg`} className="absolute w-[100%] rounded-lg h-[100%]" alt="zx7 speaker" />
            
            <div className="xl:ml-[95px] left-[2px] top-[97px] relative md:ml-[62px] sm:ml-[24px]">
                <h4 className="relative top-[2px] font-Manrope-Bold tracking-[2px] m leading-normal text-black text-[28px] mb-[32px]">ZX7 SPEAKER</h4>
                <Link to={'/speakers/product/6657a6d93cb648a4f9194f36'} onClick={()=>dispatcher('6657a6d93cb648a4f9194f36')}>
                    <button className="w-[160px] border-solid relative h-[48px] border-y-[1.5px] border-x-[1.5px] text-black border-y-black border-x-black border-black font-Manrope-Bold hover:bg-black z-50 hover:text-white cursor-pointer text-[13px] leading-normal tracking-[1px]">SEE PRODUCT</button>
                </Link>
            </div>
        </div>

    return zx7
}