import { useSelector } from "react-redux";
import { formatFigures } from "../checkout/checkoutExports";

export default function B4Tax(){
    const cart = useSelector((state) => state.baseCart.value)

    const newCart = cart.filter(item => item.name !=='')

    const total = newCart.map(item => item.price*item.quantity).reduce((a,b)=> Number(a)+Number(b), 0)

    return (
        <article className="w-[313px] flex-shrink-0 mx-auto flex mb-[24px] items-center">
            <p className="text-[15px] mr-auto font-Maronpe-Medium leading-[25px] text-black opacity-50">Total</p>
            <p className="text-[18px] text-black font-Manrope-Bold">{formatFigures(total ? '$'+" "+total:'')}</p>
        </article>
    )
}