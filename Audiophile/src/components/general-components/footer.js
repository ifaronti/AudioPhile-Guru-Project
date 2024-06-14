import {facebook, twitter, instagram} from './SVGs'
import Logo from "./logo";
import { Link } from 'react-router-dom';

//The footer of all pages
export default function Footer(){
    const navLinks = 
        <div role='presentation' className="inline-flex justify-center w-[429px] md:flex-row mx-auto sm:gap-[16px] sm:flex-col items-center pr-0 xl:flex-row md:gap-[34px]">
            <Link to='/'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HOME</li></ul></Link>
            <Link to='/headphones'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">HEADPHONES</li></ul></Link>
            <Link to='/speakers'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">SPEAKERS</li></ul></Link>
            <Link to='/earphones'><ul className="list-none"><li className="hover:text-[#D87D4A]  font-Manrope-Bold cursor-pointer text-[13px] tracking-[2px] text-[#ffffff]">EARPHONES</li></ul></Link>
        </div>

    const footerNote = 
            <p className="font-Maronpe-Medium sm:text-center sm:mt-[48px] md:mt-[32px] xl:mt-[36px] md:text-left opacity-50 text-white leading-[25px] xl:w-[540px] md:w-[89.71534666%] lg:w-[689px] text-[15px] sm:-[327px]">
                Audiophile is an all in one stop to fulfill your audio needs. 
                We're a small team of music lovers and sound specialists who 
                are devoted to helping you get the most out of personal audio. 
                Come and visit our demo facility - we're open 7 days a week.
            </p>

    const footerRight = 
                    <p className="sm:w-[258px] sm:mb-[48px] md:mb-[unset] sm:mt-[48px] md:mx-0 sm:mx-auto xl:mx-[0] sm:text-center md:text-left xl:mt-[56px] md:mt-[80px] xl:w-[540px] font-Manrope-Bold text-[15px] leading-[25px] text-white opacity-50">
                        Copyright 2021. All Rights Reserved
                    </p>

    return(
        <footer className="bg-[#101010] relative p-0 w-full sm:h-[654px] md:h-[400px] xl:h-[365px]">
            <div role='presentation' className="xl:w-[1110px] md:mt-[56px] xl:min-w-[1110px] sm:mt-[48px] sm:w-[327px] md:min-w-[89.71354666%] md:max-w-[689px] xl:mt-[75px] xl:mb-[46px] mx-auto">
                <nav className="xl:w-[1110px] sm:gap-[48px] md:gap-[32px] xl:gap-[unset] sm:w-[327px] sm:mt-[52px] md:mt-[56px] md:items-start sm:items-center xl:flex-row flex sm:flex-col xl:content-between">
                    <Logo/>
                    <nav className="xl:ml-auto sm:ml-0">{navLinks}</nav>
                </nav>
                {footerNote}
                {footerRight}
                <div role='presentation' className='flex relative sm:mx-auto sm:w-fit md:w-full md:mx-0'>
                    <div role='presentation' className='flex gap-[16px] md:mt-[-4.5%] xl:mt-[-10%] w-[104px] md:-mx-0 md:ml-auto'>
                        {facebook}
                        {twitter}
                        {instagram}
                    </div>
                </div>
            </div>
        </footer>
    )
}