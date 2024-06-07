//The below imports are used in the component declared at the bottom of this js file(Modal1).
import { useDispatch } from "react-redux"
import { showModal } from "../features/modalSlice"


/*This function generates the radio buttons for the payment section of the checkout page
   The CheckoutInput component in input.js could do the same but I used this to test which
   is cleaner. This is cleaner but I still used the other component anyways, I'll use this
   in future projects
*/
export const radioPayments = (value, id, method, onchange) =>{
    return (
        <div htmlFor={id} className="md:w-[309px] relative mb-[16px] flex gap-[16px] items-center outline-none rounded-lg font-Manrope-Bold text-[16px] tracking-[-0.21px] text-black xl:w-[309px] sm:w-[280px] h-[56px] border-[solid]">
            <input 
                type='radio'
                id= {id}
                onChange={onchange}
                name="payment"
                value={value}
                className="border-[.5px] checked:accent-[#D87D4A] self-center mr-[52px] absolute peer/radio ml-[16px] border-[solid] border-[#cfcfcf]"
            />
            <label htmlFor={id} className="text-[14px] pt-[16px] pl-[40px] rounded-lg peer-checked/radio:border-[#d87d4a] w-full h-full font-Manrope-Bold border-[#cfcfcf] border-[1px] hover:border-[#d87d4a] border-[solid] tracking-[-0.25px]">{method}</label>
        </div>
    )
}


//heading background for product pages and checkout there may be more of this elsewhere
export const heading = 
    <header className="xl:w-[1110px] xl:px-[unset] sm:px-[40px] bg-black md:h-[90px] sm:h-[90px] xl:h-[97px] mx-auto  flex content-between items-center sm:w-full">
    </header>


//heading of the checkout page
export const header = 
<h1 className="sm:text-[28px] sm:pr-[48px] xl:mb-[30px] md:pr-[0] md:mb-[41px] md:mt-[30px] md:text-[32px] md:leading-[32px] tracking-[1.14px] sm:mt-[24px] sm:mb-[32px] font-Manrope-Bold sm:tracking-[1px] text-black">CHECKOUT</h1>


//heading of the Billing detals section of checkout page
export const headLabel = <p className="text-[13px] sm:pr-[48px] md:pr-[0] mb-[16px] font-Manrope-Bold text-[#d87d4a]">BILLING DETAILS</p>


//The summary items gets displayed each with the function below
export const summaryItems = (name, price, quantity, slug, key)=>{
    return(   
        <div key={key} className="flex items-center mr-auto gap-[16px] w-full">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/cart/image-${slug}.jpg`} 
                alt="product"
                className="w-[64px] h-[64px] rounded-lg"
            />
            <article className="flex w-full">
                <div className="mr-auto">
                    <h2 className="font-Manrope-Bold leading-[25px] text-[15px] text-[black]">{name.replace(/Headphones|Wireless|Speakers|Earphones|/g, '').replace(/Mark/g, 'MK')}</h2>
                    <p className="font-Manrope-Bold text-[14px] leading-[25px] text-black">${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',' )}</p>
                </div>
                <p className="opacity-50 font-Manrope-Bold leading-[25px] text-[15px]">x{quantity}</p>
            </article>
        </div>
    )
}

//The below formats the carts items and confirmation modal items names to remove specified words
const formatName = (name)=>{
    return name.replace(/Headphones|Wireless|Speaker|Earphones|/g, '').replace(/Mark/g, 'MK')
}

//This function formats the prices of items so any equal 1k or higher gets a comma after 1st figure
export const formatFigures = (figure)=>{
    return figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',' )
}


//confirmation modal background
export const modal2 = 
        <div className="2xl:w-[1440px] flex-shrink-0 z-50 fixed h-full sm:w-full">
            <div className="bg-black absolute w-full h-full opacity-40">
                <button className='w-full h-full'></button>
            </div>
        </div>


//the checkmark on the confirmation modal
export const icon = <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" strokeWidth="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>


/*The below is a version of checkou summaryItems but with some differences making summaryItem
  thus not reusable
*/
export const checkOutModalItems = (name, price, quantity, slug, key)=>{
    return ( 
        <div key={key} className="flex mb-[12px] my-[24px] relative mx-auto items-center gap-[16px] sm:w-[215px] md:w-[198px]">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/cart/image-${slug}.jpg`} 
                alt="product"
                className="w-[50px] h-[50px] rounded-lg"
            />
            <article className="flex w-full ">
                <div className="mr-auto">
                    <h2 className="font-Manrope-Bold leading-[25px] text-[15px] text-[black]">{formatName(name)}</h2>
                    <p className="font-Manrope-Bold text-[14px] leading-[25px] text-black">$ {formatFigures(price)}</p>
                </div>
                <p className="opacity-50 font-Manrope-Bold leading-[25px] text-[15px]">x{quantity}</p>
            </article>
        </div>
    )
}


//below is the confirmation h1 and note.
export const confirmationNotes = 
            <article className="flex flex-col md:w-[444px] md:items-stretch sm:w-[263px] relative mx-auto sm:gap-[16px] md:gap-[24px]">
                <h1 className="md:text-[32px] sm:text-[24px] sm:leading-[28px] sm:tracking-[0.86px] sm:w-[263px] md:w-[284px] text-black font-Manrope-Bold md:leading-[36px] md:tracking-[1.14px]">THANK YOU FOR YOUR ORDER</h1>
                <p className="text-[15px] opacity-50 font-Manrope-Regular leading-[25px]">You will reciever an email confirmation shortly.</p>
            </article>

//below is checkout modal grand total section
export const theGrand = (total)=>{
    return(  
        <div className="relative md:rounded-bl-none sm:rounded-bl-lg sm:rounded-br-lg md:rounded-br-lg md:rounded-tr-lg flex flex-col content-center gap-[8px] bg-[black] md:w-[198px] sm:w-[263px]">
            <p className="leading-[25px] self-baseline sm:ml-[24px] sm:mt-4 md:mt-auto md:ml-[32px] text-[white] font-Maronpe-Medium opacity-75 text-[15px]">GRAND TOTAL</p>
            <p className="text-[white] sm:ml-[24px] md:ml-[32px] sm:mb-[19px] md:mb-[35px] font-Manrope-Bold text-[18px]">${total}</p>
        </div>
    )
}

//cashNote is displayed when the cash option is selected as payment
export const cashNote = 
        <div className="w-fit mt-[24px] items-center mx-auto flex relative sm:flex-col md:flex-row sm:gap-[24px] md:gap-[32px]">
            <img className="w-[48px] h-[48px]" src={`${process.env.PUBLIC_URL}/assets/checkout/icon-cash-on-delivery.svg`} alt="cash"/>
            <p className="text-[15px] text-black opacity-50 leading-[25px] font-Maronpe-Medium md:w-[554px] sm:w-[285px]">
                The 'Cash on Delivery' option enables you to pay in cash when our delivery 
                courier arrives at your residence. Just make sure your address is 
                correct so that your order will not be cancelled.
            </p>
        </div>

export const costs = (total, cartItems, VAT, shipping)=>{
    return [{name:'TOTAL', value:`$ ${total}`}, 
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
}

//Below is the cart modal background component
export default function Modal1(){
    const dispatch = useDispatch()
    const modal =
        <div className="xl:w-[1440px] flex-shrink-0 z-50 fixed h-full w-full">
            <div className="bg-black absolute w-full h-full opacity-40">
                <button onClick={()=> dispatch(showModal(false))} className='w-full h-full'></button>
            </div>
        </div>

    return modal
}