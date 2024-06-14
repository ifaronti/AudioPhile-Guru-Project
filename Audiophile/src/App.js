import HomePage from "./components/home-page/Home";
import HeadphonePage from "./components/Headphones/headphones";
import Speakers from "./components/speakers/speakers";
import Earphones from "./components/earphones/earphones";
import { useSelector, useDispatch } from "react-redux";
import ModalCart from "./components/modal/modal";
import ProductPage from "./components/productPage/product";
import Checkout from "./components/checkout/checkout";
import { Routes, Route } from "react-router";
import { changeData } from "./components/features/cartSlice";
import { useEffect } from "react";
import Confirmation from "./components/checkoutModal/confirmation";
import Modal1 from "./components/checkout/checkoutExports";
import NavBar from "./components/general-components/nav";
import axios from "axios";
import { modal2 } from "./components/checkout/checkoutExports";
import { loadBase } from "./components/features/databaseCart";

export default function App() {
  const modal = useSelector(state => state.showModal.value)
  const searchParam = useSelector(state=>state.page.value) || localStorage.getItem('current')
  const confirmModal = useSelector(state=>state.checkoutModal.value)
  const cartId = useSelector(state=>state.cartId.value) || localStorage.getItem('cartId')
  const inCart = useSelector(state=>state.inCart.value)

  const dispatch = useDispatch()

  useEffect(()=>{
    const getProduct = async()=>{
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/products/${searchParam}`)
            dispatch(changeData(data))
        }
        catch (err){

        }
      }
      localStorage.setItem('current', searchParam)
      getProduct()

  },[searchParam, dispatch])

  useEffect(()=>{
    const getCart = async()=>{
        try{
            const {data} = await axios.get(`${process.env.REACT_APP_AUDIOSHOPAPI}/cart/${cartId}`)
            dispatch(loadBase(data.items))
        }
        catch (err){

        }
    }
    getCart()
    // eslint-disable-next-line
},[inCart])

  return (
    <main className="2xl:w-[1440px] relative sm:w-full mb-[4px] bg-[#fafafa] my-0 mx-auto">
      <div role='presentation' className="2xl:w-[1440px] w-full fixed bg-[#000] sm:pb-8 xl:pb-[unset] top-0 z-[200]"><NavBar/></div>
      <div role='presentation' className="w-[full] flex absolute h-full">
        {modal && <div role='presentation' className="z-[250]"><Modal1/></div>}
      </div>
      {confirmModal && <div role='presentation' className="2xl:w-[1440px] sm:w-full absolute z-[300] h-full">
        {modal2}
      </div>}
      {modal && <ModalCart/>}
      {confirmModal && <Confirmation/>}
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/speakers/*" element={<ProductPage/>}/>
        <Route path="/headphones" element={<HeadphonePage/>}/>
        <Route path="/headphones/*" element={<ProductPage/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/earphones/*" element={<ProductPage/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </main>
  );
}