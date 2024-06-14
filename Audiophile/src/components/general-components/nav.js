import { Link } from "react-router-dom";
import Logo from "./logo";
import Cart from "./cart";
import { modal2 } from "../checkout/checkoutExports";
import HomeSection2 from "../home-page/section2";
import { useState } from "react";


//Site's navbar
export default function NavBar(){
    const [toggle, setToggle] = useState(false)

    //toggle bars for mobile menu
    const toggleBars =
            <button onClick={()=>setToggle(!toggle)} className="flex group mr-[49px] xl:hidden flex-col gap-[4px]">
                <div role="presentation" className={`w-[16px] h-[3px] transition duration-150 ease-out ${toggle ? "rotate-45 translate-y-[-1px]": ''} bg-white`}></div>
                <div role="presentation" className={`w-[16px] h-[3px] bg-white ${toggle ? 'hidden':''}`}></div>
                <div role="presentation" className={`w-[16px] h-[3px] transition duration-150 ease-out ${toggle ? "rotate-[-60deg] translate-x-1/10 -translate-y-2 ": ''}  bg-white`}></div>
            </button>

    const mobMen = <HomeSection2/>
    
    const navLinks = 
        <div role='presentation' className="xl:inline-flex sm:hidden justify-center w-[429px] mx-auto sm:flex-col items-center pr-0 xl:flex-row gap-[34px]">
            <Link to='/'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HOME</li></ul></Link>
            <Link to='/headphones'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HEADPHONES</li></ul></Link>
            <Link to='/speakers'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">SPEAKERS</li></ul></Link>
            <Link to='/earphones'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">EARPHONES</li></ul></Link>
        </div>

    return (
        <div role='presentation'>
            <nav className="flex h-[25px] mx-auto sm:px-[40px] xl:px-[unset] xl:mb-[36px] mt-[32px] xl:h-[28px] content-between relative sm:w-full xl:w-[1110px]">
                <div role='presentation' className="flex mr-auto xl:gap-[197px] items-center content-between">
                    {toggleBars}
                    <Logo/>
                    {navLinks}
                </div>
                <Cart/>
            </nav>
            <hr className="relative w-[1110px] mx-auto xl:block sm:hidden border-[#363636] bg-[#979797]" />
            {        
                toggle && 
                <div role='presentation' className="xl:hidden z-[3000] sm:top-24 md:top-40 w-full fixed">
                    <div role='presentation' className="block relative bg-white sm:py-[35px] xl:max-w-[689px] sm:w-full sm:h-[730px] mx-auto md:h-[340px] rounded-lg md:py-[70px]">
                        <section onClick={()=>setToggle(false)} className="w-fit mx-auto">{mobMen}</section>
                    </div>
                    {modal2}
                </div>
            }
        </div>
    )

}