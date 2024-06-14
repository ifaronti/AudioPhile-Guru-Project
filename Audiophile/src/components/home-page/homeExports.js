import { Link } from "react-router-dom"
const arrow = <img className="relative top-[-2px]" src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-arrow-right.svg`} alt="arrow foward" />

//for homeSection2 
export const sectionItems = (category)=>{
    return  <section className="xl:w-[350px] cursor-pointer md:w-[223px] items-center content-center sm:w-[327px] xl:h-[284px] flex flex-col  relative sm:h-[217px]">
                <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-${category}.png`} className="z-10 md:scale-[1.1] lg:scale-[1.315] h-[160px] absolute sm:top-[-9px] md:top-[-40px] xl:top-[28px]" alt="headphone" />
                <article className="sm:w-[327px] group text-black hover:text-[#D87D4A] peer/sect2 xl:w-[350px] md:pt-[116px] sm:pt-[88px] xl:pt-[116px] gap-[15px] md:w-[223px] absolute bottom-0 flex items-center content-center flex-col rounded-lg md:h-[204px] bg-[#f1f1f1] sm:h-[165px] ">
                    <h2 className="font-Manrope-Bold md:text-[18px] relative sm:text-[15px] text-[#000000] text-center tracking-[1.29px]">{category.toUpperCase()}</h2>
                    <Link onClick={()=>window.scrollTo(0, 0,{  behavior: 'smooth' })} to={`/${category}`} className="flex items-center gap-[13.32px]">
                        <p className="opacity-50 group-hover:opacity-100 text-[13px] relative left-[1px] top-[-3px] font-Manrope-Bold tracking-[1px]">SHOP</p>
                        {arrow}
                    </Link>
                </article>
            </section>
}