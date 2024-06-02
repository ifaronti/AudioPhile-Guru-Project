import { createSlice } from "@reduxjs/toolkit";

export const pageData = createSlice({
    name:'pageData',
    initialState:{value:''},
    reducers:{
        changePage:(state, action)=>{
            state.value = action.payload
        }
    }
})

export default pageData.reducer
export const {changePage} = pageData.actions