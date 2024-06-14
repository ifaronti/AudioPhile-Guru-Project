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
            <div role='presentation' className="w-fit mx-auto">
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
            <div role='presentation' className="w-full sm:h-[90px] xl:h-[97px] bg-black"></div>
            <section className="w-fit mx-auto">{loading? loadingEffect : <ProductPageCard/>}</section>
            <section className="w-fit mx-auto">{loading? 'Please Wait...' : <FeaturesInBox/>}</section>
            <section className="mx-auto">{loading? '': <ProductImages/>}</section>
            <section className="w-fit mx-auto ">{loading? '': <MayLike/>}</section>
            <section className="mx-auto w-fit"><HomeSection2/></section>
            <BestGear/>
            <Footer/>
        </main>
    )
}