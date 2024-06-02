import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import pageData from "./pageSlice";
import  currDataSlice from "./cartSlice";
import category from "./categorySlice";
import inCart from './inCart'
import ownerSlice from "./ownerSlice";
import cartId from "./cartID";
import baseCart from "./databaseCart";
import checkoutModal from "./checkoutModal";
import billingSlice from "./billingSlice";
import paymentSlice from "./paymentSlice";
import shippingSlice from "./shippingSlice";

export const theStore = configureStore({
    reducer:{
        showModal:modalSlice,
        page:pageData,
        category:category,
        inCart:inCart,
        owner:ownerSlice,
        cartId:cartId,
        data:currDataSlice,
        baseCart:baseCart,
        checkoutModal:checkoutModal,
        shipping:shippingSlice,
        payment:paymentSlice,
        billing:billingSlice
    }
})