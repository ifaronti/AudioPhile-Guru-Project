import SeeProduct from "../general-components/productBtn"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { changePage } from "../features/pageSlice"
import { useNavigate } from "react-router-dom"
import { changeInCart } from "../features/inCart"
import { useMediaQuery } from "@mui/material";
import {QueryMedia} from '../general-components/mediaQuery'

export default function MayLike({data}){
    const [id, setId] = useState('')
    const [category, setCategory] = useState('')
    const [slug, setSlug] = useState('')
    const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')

    const matchesSM = useMediaQuery('(max-width:700px)')
    const matchesMD = useMediaQuery('(max-width:1149px)')
    const matchesXL = useMediaQuery('(min-width:1150px)')

    const media = QueryMedia(matchesSM, matchesMD, matchesXL)

    const youMay = <h3 className="font-Manrope-Bold text-center sm:text-[24px] sm:mb-[40px] xl:mb-[64px] md:mb-[61.38px] md:text-[32px] leading-[36px] tracking-[1.14px] sm:tracking-[0.86px]">YOU MAY ALSO LIKE</h3>

    const dispatch = useDispatch()
    const goTo = useNavigate()

    const theGo = async(category, id)=>{
        if(category==='' || id === ''){
            return
        }
        await category
        await id
        localStorage.setItem('current', id)
        goTo(`/${category}/${id}`)
    }

    useEffect(()=>{
        dispatch(changePage(id))
        theGo(category, id)
        // eslint-disable-next-line
    }, [id, category, dispatch])

    function dispatcher(slug){
        setSlug(slug)
    }

    useEffect(()=>{
        const getProduct = async()=>{
            try{
                if(slug===''){
                    return
                }
                else{
                    const theProduct = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/products?slug=${slug}`)
                    let theObj
                    theProduct.data.products.map(item=> {
                      return theObj = {id:item._id, category:item.category, name:item.name}
                        
                    })
                   setId(theObj.id)
                   setCategory(theObj.category)
                }
            }
            catch (err){
                console.warn(err)
            }
        }
        getProduct()
    }, [slug])


    const content = data?.map((item, index) =>{
       return <article key={index+1} className="flex flex-col items-center">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/shared/${media}/image-${item.slug}.jpg`} 
                alt={item.name}
                className="xl:w-[350px] rounded-lg xl:h-[318px] md:w-[236px] md:h-[308.96px] sm:w-[327px] sm:h-[120px]"
            />
            <h4 className="mt-[40px] mb-[32px] font-Manrope-Bold text-[24px] tracking-[1.71px]">{item.name}</h4>
            <Link>
                <SeeProduct text={'SEE PRODUCT'} event={()=>dispatcher(item.slug)}/>
            </Link>
        </article>
    })

    const mayCard = 
        <section className="flex xl:gap-[30px] xl:w-[1110px] md:w-[89.713466%] sm:w-[327px] mx-auto sm:flex-col md:flex-row md:gap-[30px] sm:gap-[56px]">
            {content}
        </section>
    return(
        <div>
            {youMay}
            {mayCard}
        </div>
    )
}