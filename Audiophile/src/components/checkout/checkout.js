import Footer from '../general-components/footer'
import Summary from "./summary";
import { heading } from "./checkoutExports";
import Billing from "./billings";
import Address from "./address";
import Payment from "./payment";

export default function Checkout(){

    return (
        <div role='presentation' className="flex flex-col sm:gap-[97px] md:gap-[116px] xl:gap-[142px] content-center ">
            <div role='presentation' className="w-full bg-black">{heading}</div>
            <section className="flex mx-auto sm:flex-col xl:flex-row md:flex-col sm:gap-[32px] xl:gap-[30px]">
                <section className="xl:w-[730px] xl:min-w-[730px] rounded-lg pb-[30px] bg-[white] md:w-[689px] sm:w-[327px]">
                    <Billing/>
                    <Address/>
                    <Payment/>
                </section>
                <Summary/>
            </section>
            <Footer/>
        </div>
    )
}