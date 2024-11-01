import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changecount,deleteitem } from "../features/cartSlice";
const CartItem=({obj})=>{
	const {itemdata,count}=obj
	const [freq,setfreq]=useState(count);
	const dispatch =useDispatch();
	const itemarr=useSelector((state)=> state.cart.items)     
	return(
		<div className="flex justify-between items-center ">
		<div className="w-9/12 m-4">
			<h2 className="text-lg font-bold text-gray-600">{itemdata.name}</h2>
			<h3 className="font-black text-gray-800">₹{(itemdata.finalPrice||itemdata.defaultPrice || itemdata.price)/100 * freq}</h3>
		</div>
		<div className="mt-4 ">
       <button className="h-10 w-24  border-4 border-black  rounded bg-white shadow-md text-green-500   " >
	   <div class="flex justify-between items-center">
       <span class="text-left ml-2 mr-2 mb-3 text-xl"  onClick={()=>{
		if(freq-1===0) {
			let index=0;
			console.dir(itemarr)
			for(let i=0;i<itemarr.length;i++)
			{
                if(itemarr[i].itemdata.id===itemdata.id){
					index=i;
					break;
				}
			}
			 console.log("before",itemarr)
			 dispatch(deleteitem({id:itemdata.id}))
			if(index!==itemarr.length-1){
				console.log("After",itemarr)
				 setfreq(itemarr[index+1].count)
			}
		}
		else {
			dispatch(changecount({id:itemdata.id,sign:'-'}))
		    setfreq(freq-1)
		}
	   }}>-</span>
       <span class="text-center  ml-2 mr-2 mb-3 text-xl">{freq}</span>
       <span class="text-right ml-2 mr-2 mb-3 text-xl"
	   onClick={()=>{
		dispatch(changecount({id:itemdata.id,sign:'+'}))
		setfreq(freq+1)
	   }}
	   >+</span>
       </div>
	   </button>
	   </div>
		</div>
	)
	
	
}
export default CartItem