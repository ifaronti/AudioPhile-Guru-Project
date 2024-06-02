import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'
import { sectionItems } from "./homeExports";

export default function HomeSection2(){

    const matchesSM = useMediaQuery('(max-width:550px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)


    const container1 = sectionItems('headphones')

    const container2 = sectionItems( 'speakers')

    const container3 =  sectionItems('earphones')

    return (
            <section className="xl:w-[1110px] relative mx-auto sm:flex-col md:w-full sm:w-[327px] md:gap-[10px] xl:gap-[30px] sm:gap-[16px] xl:h-[284px] md:h-[217px] items-center content-center sm:h-[683px] flex md:flex-row p-0">
                {container1}
                {container2}
                {container3}
            </section>
    )
}