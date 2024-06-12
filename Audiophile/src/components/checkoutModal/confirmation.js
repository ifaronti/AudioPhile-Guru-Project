import { useSelector, useDispatch } from "react-redux";
import { icon } from "../checkout/checkoutExports";
import { checkModal } from "../features/checkoutModal";
import { checkOutModalItems } from "../checkout/checkoutExports";
import { useState } from "react";
import { confirmationNotes } from "../checkout/checkoutExports";
import { formatFigures } from "../checkout/checkoutExports";
import { theGrand } from "../checkout/checkoutExports";
import { useNavigate } from "react-router-dom";

export default function Confirmation(){
    const cart = useSelector(state=> state.baseCart.value)
    const dispatch = useDispatch()
    const [slice1, setSlice1] = useState(true)
    const goTo = useNavigate()

    //closes the modal and directs user back to homepage
    const dispatcher = ()=>{
        dispatch(checkModal(false))
        goTo('/')
        return
    }

    //the slice1 one state variable is used to slice the cart variable. if true only 1 cart item will be
    //displayed else all cart items will be displayed
    const theSlice = slice1 ? cart.length-1: ''

    //Grandtotal calculation using price and quantity of each item in cart
    const total = cart.map(item=> item.price*item.quantity).reduce((a, b)=> a+b, 0)
    const shipping = 50
    const VAT = Math.floor(Number(total * 0.2))
    const grandTotal =formatFigures(( Number(total)+ shipping + Number(VAT)))

    //imported checkoutModalItems from checkoutExport to apply display container for  each item in cart 
    // using the slice1 state value
    const items = cart.map((item, index)=>checkOutModalItems(item.name, item.price, item.quantity, item.slug, index+1))
                  .slice(theSlice)
    
    //container for items and a p for setting whether to display one or all items
    const confirmItems = 
            <div className="bg-[#F1F1F1] md:rounded-br-none md:rounded-tr-none sm:rounded-tl-lg sm:rounded-tr-lg md:rounded-tl-lg md:rounded-bl-lg sm:w-[263px] md:w-[246px]">
                {items}
                <hr className="md:w-[198px] mx-auto sm:w-[215px] mb-[12px] h-[1px] bg-[#979797]" />
                <p onClick={()=> setSlice1(prev=>!prev)} className="bg-none border-none md:mb-[12px] cursor-pointer sm:mb-[12px] mx-auto w-fit text-[12px] tracking-[-0.21px] font-Manrope-Bold text-[black] opacity-50">{slice1 ? `${cart.length-1} other item(s)`: 'view less'}</p>
            </div>

    //displays confirmItems and the grandTotal side by side for big screens and vertically for small screen
    const confirmationItems =     
                <div className="md:w-[444px] relative sm:w-[263px] flex sm:flex-col md:flex-row">
                    {confirmItems}
                    {theGrand(grandTotal)}
                </div>
    
    //button uses the dispatcher function
    const confirmationBtn = 
                <button onClick={dispatcher} className="md:w-[444px] md:mt-[16px] hover:bg-[#fbaf85] sm:w-[263px] bg-[#D87D4A] h-[48px] text-[13px] tracking-[1px] font-Manrope-Bold text-[white]">BACK TO HOME</button>
    
//aggregate of everything above
    const confirmationContent = 
                <div className="w-fit mx-auto relative flex flex-col md:gap-[33px] sm:gap-[24px] content-center sm:my-[32px] md:my-[48px]">
                    {icon}
                    {confirmationNotes}
                    {confirmationItems}
                    {confirmationBtn}
                </div>

    return(
        <div className="w-full 2xl:w-[1440px] sm:h-[60vh] xl:h-[80vh] 2xl:h-[100vh] absolute flex md:h-[70vh] items-center">
            <div className="bg-[white] my-auto mx-auto rounded-lg relative z-[300] sm:w-[327px] md:w-[540px]">
                {confirmationContent}
            </div>
        </div>
    )
}