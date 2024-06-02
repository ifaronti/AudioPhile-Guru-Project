import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'

export default function ProductImages({data}){

const matchesSM = useMediaQuery('(max-width:700px)')
const matchesMD = useMediaQuery('(max-width:1149px)')
const matchesXL = useMediaQuery('(min-width:1150px)')

const media = QueryMedia(matchesSM, matchesMD, matchesXL)
const productPics = 
    <section className="mx-auto flex xl:w-[1110px] md:w-full sm:flex-col md:flex-row sm:gap-[20px] md:gap-[18px] xl:gap-[30px]">
        <div className="flex-col flex md:gap-[18px] sm:gap-[20px] xl:gap-[32px]">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/product-${data.slug}/${media}/image-gallery-1.jpg`}
                alt={data.name}
                className="sm:w-[327px] flex-shrink-0 sm:h-[174px] md:w-[258px] xl:w-[445px] xl:h-[280px] rounded-lg "
            />

            <img 
                src={`${process.env.PUBLIC_URL}/assets/product-${data.slug}/${media}/image-gallery-2.jpg`}
                alt={data.name} 
                className="sm:w-[327px] flex-shrink-0 sm:h-[174px] md:w-[258px] xl:w-[445px] xl:h-[280px] rounded-lg "
            />
        </div>

        <img 
            src={`${process.env.PUBLIC_URL}/assets/product-${data.slug}/${media}/image-gallery-3.jpg`}
            alt={data.name}
            className="xl:w-[635px] xl:h-[592px] flex-shrink-0 sm:w-[327px] sm:h-[368px] md:w-[414px] rounded-lg"
        />
    </section>

    return productPics
}