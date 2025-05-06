import { createSlice } from "@reduxjs/toolkit"

const initialValue={
    data:[]
}

export const homeSlice=createSlice({
    name:'homeslice',
    initialState:initialValue,
    reducers:{
        first:(state)=>{

        },
    }
})

export const [first]=homeSlice.actions
export default homeSlice.reducer