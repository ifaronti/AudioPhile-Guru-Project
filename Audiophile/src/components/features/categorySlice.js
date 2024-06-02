import { createSlice } from "@reduxjs/toolkit";

const category = createSlice({
    name:'category',
    initialState:{value:''},
    reducers:{
        changeCat:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default category.reducer
export const {changeCat} = category.actions