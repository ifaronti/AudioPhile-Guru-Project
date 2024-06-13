import ProductCard from "./productCard";
import { productImg } from "../Headphones/headphonesImg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { QueryMedia } from "./mediaQuery";
import { motion } from "framer-motion";
import { ThreeDots } from "react-loader-spinner";

//This component is used to populate the category page
export default function Category({category, id}){
    const [pageData, setPageData] = useState(false)
    
    //The below uses material UI's media query to display different images on different screen size
    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1119px)')
    const matchesXL = useMediaQuery('(min-width:1120px)')

    const loadingEffect = <div className="w-fit mx-auto">
        <ThreeDots visible={true} height="80" width="80" color="#d87d4a" />
    </div>

    
    //QueryMedia import from mediaQuery.js as a function to select desktop, table or mobile which changes
    //the url of image to be displayed according to screen size
    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    //sets page data whenever the category props changes value by calling my API(*smiles*... my API)
    useEffect(()=>{
        const getCat = async()=>{
            try{
                
                const theCat = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/products?category=${category}`)
                setTimeout(()=>{
                    setPageData(theCat.data.products)
                },1000)
            }
            catch (err){
        
            }
    
        }
        getCat()
        window.scrollTo(0, 0,{  behavior: 'smooth' })
    },[category])
 
    //the below 3 consts rearranges the item to be displayed so new item is displayed first on category page
    const shiftedData = !pageData? '': pageData.filter(item=>item.new === true)
    const newData = !pageData? '': pageData.filter(item=> item.new===false)
    const toRender = [...shiftedData, ...newData]

    //maps the toRender for display and determines the position of images according to product's index
    //productImg function was imported from headphonesImg
    const pageOrder = toRender.map((product, index) =>{
        return(
            <motion.div initial={{ opacity: 0}} key={index+1} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
                <div className={`xl:h-[560px] ${index%2 !== 0 ? 'xl:flex-row-reverse':'xl:flex-row'} md:h-[671px] sm:h-[681px] xl:w-[1110px] sm:w-full mx-auto sm:gap-[32px] items-center md:gap-[52px] xl:gap-[125px] relative flex sm:flex-col`}>
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
            </motion.div>
            )
           
    })
    return !pageData? loadingEffect : pageOrder
}