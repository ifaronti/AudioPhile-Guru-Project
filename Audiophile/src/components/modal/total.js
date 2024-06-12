import { useSelector } from "react-redux";
import { formatFigures } from "../checkout/checkoutExports";

//Using the redux baseCart value, this calculates innitial total excluding shipping and VAT
export default function B4Tax(){
    var baseCart = useSelector(state=>state.baseCart.value)

    const total = baseCart?.map(item => item.price*item.quantity).reduce((a,b)=> Number(a)+Number(b), 0)

    return (
        <article className="w-[313px] flex-shrink-0 mx-auto flex mb-[24px] md:pr-[unset] sm:pr-[2.56rem] items-center">
            <p className="text-[15px] mr-auto font-Maronpe-Medium leading-[25px] text-black opacity-50">Total</p>
            <p className="text-[18px] text-black font-Manrope-Bold">${total? formatFigures(total): 0}</p>
        </article>
    )
}