import { useSelector } from "react-redux"

//This displays the name, price and description of product in product page using redux state data value
export default function CardNamePrice(){
    const data = useSelector(state=>state.data.value)

    const toCartName = 
    <h2 className={`font-Manrope-Bold ${data.category==='speakers' ? 'sm:w-[150px] md:w-[150px]': 'xl:w-[445px] md:w-[339px] sm:w-[300px]'} md:leading-[44px] md:tracking-[1.43px] text-left sm:text-[28px] md:text-[40px] sm:tracking-[1px] sm:leading-normal`} id={data?.category==='speakers'? 'ch5': ''}>
        {data.name}
    </h2>

    const toCartDescription = 
        <p className="md:w-[339px] sm:w-[327px] font-Maronpe-Medium xl:w-[445px] leading-[25px] text-[15px] text-left opacity-50">
        {data.description}
        </p>

    let productPrice = 
        <p className=" text-black font-Manrope-Bold text-[18px] leading-normal tracking-[1.29px]">
            ${(data.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',' ))}
        </p>

    return( 
        <article className="flex flex-col sm:gap-[24px] md:gap-[32px] sm:mb-[31px] md:mb-[31px] xl:mb-[47px]">
            {toCartName}
            {toCartDescription}
            {productPrice}
        </article>   
    )
}