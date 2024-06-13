import { useSelector } from 'react-redux'
import CartQuantity from '../productPage/cartQuantity'

//Using data props which is the cartData in modal.js this displays the cart Items shortening the name
export default function Items(){
    const data = useSelector(state=>state.baseCart.value)

    const items =  data?.map((item, index) =>{
        return  <div key={index+1} className="flex z-50 w-[313px] sm:px-[1.2rem] md:px-[unset] mx-auto flex-shrink-0 items-center content-between">
                    <div className="flex items-center mr-auto gap-[16px]">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/cart/image-${item.slug}.jpg`} 
                            alt="product"
                            className="w-[64px] rounded-lg h-[64px]"
                        />
                        <article>
                            <h2 className="font-Manrope-Bold leading-[25px] text-[15px] text-[black]">{item.name.replace(/Headphones|Wireless|Speakers|Earphones|/g, '').replace(/Mark/g, 'MK')}</h2>
                            <p className="font-Manrope-Bold opacity-50 text-[14px] leading-[25px] text-black">${item.price}</p>
                        </article>
                    </div>
                    <CartQuantity item={item}/>
                </div>
            })

    return items
 }
 
