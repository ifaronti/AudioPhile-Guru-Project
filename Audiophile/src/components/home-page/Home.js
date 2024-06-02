import HomeSection2 from "./section2";
import HomeSection3 from "./section3";
import BestGear from "../general-components/bestGear";
import Footer from "../general-components/footer";
import Hero from "./hero";
import { useEffect, useState } from "react";
import {changeOwner} from '../features/ownerSlice'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {changeCartId} from '../features/cartID'

export default function HomePage(){
    const dispatch = useDispatch()
     const cartOwner = useSelector(state => state.owner.value) || localStorage.getItem('cartOwner')
     const cartId = useSelector(state => state.cartId.value) || localStorage.getItem('cartId')
    
    useEffect(()=>{
        const firstLoad = async()=>{
            try{
                if(localStorage.getItem('cartOwner')){
                    return
                }
                const owner = Math.floor(Math.random()*2000000000)
                const {data} = await axios.post(`http://localhost:4000/audiophile/cart?createdBy=${owner}`)
                localStorage.setItem('cartOwner', owner)
                localStorage.setItem('cartId', data.id)
                dispatch(changeOwner(owner))
                dispatch(changeCartId(data.id))
            }
            catch (err){
                console.log(err)
            }
        }
        firstLoad()
    }, [])

    return(
        <main className="w-[full] relative flex flex-col sm:gap-[120px] md:gap-[96px] xl:gap[120px] items-center content-center p-0">
            <Hero/>
            <div className="xl:mb-[48px] sm:mt-[-80px] md:mt-[unset]"><HomeSection2/></div>
            <HomeSection3/>
            <div className="xl:mt-[80px] xl:mb-[80px] sm:mt-0 sm:mb-[unset]"><BestGear/></div>
            <Footer/>
        </main >
    )
}