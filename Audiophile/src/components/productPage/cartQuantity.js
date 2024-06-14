import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CartQuantity({item}){
    const [quantity, setQuantity] = useState(item.quantity)
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')

    //using item as props which is any item in cart, this adds 1 to its value when clicked
    function addQuant(){
       setQuantity(prev => prev+1)
    }

    //using item as props which is any item in cart, this decuts 1 from value when clicked excepts it's 1
    function redQuant(){
        if(item.quantity === 1){
            return setQuantity(1)
        }
        setQuantity(prev=>prev-1)
    }

    //calls my API and updates the quantity of respective item using patch method
    const serveQuantity = async()=>{
            await item
            try{
                await axios.patch(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, {name:item.name, quantity:quantity})
            }
            catch(err){
              
            }
    }

    //Calls the servQuantity function whenever quantity changes so updates are live
    useEffect(()=>{
        serveQuantity()
        // eslint-disable-next-line
    }, [quantity])

    //displays the quantity of item in carts which buttons to add or reduce each item.
    const quantitySwitcher = 
            <div role='presentation' className="b-[#979797] w-[96px] flex bg-[#f1f1f1] items-center content-center gap-[12px] h-[32px]">

                <button onClick={()=> redQuant()} className="font-Manrope-Bold ml-auto text-[13px] opacity-50 hover:text-[#D87D4A] hover:opacity-100 tracking-[1px] text-black">-</button>

                <p className="font-Manrope-Bold text-[13px] tracking-[1px] text-black">{quantity}</p>
                
                <button onClick={()=> addQuant()} className="font-Manrope-Bold hover:text-[#D87D4A] hover:opacity-100 mr-auto text-[13px] opacity-50 tracking-[1px] text-black">+</button>
            </div>

    return quantitySwitcher
}
