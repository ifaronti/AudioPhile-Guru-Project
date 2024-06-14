import CheckoutInput from "./input";
import { radioPayments } from "./checkoutExports";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {changePayment} from '../features/paymentSlice'
import { cashNote } from "./checkoutExports";

export default function Payment(){
    const [payment, setPayment] = useState({method:'', eNumber:'', ePin:''})
    const [error, setError] = useState({emoney:false, pin:false})
    const dispatch = useDispatch()

    //ensures valid data entry according to method(cash or e-Money)
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
        console.log(payment)
    }

    //ensures no errors are true and correct info depending on method of payment
    const checkPayment = ()=>{
        if(!payment.method){
            return
        }
        if(payment.method ==='cash'){
          return  dispatch(changePayment({method:'cash'}))
        }
        if(!error.emoney && !error.pin && payment.ePin && payment.eNumber){
            return dispatch(changePayment(payment))
        }
    }

 // uses the checkPayment function to change redux state value of payment
    useEffect(()=>{
        checkPayment()
        // eslint-disable-next-line
    },[payment])

    //ensures validity after input in no longer in focus
    function handleOnBlur(e){
        const {name} = e.target
        return e.target.validity.valid ? 
        setError(prev=>prev): 
        setError(prev => {
            return {...prev, [name]:true}
        })
    }

    //emoney method input
    const emoneyInputs = 
        <div role='presentation' className="flex md:flex-row sm:flex-col md:gap-[16px] sm:gap-[24px] sm:mb-[32px] md:mb-[24px]">
            <CheckoutInput error={error.emoney} id={'eNumber'} placeholder={'364759034'} type={'text'} label={'e-Money Number'}
                pattern={"[0-9]{9}"} onBlur={handleOnBlur} onchange={handleChange} name='emoney'
            />

            <CheckoutInput error={error.pin} id={'ePin'} placeholder={'3646'} type={'text'} label={'e-Money PIN'}
                pattern={"[0-9]{4}"} onBlur={handleOnBlur} onchange={handleChange} name='pin'
            />
        </div>
    
    //all payment inputs together
    const payments = 
        <section className="md:w-[634px] sm:mb-[32px] sm:mt-[32px] md:mt-[61px] md:mb-[63px] mx-auto sm:w-[280px]">
            <p className="text-[13px] mb-[16px] font-Manrope-Bold text-[#d87d4a]">PAYMENT DETAILS</p>
            <div role='presentation' className="flex md:flex-row sm:flex-col">
                <p className="text-[12px] mr-auto font-Manrope-Bold sm:mb-[17px] md:mb-0 text-black tracking-[-0.21px]">Payment Method</p>
                <div role='presentation'>
                    {radioPayments('e-Money', 'eMoney', 'e-money', handleChange)}
                    {radioPayments('cash', 'cash', 'cash', handleChange)}
                </div>

            </div>
            {payment.method === 'e-Money' && emoneyInputs}
            {payment.method === 'cash' && cashNote}
        </section>

    return payments
}