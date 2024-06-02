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