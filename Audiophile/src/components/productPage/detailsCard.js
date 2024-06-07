import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeInCart } from "../features/inCart"
import axios from "axios"
import CardNamePrice from "./cardNameDescription"
import { heading } from "./productExports"
import DetailQuantity from "./detailsQuantity"
import SeeProduct from "../general-components/productBtn"

export default function DetailCard({id}){
    const [quantity, setQuantity] = useState(1)
    const [toCart, setTocart] = useState({name:'', price:'', quantity:quantity, id:'', slug:''})
    const [cartItems, setCartItems] = useState([])
    const [isInCart, setIsInCart] = useState(false)
    const cartId = useSelector(state =>state.cartId.value) || localStorage.getItem('cartId')
    const data = useSelector(state=>state.data.value)
    const dispatch = useDispatch()
    const baseCart = useSelector(state=>state.baseCart.value)

    useEffect(()=>{
        const getCart = async()=>{
            try{
                const {data} = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`)
                setCartItems(data?.items.filter(items=>items.name))
            }
            catch (err){
                console.log(err)
            }
        }
        setQuantity(1)
        getCart()
    },[])

    const cartCompare = async(cartItems)=>{
        await cartItems
        if(cartItems.some(item=>item.name===data.name)){
            setIsInCart(true)
        }
        else{
            setIsInCart(false)
        }
    }

    useEffect(()=>{
        async function datali(data, isInCart, cartItems){
            await data
            await cartItems
            await cartCompare(cartItems)
            await isInCart
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
        datali(data, isInCart, cartItems)
       },[data, quantity, cartItems])

    const putToCart = async()=>{
        await cartId
        await data
        try{
            if(!toCart.name || !cartId){
                return
            }
            if(!cartItems.some(item=>item.slug===toCart.slug)){
                await axios.put(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, toCart)
            }
        }
        catch (err){
            console.log(err.response)
        }
        setIsInCart(true)
        window.location.reload()
    }

    const deleteFromCart = async(toCart)=>{
        await data
        await cartId
        await toCart
        await axios.delete(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`, {data:{slug:data.slug}})
        setIsInCart(false)
        window.location.reload()
    }

    return(
        <section className=" sm:w-[327px] md:w-[339.5px] xl:w-[445.5px]">
            {data.new && heading}
            <CardNamePrice data={data} id={id}/>
            <div className="flex gap-[16px]">
                <DetailQuantity
                    quantity={quantity}
                    add={()=>setQuantity(prev=>prev+1)}
                    reduce={()=>setQuantity(prev=>prev===1? 1:prev-1)}
                />
                <SeeProduct text={isInCart?'REMOVE ITEM':'ADD TO CART'} event={isInCart? deleteFromCart : putToCart}/>
            </div>
        </section>
    )
}