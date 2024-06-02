import { createSlice } from "@reduxjs/toolkit";

export const billingSlice = createSlice({
    name:'billing',
    initialState:{value:{}},
    reducers:{
        changeBilling:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default billingSlice.reducer
export const {changeBilling} = billingSlice.actions