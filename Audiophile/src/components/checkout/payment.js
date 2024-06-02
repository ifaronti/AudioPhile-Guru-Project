import CheckoutInput from "./input";
import { radioPayments } from "./checkoutExports";
import { useState } from "react";

export default function Payment(){
    const [payment, setPayment] = useState({method:'', eNumber:'', ePin:''})
    const [error, setError] = useState({emoney:false, pin:false})

    function handleChange(e){
        const {name, value, type} = e.target
        if(type==='radio'){
            setPayment(prev=>{
                return{...prev, method:value}
            })
        }
        else{
            setPayment(prev=>{
                return{...prev, [name]:value}
            })
        }
    }

    function handleOnBlur(e){
        const {name} = e.target
        return e.target.validity.valid ? 
        setError(prev=>prev): 
        setError(prev => {
            return {...prev, [name]:true}
        })
    }

    const cashNote = 
            <div className="w-fit mt-[24px] items-center mx-auto flex relative sm:flex-col md:flex-row sm:gap-[24px] md:gap-[32px]">
                <img className="w-[48px] h-[48px]" src={`${process.env.PUBLIC_URL}/assets/checkout/icon-cash-on-delivery.svg`} alt="cash"/>
                <p className="text-[15px] text-black opacity-50 leading-[25px] font-Maronpe-Medium md:w-[554px] sm:w-[285px]">
                    The 'Cash on Delivery' option enables you to pay in cash when our delivery 
                    courier arrives at your residence. Just make sure your address is 
                    correct so that your order will not be cancelled.
                </p>
            </div>

    const emoneyInputs = 
        <div className="flex md:flex-row sm:flex-col md:gap-[16px] sm:gap-[24px] sm:mb-[32px] md:mb-[24px]">
            <CheckoutInput
                error={error.emoney}
                id={'eNumber'}
                placeholder={'364759034'}
                type={'text'}
                label={'e-Money Number'}
                pattern={"[0-9]{9}"}
                onBlur={handleOnBlur}
                onchange={handleChange}
                name='emoney'
            />

            <CheckoutInput
                error={error.pin}
                id={'ePin'}
                placeholder={'3646'}
                type={'text'}
                label={'e-Money PIN'}
                pattern={"[0-9]{4}"}
                onBlur={handleOnBlur}
                onchange={handleChange}
                name='pin'
            />
        </div>
    
    const payments = 
        <div className="md:w-[634px] sm:mb-[32px] sm:mt-[32px] md:mt-[61px] md:mb-[63px] mx-auto sm:w-[280px]">
            <p className="text-[13px] mb-[16px] font-Manrope-Bold text-[#d87d4a]">PAYMENT DETAILS</p>
            <div className="flex md:flex-row sm:flex-col">
                <p className="text-[12px] mr-auto font-Manrope-Bold sm:mb-[17px] md:mb-0 text-black tracking-[-0.21px]">Payment Method</p>
                <div>
                    {radioPayments('e-Money', 'eMoney', 'e-money', handleChange)}
                    {radioPayments('cash', 'cash', 'cash', handleChange)}
                </div>

            </div>
            {payment.method === 'e-Money' && emoneyInputs}
            {payment.method === 'cash' && cashNote}
        </div>

    return payments
}