import Footer from '../general-components/footer'
import BestGear from '../general-components/bestGear'
import HomeSection2 from '../home-page/section2'
import FeaturesInBox from "./featureBox";
import ProductImages from "./productImg";
import MayLike from "./others";
import ProductPageCard from "./pageCard";
import { ThreeDots } from 'react-loader-spinner';
import { useState, useEffect } from 'react';

//aggregate of all components on the productPage folder
export default function ProductPage(){
    const [loading, setLoading] = useState(true)

    const loadingEffect = 
            <div className="w-fit mx-auto">
                <ThreeDots visible={true} height="80" width="80" color="#d87d4a" />
            </div>
    
    //sets loading false everytime component reRenders. This way, the loading effects displays until
    //the data is ready
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return(
        <main className='sm:w-full mx-auto xl:w-[1440px] content-center items-center flex flex-col xl:gap-[160px] md:gap-[120px] sm:gap-[88px]'>
            <div className="w-full sm:h-[90px] xl:h-[97px] bg-black"></div>
            <div className="w-fit mx-auto">{loading? loadingEffect : <ProductPageCard/>}</div>
            <div className="w-fit mx-auto">{loading? 'Please Wait...' : <FeaturesInBox/>}</div>
            <div className="mx-auto">{loading? 'Please Wait...': <ProductImages/>}</div>
            <div className="w-fit mx-auto ">{loading? 'Please Wait...': <MayLike/>}</div>
            <div className="mx-auto w-fit"><HomeSection2/></div>
            <BestGear/>
            <Footer/>
        </main>
    )
}