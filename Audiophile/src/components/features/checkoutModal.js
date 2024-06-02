import { createSlice } from "@reduxjs/toolkit";

export const checkoutModal = createSlice({
    name:'checkout',
    initialState:{value:false},
    reducers:{
        checkModal:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default checkoutModal.reducer   
export const {checkModal} = checkoutModal.actions