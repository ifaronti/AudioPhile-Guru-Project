import { createSlice } from "@reduxjs/toolkit";

export const inCart = createSlice({
    name:'inCart',
    initialState:{value:false},
    reducers:{
        changeInCart:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default inCart.reducer
export const {changeInCart} = inCart.actions