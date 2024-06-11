import DetailCard from "./detailsCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryMedia } from "../general-components/mediaQuery";
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function ProductPageCard(){
    const data = useSelector(state=>state.data.value)

    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')

    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    const product =
        <div className="relative">  
            <Link to={`/${data.category}`}>
                <ul className="list-none">
                    <li className="leading-[25px] sm:top-[-60px] absolute xl:top-[-95px] md:top-[-70px] xl:mb-[56px] sm:mb-[24px] font-Maronpe-Medium text-black opacity-50 text-left text-[15px]">Go Back</li>
                </ul>
            </Link> 
            <motion.div initial={{ opacity: 0}} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
                <div className="flex xl:w-[1110px] sm:w-[327px] flex-shrink-0 md:w-[689px] items-center sm:gap-[32px] mx-auto xl:gap-[124.5px] md:gap-[69px] md:flex-row sm:flex-col">
                    <img
                        className={`sm:w-[327px] rounded-lg sm:h-[327px] xl:h-[560px] xl:w-[540px] md:w-[281px] md:h-[480px]`}
                        src={`${process.env.PUBLIC_URL}/assets/product-${data.slug}/${media}/image-product.jpg`} 
                        alt={data.name} 
                    />
                    <DetailCard />
                </div>
            </motion.div>
        </div>

    return product
}