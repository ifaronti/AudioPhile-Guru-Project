import { createSlice } from "@reduxjs/toolkit";

export const baseCart = createSlice({
    name:'databaseCart',
    initialState:{value:[]},
    reducers:{
        loadBase:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default baseCart.reducer
export const {loadBase} = baseCart.actions