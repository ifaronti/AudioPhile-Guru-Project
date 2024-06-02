import ProductCard from "./productCard";
import { productImg } from "../Headphones/headphonesImg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { QueryMedia } from "./mediaQuery";

export default function Category({category, id}){
    const [pageData, setPageData] = useState([])


    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1119px)')
    const matchesXL = useMediaQuery('(min-width:1120px)')
    
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    useEffect(()=>{
        const getCat = async()=>{
            try{
                
                const theCat = await axios.get(`http://localhost:4000/audiophile/products?category=${category}`)
                setPageData(theCat.data.products)
            }
            catch (err){
                console.log(err)
            }
    
        }
        getCat()
    },[category])
 
    const shiftedData = pageData.filter(item=>item.new === true)
    const newData = pageData.filter(item=> item.new===false)
    const toRender = [...shiftedData, ...newData]

    const pageOrder = toRender.map((product, index) =>{
        return index%2 === 0 ? 
            <div key={index+1} className='xl:h-[560px] md:h-[671px] sm:h-[681px] xl:w-[1110px] sm:w-full mx-auto sm:gap-[32px] items-center md:gap-[52px] xl:gap-[125px] relative xl:flex-row flex sm:flex-col'>
                {productImg(product.slug, media)}
                <ProductCard
                    name={product.name}
                    description={product.description}
                    newProduct={product.new}
                    id={id}
                    category={product.category}
                    productId={product?._id}
                />
            </div>
            :
            <div key={index+1} className='xl:h-[560px] md:h-[671px] sm:h-[681px] xl:w-[1110px] sm:w-full mx-auto sm:gap-[32px] items-center md:gap-[52px] xl:gap-[125px] relative xl:flex-row flex sm:flex-col-reverse'>
                <ProductCard
                    name={product.name}
                    description={product.description}
                    newProduct={product.new}
                    id={id}
                    category={product.category}
                    productId={product?._id}
                />
                {productImg(product.slug, media)}
            </div>
            
    })

    return pageOrder
}