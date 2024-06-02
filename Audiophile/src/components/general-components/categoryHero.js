import NavBar from "./nav"
import Cart from "./cart"

export default function CatHero({headerText}){
    const hero = 
        <header className="w-full md:h-[336px] sm:h-[192px] abso sm:px-[40px] xl:px-[unset] bg-black ">
            <h1 className='text-center relative sm:top-[122px] xl:top-[195px] md:top-[138px] sm:text-[28px] text-white md:text-[40px] font-Manrope-Bold sm:tracking-[2px] md:leading-[44px] mdtracking-[1.43px]'>{headerText}</h1>
        </header>

    return hero
}