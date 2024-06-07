import { useSelector } from "react-redux"
import { motion } from "framer-motion"

export default function FeaturesInBox({box}){
    const data = useSelector(state=>state.data.value)

    const featuresText =             
            <article>
                <h2 className="sm:tracking-[0.86px] sm:mb-[24px] md:mb-[32px] md:tracking-[1.14px] md:text-[32px] font-Manrope-Bold leading-[36px] sm:text-[24px] text-black">FEATURES</h2>
                <p className="font-Maronpe-Medium text-[15px] text-left xl:w-[635px] md:h-[250px] md:w-[89.713541666667%] md:max-w-[689px] sm:h-[475px] text-black opacity-50 leading-[25px] sm:w-[327px]">
                    {data?.features}
                </p>
            </article>
    
    const inBox = box.map((item, index) =>{
        return <p key={index+1} className="opacity-50 mb-[8px] font-Manrope-Bold text-[#D87D4A] flex gap-[24px] text-[15px] leading-[25px]">
            {item.quantity+'x'}
            <span className="font leading-[25px] opacity-50 text-black text-[15px] font-Maronpe-Medium text">{item.item}</span>
        </p>
        })

const theBox = 
        <article className="md:w-[549px] md:flex md:content-between xl:block xl:w-[350px] xl:h-[225px] flex-shrink-0 ">
                <h2 className="sm:tracking-[0.86px] md:mr-auto xl:mr-[unset] sm:mb-[24px] md:mb-[unset] xl:mb-[32px] md:tracking-[1.14px] md:text-[32px] font-Manrope-Bold leading-[36px] sm:text-[24px] text-black">
                    IN THE BOX
                </h2>
                <div>{inBox}</div>
        </article>

    return(
        <motion.div initial={{ opacity: 0}} transition={{ duration: 2.5 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
            <section className="xl:w-[1110px] sm:w-[327px] md:w-full sm:gap-[88px] md:gap-[120px] flex sm:flex-col xl:flex-row xl:gap-[125px] mx-auto">
                {featuresText}
                {theBox}
            </section>
        </motion.div>
    )
}