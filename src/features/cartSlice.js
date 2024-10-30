import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
	name:'cart',
	initialState:{
		items:[]
	},
	reducers:{
		additem:(state,action)=> { 
			state.items.push(action.payload)
		},
		changecount:(state,action)=>{
			let items=state.items
			console.dir(items)
			let {id,sign}=action.payload
			for(let i=0;i<items.length;i++)
			{   console.log(items[0])
                if(items[i].itemdata.id===id){
				 if(sign==='+') items[i].count+=1;
				 else items[i].count-=1;
			   }
			}
		},
		deleteitem:(state,action)=>{
			let id=action.payload.id;
			let items=state.items
			let arr=[];
            for(let i=0;i<items.length;i++)
				{   
					if(items[i].itemdata.id===id){
						continue;
				   }
				   arr.push(items[i])
				}
				const newstate={
					items:arr
				}
				return newstate;
		}
	}
})
export default cartSlice.reducer;
export const {additem,changecount,deleteitem}=cartSlice.actions;