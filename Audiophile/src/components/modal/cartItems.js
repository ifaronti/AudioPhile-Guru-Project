import {showModal} from '../features/modalSlice'
import Items  from "./modalExports"
import { useDispatch, useSelector } from 'react-redux'
import B4Tax from './total'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { changeInCart } from '../features/inCart'

export default function CartItems({data}){ 
    const dispatch = useDispatch()
    const goTo = useNavigate()
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')
    const cartItems = useSelector(state=>state.baseCart.value)


    const theDispatcher = ()=>{
        dispatch(showModal(false))
        return
    }

    const deleteCart = async()=>{
        try{
            await cartId
            if(!cartId){
                alert('cart id is not found in database. Click on the home menu')
            }
            await axios.delete(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart?id=${cartId}`)
        }

        catch (err){
            console.log(err)
        }
        localStorage.clear()
        goTo('/')
        dispatch(showModal(false))
        dispatch(changeInCart(false))
    }

    const cart =  
            <div className="bg-white relative z-[150] items-center sm:w-[327px] md:mx-[unset] flex-shrink-0 sm:mx-auto md:w-[377px] rounded-lg pt-[32px] flex flex-col gap-[32px]">
                <header className="flex w-[313px] sm:px-[1.3rem] md:px-[unset] mx-auto content-between">
                    <h1 className="font-Manrope-Bold mr-auto text-[18px] tracking-[1.29px]">CART ({data.length})</h1>
                    <button disabled={cartItems.length <1 ? true: false} onClick={deleteCart} className="f font-Maronpe-Medium opacity-50 text-[15px] hover:opacity-100 hover:text-[#D87D4A] leading-[25px] text-black">Remove all</button>
                </header>
                <Items data={data}/>
                <div className="flex-shrink-0 relative w-[313px] sm:pl-[1.3rem] md:pl-[unset] mx-auto">
                    <B4Tax/>
                    <Link to='/checkout'>
                        <button onClick={theDispatcher} className="bg-[#d87d4a] mx-auto relative sm:w-[271px] md:w-[313px] h-[48px] hover:bg-[#FBAF85] mb-[32px] text-white font-Manrope-Bold tracking-[1px] text-[13px]">CHECKOUT</button>
                    </Link>
                </div>
            </div>

    return( 
        <div className="sm:w-full sm:mt-[115px] xl:w-[1200px] h-full absolute">
            <div className="md:right-[5rem] xl:right-[0] sm:mx-auto md:mx-[unset] sm:relative md:absolute z-[300]">
                {cart}
            </div>
        </div>
    )
}