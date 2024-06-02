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
    const inCart = useSelector(state=>state.inCart.value)

    const dispatch = useDispatch()

    const cartCompare = async(cartItems)=>{
        await cartItems
        if(cartItems.some(item=>item.name===data.name)){
            dispatch(changeInCart(true))
            setIsInCart(true)
        }
        else{
            dispatch(changeInCart(false))
            setIsInCart(false)
        }
    }

    useEffect(()=>{
        async function datali(data, cartItems){
            await data
            await cartItems
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
        cartCompare(cartItems)
        datali(data, cartItems)
       },[data, quantity])

    useEffect(()=>{
        const getCart = async()=>{
            try{
                const {data} = await axios.get(`http://localhost:4000/audiophile/cart/${cartId}`)
                setCartItems(data?.items.filter(items=>items.name))
            }
            catch (err){
                console.log(err)
            }
        }
        setQuantity(1)
        getCart()
    },[])

    const putToCart = async()=>{
        await cartId
        await data
        try{
            if(!toCart.name || !cartId){
                return
            }
            if(!cartItems.some(item=>item.slug===toCart.slug)){
                await axios.put(`http://localhost:4000/audiophile/cart/${cartId}`, toCart)
            }
        }
        catch (err){
            console.log(err.response)
        }
        setIsInCart(true)
    }

    const deleteFromCart = async(toCart)=>{
        await data
        await cartId
        await toCart
        await inCart
        await axios.delete(`http://localhost:4000/audiophile/cart/${cartId}`, {data:{slug:data.slug}})
        setIsInCart(false)
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