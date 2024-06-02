import { createSlice } from "@reduxjs/toolkit";

export const shippingSlice = createSlice({
    name:'shippingt',
    initialState:{value:{}},
    reducers:{
        changeShipping:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default shippingSlice.reducer
export const {changeShipping} = shippingSlice.actions