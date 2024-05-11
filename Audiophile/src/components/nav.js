import { Link } from "react-router-dom";

export default function NavBar(){

    const logo = <img className="cursor-pointer h-[25px] relative" src={`
                            ${process.env.PUBLIC_URL}
                            /assets/images/shared/desktop/logo.svg`} 
                            alt="logo"/>

    const navLinks = 
    <div className="flex flex-col sm:mx-auto xl:ml-[167px] xl:mr-auto xl:flex-row gap-[34px]">
        <Link  to='/' className="font-Manrope hover:text-[#D87D4A] cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HOME</Link>
        <Link  to='/' className="font-Manrope hover:text-[#D87D4A] cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HEADPHONES</Link>
        <Link  to='/' className="font-Manrope hover:text-[#D87D4A] cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">SPEAKERS</Link>
        <Link  to='/' className="font-Manrope hover:text-[#D87D4A] cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">EARPHONES</Link>
    </div>

    const navCart = <img className="cursor-pointer relative w-[23.33px] h-[20px]" src={`${process.env.PUBLIC_URL}/assets/images/shared/desktop/icon-cart.svg`} alt="shopping cart icon"/>

    return (
            <nav className="flex h-[25px] mb-[36px] mt-[36px] items-center content-between relative sm:w-[87.2%] md:w-[89.713541666667%] xl:w-[1110.33px]">
                {logo}
                {navLinks}
                {navCart}
            </nav>
    )

}