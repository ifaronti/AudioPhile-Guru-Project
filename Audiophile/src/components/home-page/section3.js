import ZX9 from "./homeZX9";
import ZX7 from "./homeZX7";
import YX1 from "./homeYX1";
import { motion } from "framer-motion";

//section 3 of homePage
export default function HomeSection3(){
    return (
        <motion.div initial={{ opacity: 0}} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
            <section className="xl:h-[1296px] md:h-[1424px] sm:h-[1404px] flex flex-col items-center content-center sm:gap-[24px] md:gap-[32px] xl:gap-[48px]">
                <ZX9/>
                <ZX7/>
                <YX1/>
            </section>
        </motion.div>
    )
}