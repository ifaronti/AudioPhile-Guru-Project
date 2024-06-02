import { createSlice } from "@reduxjs/toolkit";

export const cartId = createSlice({
    name:'cartId',
    initialState:{value:''},
    reducers:{
        changeCartId:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default cartId.reducer
export const {changeCartId} = cartId.actions