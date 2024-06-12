import { useSelector } from "react-redux"
import CardNamePrice from "./cardNameDescription"
import { heading } from "./productExports"
import { motion } from "framer-motion"
import ProductPageCartBtns from "./productPageCartBtns"

//aggregate component to display name,price, description, quantity desire, add or remove item from cart
export default function DetailCard({id}){
    const data = useSelector(state=>state.data.value)

    return(
        <motion.div initial={{ opacity: 0}} transition={{ duration: 1.8 }} whileInView={{ opacity: 1, scale:1 }} viewport={{ once: false}}>
            <section className=" sm:w-[327px] md:w-[339.5px] xl:w-[445.5px]">
                {data.new && heading}
                <CardNamePrice id={id}/>
                    <ProductPageCartBtns/>
            </section>
        </motion.div>
    )
}