import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CartQuantity({item}){
    const [quantity, setQuantity] = useState(item.quantity)
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')

    function addQuant(){
       setQuantity(prev => prev+1)
    }
    function redQuant(){
        if(item.quantity === 1){
            return setQuantity(1)
        }
        setQuantity(prev=>prev-1)
    }

    const serveQuantity = async()=>{
            await item
            try{
                await axios.patch(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, {name:item.name, quantity:quantity})
            }
            catch(err){
              
            }
    }

    useEffect(()=>{
        serveQuantity()
        // eslint-disable-next-line
    }, [quantity])

    const quantitySwitcher = 
            <div className="b-[#979797] w-[96px] flex bg-[#f1f1f1] items-center content-center gap-[12px] h-[32px]">

                <button onClick={()=> redQuant()} className="font-Manrope-Bold ml-auto text-[13px] opacity-50 hover:text-[#D87D4A] hover:opacity-100 tracking-[1px] text-black">-</button>

                <p className="font-Manrope-Bold text-[13px] tracking-[1px] text-black">{quantity}</p>
                
                <button onClick={()=> addQuant()} className="font-Manrope-Bold hover:text-[#D87D4A] hover:opacity-100 mr-auto text-[13px] opacity-50 tracking-[1px] text-black">+</button>
            </div>

    return quantitySwitcher
}
