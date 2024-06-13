//displays product category image using the specified parameters
export const productImg = (product, media)=>{
    return <img
        className={`sm:w-[327px] rounded-lg sm:h-[327px] xl:h-[560px] xl:w-[540px] md:w-[281px] md:h-[480px]`}
        src={`${process.env.PUBLIC_URL}/assets/product-${product}/${media}/image-category-page-preview.jpg`} 
        alt={'product'} 
    />
}

//this displays 'NEW PRODUCT' text on current product if productData.new is true.
export const heading = <p className="font-Manrope-Regular sm:mb-[24px] text-[#d87d4a] md:mb-[17px] text-left text-[14px] opacity-50 tracking-[10px]">NEW PRODUCT</p>
