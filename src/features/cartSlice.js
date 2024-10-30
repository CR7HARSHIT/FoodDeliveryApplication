import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
	name:'cart',
	initialState:{
		items:[]
	},
	reducers:{
		additem:(state)=> { 
			state.items.push("New ITEM")
		}
	}
})
export default cartSlice.reducer;
export const {additem}=cartSlice.actions;