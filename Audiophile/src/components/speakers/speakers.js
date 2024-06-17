import Footer from '../general-components/footer'
import BestGear from '../general-components/bestGear'
import HomeSection2 from '../home-page/section2'
import CatHero from '../general-components/categoryHero'
import Category from '../general-components/dynamicCat'

//Speakers category page using static reusable components and dynamic <Category/> component
export default function Speakers(){
    
    return(
        <div role='presentation' className='relative w-full'>
            <CatHero headerText={'SPEAKERS'}/>
            <section className='sm:mt-[64px] md:mt-[120px] xl:mt-[160px] xl:gap-[160px] relative flex flex-col sm:gap-[120px]'>
                <Category category={'speakers'} id={'ch5'}/>
               <section className='w-fit md:mt-16 xl:mt-[unset] mx-auto'> <HomeSection2/></section>
                <BestGear/>
                <Footer/>
            </section>
        </div>
    )
}