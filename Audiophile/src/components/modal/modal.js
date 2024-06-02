import {useSelector, useDispatch} from "react-redux";
import CartItems from "./cartItems";
import axios from "axios";
import { useState, useEffect } from "react";
import {loadBase} from '../features/databaseCart'



export default function ModalCart(){
    const [cartData, setCartData] = useState([])
    const cartId = useSelector(state=>state.cartId.value)|| localStorage.getItem('cartId')
    const inCart = useSelector(state=>state.inCart.value)
    const dispatch = useDispatch()
  

    useEffect(()=>{
        const getDataBaseCart = async()=>{
            try{
                const{data} = await axios.get(`http://localhost:4000/audiophile/cart/${cartId}`)
                setCartData(data?.items)
                dispatch(loadBase(data?.items.filter(item=>item.name)))
            }

            catch(err){
                console.log(err)
            }
        }
        getDataBaseCart()
    }, [inCart])

    const newCart = cartData.filter(item=>item.name)
    
    return <CartItems data={newCart}/>
}