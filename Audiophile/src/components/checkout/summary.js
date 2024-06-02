import { useEffect, useState } from "react"
import { summaryItems, formatFigures } from "./checkoutExports"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { checkModal } from "../features/checkoutModal"
import { loadBase } from "../features/databaseCart"

export default function Summary(){
    const [cartItems, setCartItems] = useState([])
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')
    const dispatch = useDispatch()

    const payment = useSelector(state=>state.payment.value)
    const reduxShipping = useSelector(state=>state.shipping.value)
    const billing = useSelector(state=>state.billing.value)

    const confirmValues= async()=>{
        await payment
        await reduxShipping
        await billing
        
        if(payment.method === 'e-Money' && !payment.ePin || !billing.name){
            return
        }
        if(!payment.method || !reduxShipping.address || !billing.name || cartItems.length<1){
            return
        }
        dispatch(checkModal(true))
    }

    useEffect(()=>{
        const getCart = async()=>{
            try{
                const {data} = await axios.get(`http://localhost:4000/audiophile/cart/${cartId}`)
                setCartItems(data?.items.filter(items=>items.name))
                dispatch(loadBase(data?.items.filter(items=>items.name)))
            }
            catch (err){
                console.log(err)
            }
        }
        getCart()
    },[])

    const total = formatFigures(cartItems.map(item=> item.price*item.quantity).reduce((a, b)=> a+b, 0))
    const shipping = 50
    const VAT = formatFigures(Math.floor(Number(total.replace(',', '') * 0.2)))
    const grandTotal =formatFigures(( Number(total.replace(',', ''))+ shipping + Number(VAT.replace(',', ''))))
    
    const items = cartItems.map((item, index)=>summaryItems(item.name, item.price, item.quantity, item.slug, index))

    const costs = [{name:'TOTAL', value:`$ ${total}`}, 
                   {name:'SHIPING', value:`$ ${cartItems.length>1 ?shipping: '0'}`}, 
                   {name:'VAT(INCLUDED)', value:`$ ${VAT}`}
                ].map((item, index)=>{
                    return (
                        <article key={index} className="flex-shrink-0 flex items-center">
                            <p className="text-[15px] mr-auto font-Maronpe-Medium leading-[25px] text-black opacity-50">{item.name}</p>
                            <p className="text-[18px] text-black font-Manrope-Bold">{item.value}</p>
                        </article>
                    )
                })

    const conatiner = 
        <div className="xl:w-[350px] rounded-lg h-fit relative flex-grow-0 md:px-[33px] py-[32px] sm:px-[24px] sm:w-[327px] bg-white md:w-[689px] flex flex-col gap-[32px]">
            <h2 className="text-left text-[18px] font-Manrope-Bold tracking-[1.29px]">SUMMARY</h2>
            {items}
            <div>
                {costs}
                <article className="flex-shrink-0 flex mt-[16px] items-center">
                    <p className="text-[15px] mr-auto font-Maronpe-Medium leading-[25px] text-black opacity-50">GRAND TOTAL</p>
                    <p className="text-[18px] text-[#D87D4A] font-Manrope-Bold">$ {cartItems.length>0?grandTotal:'0'}</p>
                </article>
            </div>
            <button onClick={confirmValues} className="bg-[#d87d4a] text-white font-Manrope-Bold tracking-[1px] text-[13px] xl:w-[284px] hover:bg-[#fbaf85] md:w-[623px] sm:w-[279px] h-[48px]">CONTINUE & PAY</button>
        </div>

    return conatiner
}