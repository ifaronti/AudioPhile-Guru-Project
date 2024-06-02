import { useEffect, useState } from "react";
import CheckoutInput from "./input";
import { changeShipping } from "../features/shippingSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Address(){
    const dispatch = useDispatch()
    const [error, setError] = useState({address:false, zip:false, city:false, country:false})
    const [shipTo, setShipTo] = useState({address:'', zipcode:'', city:'', country:''})

    function handleChange(e){
        const {name, value} = e.target
        if(!e.target.validity.valid){
            setError(prev=>{
                return {...prev, [name]:true}
            })
        }
        else{
            setError(prev=>{
                return {...prev, [name]:false}
            })
            setShipTo(prev=>{
                return{
                    ...prev,
                    [name]:value
                }
            })
        }
    }

    const checkAddress = ()=>{
        if(shipTo.address && shipTo.zipcode && shipTo.city && shipTo.country){
            dispatch(changeShipping(shipTo))
        }
    }

    useEffect(()=>{
        checkAddress()
    },[shipTo])

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
    
    const address = 
        <div className="md:w-[634px] mx-auto sm:w-[280px] ">
            <p className="text-[13px] mb-[16px] font-Manrope-Bold text-[#d87d4a]">SHIPPING INFO</p>
            <div className="mb-[24px] mx-auto">
                <CheckoutInput
                    error={error.address}
                    id={'address'}
                    label={'Address'}
                    type={'text'}
                    placeholder={'117 Mapleridge Ave'}
                    labelId={'addressLabel'}
                    pattern={"^[\\d+]{1,}\\s+[a-zA-Z\\s+]{1,}"}
                    name='address'
                    onchange={handleChange}
                    onBlur={handleOnBlur}
                />
            </div>
            <div className="md:flex-row mb-[24px] flex sm:flex-col md:gap-[16px] sm:gap-[24px]">
                <CheckoutInput
                    error={error.zip}
                    id={'zipcode'}
                    label={'ZIP Code'}
                    type={'text'}
                    placeholder={'99999'}
                    pattern={"[0-9]{5}"}
                    name='zipcode'
                    onchange={handleChange}
                    onBlur={handleOnBlur}
                />
                <CheckoutInput
                    error={error.city}
                    id={'city'}
                    label={'City'}
                    type={'text'}
                    placeholder={'Zamunda'}
                    pattern={"[a-zA-Z]{3,}"}
                    name='city'
                    onchange={handleChange}
                    onBlur={handleOnBlur}
                />
            </div>
            <CheckoutInput
                error={error.country}
                id={'country'}
                label={'Country'}
                type={'text'}
                placeholder={'Zamunda'}
                pattern={"[a-zA-Z]{3,}"}
                name='country'
                onchange={handleChange}
                onBlur={handleOnBlur}
            />
        </div>
        
    return address
}