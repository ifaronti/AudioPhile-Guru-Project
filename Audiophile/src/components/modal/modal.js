import {useSelector, useDispatch} from "react-redux";
import CartItems from "./cartItems";
import axios from "axios";
import { useState, useEffect } from "react";
import {loadBase} from '../features/databaseCart'

export default function ModalCart(){
    const [cartData, setCartData] = useState([])
    const cartId = useSelector(state=>state.cartId.value)|| localStorage.getItem('cartId')
    const dispatch = useDispatch()
  
    //calls my API everytime the cart button is clicked using cartId and sets cartData for display
    useEffect(()=>{
        const getDataBaseCart = async()=>{
            try{
                const{data} = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`)
                setCartData(data?.items)
                dispatch(loadBase(data?.items))
            }

            catch(err){
                
            }
        }
        getDataBaseCart()
        // eslint-disable-next-line
    }, [])
    
    return <CartItems data={cartData}/>
}