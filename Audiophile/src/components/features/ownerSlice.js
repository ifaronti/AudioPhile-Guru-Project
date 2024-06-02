import { createSlice } from "@reduxjs/toolkit";

export const ownerSlice = createSlice({
    name:'cartOwner',
    initialState:{value:''},
    reducers:{
        changeOwner:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default ownerSlice.reducer
export const {changeOwner} = ownerSlice.actions