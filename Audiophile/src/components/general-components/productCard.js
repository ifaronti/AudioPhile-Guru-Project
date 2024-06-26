import SeeProduct from "./productBtn"
import { useDispatch } from "react-redux"
import { changePage } from "../features/pageSlice"
import { useNavigate } from "react-router-dom"

//the text on category page product displays
export default function ProductCard({name, category, slug, description, newProduct, id}){
    const heading = <p className="font-Manrope-Regular sm:mb-[24px] text-[#d87d4a] md:mb-[16px] sm:text-center xl:text-left text-[14px] opacity-50 tracking-[10px]">NEW PRODUCT</p>
    const itemName = 
            <h2 className="font-Manrope-Bold md:leading-[44px] xl:mx-[unset] md:tracking-[1.43px] xl:w-[572px] mx-auto sm:text-center sm:w-[327px] sm:text-[28px] md:text-[40px] sm:tracking-[1px] xl:text-left sm:leading-normal" id={id}>
                {name}
            </h2>

    const dispatch = useDispatch()
    const gotTo = useNavigate()

    function dispatcher(slug){
        dispatch(changePage(slug))
        gotTo(`/${category}/${slug}`)
        window.scrollTo(0, 0,{  behavior: 'smooth' })
    }

    const itemDescription = 
            <p className="md:w-[572px] relative sm:mt-[24px] md:mb-[24px] md:mt-[32px] sm:mb-[24px] xl:mb-[40px] sm:w-[327px] font-Maronpe-Medium lg:w-[445px] leading-[25px] text-[15px] sm:text-center xl:text-left opacity-50">
              {description}
            </p>
    
    const seeProduct =
                <div role='presentation' className="sm:mx-auto relative xl:mx-0">
                    <SeeProduct text={'SEE PRODUCT'} event={()=>dispatcher(slug)}/>
                </div>

    return(
        <section>
            <article className="flex flex-col flex-shrink-0 lg:w-[445px] sm:h-[340px] md:w-[572px]">
                {newProduct && heading}
                {itemName}
                {itemDescription}
                {seeProduct}
            </article>
        </section>
    )
}