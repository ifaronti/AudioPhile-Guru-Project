import { sectionItems } from "./homeExports";
import { motion } from "framer-motion";

export default function HomeSection2(){

    const container1 = sectionItems('headphones')

    const container2 = sectionItems( 'speakers')

    const container3 =  sectionItems('earphones')

    return (
        <motion.div initial={{ opacity: 0}} transition={{ duration: 2.5 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
            <section className="xl:w-[1110px] relative mx-auto sm:flex-col md:w-full sm:w-[327px] md:gap-[10px] xl:gap-[30px] sm:gap-[16px] xl:h-[284px] md:h-[217px] items-center content-center sm:h-[683px] flex md:flex-row p-0">
                {container1}
                {container2}
                {container3}
            </section>
        </motion.div>
    )
}