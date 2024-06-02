import { Link } from "react-router-dom";
import Logo from "./logo";
import Cart from "./cart";
import { modal2 } from "../checkout/checkoutExports";
import HomeSection2 from "../home-page/section2";
import { useState } from "react";

export default function NavBar(){
    const [toggle, setToggle] = useState(false)

    const toggleBars =
            <button onClick={()=>setToggle(!toggle)} className="flex group mr-[49px] xl:hidden flex-col gap-[4px]">
                <div className={`w-[16px] h-[3px] transition duration-150 ease-out ${toggle ? "rotate-45 translate-y-[-1px]": ''} bg-white`}></div>
                <div className={`w-[16px] h-[3px] bg-white ${toggle ? 'hidden':''}`}></div>
                <div className={`w-[16px] h-[3px] transition duration-150 ease-out ${toggle ? "rotate-[-60deg] translate-x-1/10 -translate-y-2 ": ''}  bg-white`}></div>
            </button>

    const mobMen = <HomeSection2/>

        toggle && <div className="xl:hidden">
            {mobMen}
            {modal2}
        </div>
    

    const navLinks = 
        <div className="xl:inline-flex sm:hidden justify-center w-[429px] mx-auto sm:flex-col items-center pr-0 xl:flex-row gap-[34px]">
            <Link to='/'><button className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HOME</button></Link>
            <Link to='/headphones'><button className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HEADPHONES</button></Link>
            <Link to='/speakers'><button className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">SPEAKERS</button></Link>
            <Link to='/earphones'><button className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">EARPHONES</button></Link>
        </div>

    return (
        <div>
            <nav className="flex h-[25px] mx-auto sm:px-[40px] xl:px-[unset] xl:mb-[36px] mt-[32px] xl:h-[28px] content-between relative sm:w-full xl:w-[1110px]">
                <div className="flex mr-auto xl:gap-[197px] items-center content-between">
                    {toggleBars}
                    <Logo/>
                    {navLinks}
                </div>
                <Cart/>
            </nav>
            <hr className="relative w-[1110px] mx-auto xl:block sm:hidden border-[#363636] bg-[#979797]" />
            {        
                toggle && 
                <div className="xl:hidden z-[3000] sm:top-24 md:top-40 w-full fixed">
                    <div className="block relative bg-white sm:py-[35px] xl:max-w-[689px] sm:w-full sm:h-[730px] mx-auto md:h-[340px] rounded-lg md:py-[70px]">
                        <div className="w-fit mx-auto">{mobMen}</div>
                    </div>
                    {modal2}
                </div>
            }
        </div>
    )

}