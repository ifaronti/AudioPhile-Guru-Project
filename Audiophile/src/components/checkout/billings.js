import { useState, useEffect } from "react";
import CheckoutInput from "./input";
import { headLabel, header } from "./checkoutExports";
import {changeBilling} from '../features/billingSlice'
import { useDispatch } from "react-redux";

export default function Billing(){
    const dispatch = useDispatch()
    const [error, setError] = useState({
        phone:false,
        name:false,
        email:false
    })
    const [billingData, setBillingData] = useState({
        name:'',
        email:'',
        phone:''
    })

    //ensures billing details are valid befor set the state values
    function handleChange(e){
        const {name, value} = e.target
        if(!e.target.validity.valid){
            setError(prev=>{
                return {...prev, [name]:true}
            })
            setBillingData(prev=>{
                return{
                    ...prev,
                    [name]:value
                }
            })
        }
        else{
            setError(prev=>{
                return {...prev, [name]:false}
            })
            setBillingData(prev=>{
                return{
                    ...prev,
                    [name]:value
                }
            })
        }
    }

    // checks billingData is not empty
    const checkBilling = ()=>{
        if(billingData.name && billingData.email && billingData.phone && !error.name && !error.email && !error.phone){
            dispatch(changeBilling(billingData))
        }
    }

    //if billing data isn't empty, this changes redux state value of Billing
    useEffect(()=>{
        checkBilling()
        // eslint-disable-next-line
    },[billingData, error])

    //sets errors accordingly once input when out of focus
    function handleOnBlur(e){
        const {name} = e.target
        if(e.target.validity.valid){
            setError(prev=>prev)
        } 
        else{
            setError(prev => {
                return {...prev, [name]:true}
            })
        }
    }
    
    //billinData inputs
    const billing = 
        <section className="md:w-[634px] sm:mb-[32px] md:mb-[53px] mx-auto sm:w-[280px]">
            {header}
            {headLabel}
            <div role='presentation' className="md:flex-row mb-[24px] flex sm:flex-col md:gap-[16px] sm:gap-[24px]">
                <CheckoutInput error={error.name} id={'name'} pattern="[^0-9]*$" placeholder={'e.g Bonta Cuntas'} type={'text'}
                    label={'Name'} onchange={handleChange} value={billingData.name} onBlur={handleOnBlur}
                />

                <CheckoutInput error={error.email} id={'email'} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" placeholder={'cuntass@gmail.com'}
                    type={'email'} label={'Email Address'} onchange={handleChange} value={billingData.email} onBlur={handleOnBlur}
                />
            </div>

            <CheckoutInput error={error.phone} id={'phone'} placeholder={'+1(204) 555-0136'} type={'text'} label={'Phone Number'}
                onchange={handleChange} value={billingData.phone} onBlur={handleOnBlur} pattern="(^[+]{1})?[0-9]{10,}"
            />
        </section>

    return billing
}