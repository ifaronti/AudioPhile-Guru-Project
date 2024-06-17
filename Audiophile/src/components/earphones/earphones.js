import Footer from '../general-components/footer'
import BestGear from '../general-components/bestGear'
import HomeSection2 from '../home-page/section2'
import CatHero from '../general-components/categoryHero'
import Category from '../general-components/dynamicCat'

export default function Earphones(){
    
//This is the category page for earphones
    return(
        <div role='presentation' className='relative w-full'>
            <CatHero headerText={'EARPHONES'}/>
            <section className='sm:mt-[64px] md:mt-[120px] xl:mt-[160px] flex flex-col xl:gap-[160px] sm:gap-[120px]'>
                <Category category={'earphones'} id={'ch12'}/>
                <section className='w-fit md:mt-16 xl:mt-[unset] mx-auto'> <HomeSection2/></section>
                <BestGear/>
                <Footer/>
            </section>
        </div>
    )
}