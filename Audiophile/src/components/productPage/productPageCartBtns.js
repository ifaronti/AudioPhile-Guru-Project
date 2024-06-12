import SeeProduct from "../general-components/productBtn"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { changeInCart } from "../features/inCart"
import { useState, useEffect } from "react"
import { changeOwner } from "../features/ownerSlice"
import { changeCartId } from "../features/cartID"
import DetailQuantity from "./detailsQuantity"

export default function ProductPageCartBtns(){
    const [quantity, setQuantity] = useState(1)
    const [toCart, setTocart] = useState({name:'', price:'', quantity:quantity, id:'', slug:''})
    const [isInCart, setIsInCart] = useState(false)
    const cartId = useSelector(state=>state.cartId.value)
    const data = useSelector(state=>state.data.value)
    const cartOwner = useSelector(state=> state.owner.value) || localStorage.getItem('cartOwner')
    const baseCart = useSelector(state => state.baseCart.value)
    const dispatch = useDispatch()

    // This sets the payload to be either deleted or added to cart in databse whenever quantity or data changes
    useEffect(()=>{
        async function datali(){
            await data
            if(data.name===undefined || !data.name){
                return
            }
            setTocart({
                       name:data.name, 
                       price:data.price, 
                       quantity:quantity, 
                       id:data._id, 
                       slug:data.slug
                    })
        }
        datali(data)
       },[data, quantity])

       // this ensures item quantity resets to 1 and isIncart resets to false whenever data changes
       useEffect(()=>{setQuantity(1) 
        setIsInCart(false)},[data])

    //This checks if payload is already in cart and if it is, it sets isInCart true so user can either 
    // delete or leave it. It also, check if there is a cart with given cartID and cartOwner before 
    // attempting to respectively put item to cart or post item/create cart
    const putToCart = async()=>{
        await cartId
        await data
        await baseCart
        try{
            if(baseCart.some(item=>item.name === data.name)){
               setIsInCart(true)
            }
            else{
                if(!cartId || !cartOwner){
                    const owner = Math.floor(Math.random()*2000000000)
                    const {data} = await axios.post(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart?createdBy=${owner}`, toCart)
                    localStorage.setItem('cartOwner', owner)
                    localStorage.setItem('cartId', data.id)
                    dispatch(changeOwner(owner))
                    dispatch(changeCartId(data.id))
                }
                else{
                    await axios.put(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, toCart)
                }
            }
        }
        catch (err){
         
        }
        setIsInCart(true)
        dispatch(changeInCart(true))
    }

    // This deletes current product from cart if isInCart is true
    const deleteFromCart = async()=>{
        await data
        await cartId
        await axios.delete(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, {data:{slug:data.slug}})
        setIsInCart(false)
        dispatch(changeInCart(false))
    }

    return  ( 
        <div className="flex gap-[16px]">
            <DetailQuantity
                quantity={quantity}
                add={()=>setQuantity(prev=>prev+1)}
                reduce={()=>setQuantity(prev=>prev===1? 1:prev-1)}
            />
            <SeeProduct text={isInCart?'REMOVE ITEM':'ADD TO CART'} event={isInCart? deleteFromCart: putToCart}/>
        </div>
    )
}