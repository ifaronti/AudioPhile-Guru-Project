import {showModal} from '../features/modalSlice'
import Items  from "./modalExports"
import { useDispatch, useSelector } from 'react-redux'
import B4Tax from './total'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { changeInCart } from '../features/inCart'
import { RotatingLines } from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'

export default function CartItems(){ 
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const goTo = useNavigate()
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')
    const cartItems = useSelector(state=>state.baseCart.value)

    const buttonLoader = 
        <div className='w-fit mx-auto'>
            <Oval visible={true} height="15" width="15" color="white" ariaLabel="oval-loading" wrapperStyle={{}} wrapperClass="" />
        </div>
    //checkout button to direct users to checkoutPage
    const theDispatcher = ()=>{
        dispatch(showModal(false))
        goTo('/checkout')
        window.scrollTo(0, 0,{  behavior: 'smooth' })
        return
    }

    const loadingEffects = 
        <RotatingLines visible={true} height="40" width="40" color="#d87d4a" strokeWidth="2" animationDuration="0.75"/>

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    //deletes Cart once the remove all button is clicked using provided cartId
    const deleteCart = async()=>{
        try{
            await cartId
            if(!cartId){
                alert('cart id is not found in database. Innitiate your cart by adding an item')
            }
            await axios.delete(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart?id=${cartId}`)
        }
        catch (err){
        }
        localStorage.removeItem('cartId')
        localStorage.removeItem('cartOwner')
        dispatch(showModal(false))
        dispatch(changeInCart(false))
        window.location.reload()
    }

    const cart =  
        <div role='presentation' className="bg-white relative z-[150] items-center sm:w-[327px] md:mx-[unset] flex-shrink-0 sm:mx-auto md:w-[377px] rounded-lg pt-[32px] flex flex-col gap-[32px]">
            <header className="flex w-[313px] sm:px-[1.3rem] md:px-[unset] mx-auto content-between">
                <h1 className="font-Manrope-Bold mr-auto text-[18px] tracking-[1.29px]">CART ({loading ? '...':cartItems?.length})</h1>
                <button disabled={cartItems?.length <1 ? true: false} onClick={deleteCart} className="f font-Maronpe-Medium opacity-50 text-[15px] hover:opacity-100 hover:text-[#D87D4A] leading-[25px] text-black">Remove all</button>
            </header>
            {loading? loadingEffects:<Items />}
            <div role='presentation' className="flex-shrink-0 relative w-[313px] sm:pl-[1.3rem] sm:pr-[1.3rem] md:pr-[unset] md:pl-[unset] mx-auto">
                {loading? 'Please wait...':<B4Tax />}
                <button disabled={cartItems?.length<1 ? true:false} onClick={theDispatcher} className="bg-[#d87d4a] disabled:bg-[#fbaf85] mx-auto relative sm:w-[271px] md:w-[313px] h-[48px] hover:bg-[#FBAF85] mb-[32px] text-white font-Manrope-Bold tracking-[1px] text-[13px]">{loading? buttonLoader: cartItems.length<1? 'NO ITEMS':'CHECKOUT'}</button>
            </div>
        </div>
        
    return (
        <section className="sm:w-full sm:mt-[115px] xl:w-[1200px] h-full absolute">
            <div role='presentation' className="md:right-[5rem] xl:right-[0] sm:mx-auto md:mx-[unset] sm:relative md:absolute z-[300]">
                {cart}
            </div>
        </section>
    )
}