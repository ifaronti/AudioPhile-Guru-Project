
//this button appears on multiple pages except checkout with different text and function
export default function SeeProduct({text, event}){
    return  <button 
                onClick={event}
                className="bg-[#d87d4a] hover:bg-[#FBAF85] w-40 relative h-12 text-[13px] font-Manrope-Bold tracking-[1px] text-white">
                            {text}
            </button>
}