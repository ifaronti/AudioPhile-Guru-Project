import { createSlice } from "@reduxjs/toolkit";

export const currDataSlice = createSlice({
    name:'cart',
    initialState:{value:{}},
    reducers:{
        changeData:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default currDataSlice.reducer

export const {changeData} = currDataSlice.actions