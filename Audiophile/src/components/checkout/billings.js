import { useState } from "react";
import CheckoutInput from "./input";
import { headLabel, header } from "./checkoutExports";

export default function Billing(){
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

    function handleChange(e){
        const {name, value} = e.target
        setBillingData(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
        setError(prev=>{
            return {...prev, [name]:false}
        })
    }

    function handleOnBlur(e){
        const {name} = e.target
        return e.target.validity.valid ? setError(prev=>prev): setError(prev => {
            return {...prev, [name]:true}
        })
    }
    const billing = 
        <div className="md:w-[634px] sm:mb-[32px] md:mb-[53px] mx-auto sm:w-[280px]">
            {header}
            {headLabel}
            <div className="md:flex-row mb-[24px] flex sm:flex-col md:gap-[16px] sm:gap-[24px]">
                <CheckoutInput
                    error={error.name}
                    id={'name'}
                    pattern="[^0-9]*$"
                    placeholder={'e.g Bonta Cuntas'}
                    type={'text'}
                    label={'Name'}
                    onchange={handleChange}
                    value={billingData.name}
                    onBlur={handleOnBlur}
                />
                <CheckoutInput
                    error={error.email}
                    id={'email'}
                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                    placeholder={'cuntsRus@gmail.com'}
                    type={'email'}
                    label={'Email Address'}
                    onchange={handleChange}
                    value={billingData.email}
                    onBlur={handleOnBlur}
                />
            </div>
            <CheckoutInput
                error={error.phone}
                id={'phone'}
                placeholder={'+1(204) 555-0136'}
                type={'text'}
                label={'Phone Number'}
                onchange={handleChange}
                value={billingData.phone}
                onBlur={handleOnBlur}
                pattern={/([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/}
            />
        </div>

    return billing
}