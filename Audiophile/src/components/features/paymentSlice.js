import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
    name:'payment',
    initialState:{value:{}},
    reducers:{
        changePayment:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default paymentSlice.reducer
export const {changePayment} = paymentSlice.actions