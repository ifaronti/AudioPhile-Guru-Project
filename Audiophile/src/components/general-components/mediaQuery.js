
//below function is used to determine if screen size is desktop, mobile or tablet depending on useMediaQuery
//of material UI used on multiples pages(import { useMediaQuery } from "@mui/material";)
//(import { QueryMedia } from "./mediaQuery";)

export const QueryMedia = (matchesSM, matchesMD, matchesXL)=>{
    if(matchesSM){
        return 'mobile'
    }
    if(matchesMD){
        return 'tablet'
    }
    if(matchesXL){
        return 'desktop'
    }
}