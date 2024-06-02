export const productImg = (product, media)=>{
    return <img
        className={`sm:w-[327px] rounded-lg sm:h-[352px] xl:h-[560px] xl:w-[540px] lg:w-[689px] md:w-[90%] md:h-[352px]`}
        src={`${process.env.PUBLIC_URL}/assets/product-${product}/${media}/image-category-page-preview.jpg`} 
        alt={'product'} 
    />
}


