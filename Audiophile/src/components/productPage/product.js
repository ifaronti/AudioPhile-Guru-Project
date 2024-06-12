import Footer from '../general-components/footer'
import BestGear from '../general-components/bestGear'
import HomeSection2 from '../home-page/section2'
import FeaturesInBox from "./featureBox";
import ProductImages from "./productImg";
import MayLike from "./others";
import ProductPageCard from "./pageCard";
import {useSelector} from "react-redux";

//aggregate of all components on the productPage folder
export default function ProductPage(){
    let data = useSelector(state=>state.data.value)

    return(
        <main className='sm:w-full mx-auto xl:w-[1440px] content-center items-center flex flex-col xl:gap-[160px] md:gap-[120px] sm:gap-[88px]'>
            <div className="w-full sm:h-[90px] xl:h-[97px] bg-black"></div>
            <div className="w-fit mx-auto"><ProductPageCard id={data.category==='speakers'? 'ch5': ''}/></div>
            <div className="w-fit mx-auto"><FeaturesInBox/></div>
            <div className="mx-auto"><ProductImages data={data}/></div>
            <div className="w-fit mx-auto "><MayLike data={data.others}/></div>
            <div className="mx-auto w-fit"><HomeSection2/></div>
            <BestGear/>
            <Footer/>
        </main>
    )
}