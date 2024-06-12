
//using props this specifies the quantity to be added to payload.quantity when item is added to cart
export default function DetailQuantity({quantity, add, reduce}){
    
return( 
        <div className="w-[120px] flex items-center content-center h-[48px] bg-[#f1f1f1]">
            <button
                onClick={reduce}
                className="opacity-25 mx-auto hover:text-[#D87D4A] hover:opacity-100 font-Manrope-Bold text-black tracking-[1px] text-[13px]">
                    -
            </button>

            <p className="ml-[20px] mr-[21px] font-Manrope-Bold text-[13px] tracking-[1px]">{quantity}</p>

            <button 
                onClick={add}
                className="opacity-25 mx-auto hover:text-[#D87D4A] hover:opacity-100 font-Manrope-Bold text-black tracking-[1px] text-[13px]">
                    +
            </button>
        </div>
    )
}