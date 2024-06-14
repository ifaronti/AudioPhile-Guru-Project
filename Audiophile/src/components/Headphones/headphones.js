import BestGear from '../general-components/bestGear'
import Footer from '../general-components/footer'
import HomeSection2 from '../home-page/section2'
import CatHero from '../general-components/categoryHero'
import Category from '../general-components/dynamicCat'

//headphones category page
export default function HeadphonePage(){

    return(
            <main className='relative w-full'>
                
                <CatHero headerText={'HEADPHONES'}/>
                <section className='sm:mt-[64px] md:mt-[120px] xl:mt-[160px] xl:gap-[160px] flex flex-col sm:gap-[120px]'>
                    <Category category='headphones' id='ch10'/>
                    <section className='w-fit md:mt-16 xl:mt-[unset] mx-auto'> <HomeSection2/></section>
                    <BestGear/>
                    <Footer/>
                </section>
            </main>
        
    )
}