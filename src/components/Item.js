import { useState } from "react";
import CDNlinks from "../../utils/constants";
import { additem } from "../features/cartSlice";
import { useDispatch } from "react-redux";
const Item=({itemdata})=>{
	const dispatch=useDispatch();
	const handleclickonADD=()=>{
		dispatch(additem(itemdata));
        setcount(1);
	}
	let [count,setcount]=useState(0);
  return (<div className="border-b-2 border-slate-300 px-4 flex justify-between ">
	   <div className="w-9/12">
		<h2 className="text-lg font-bold text-gray-600">{itemdata.name}</h2>
		<h3 className="font-black text-gray-800">₹{(itemdata.finalPrice||itemdata.defaultPrice || itemdata.price)/100}</h3>
		<h3>{itemdata.description}</h3>
	   </div>
	   {
	    count>0 ?
	   <div className="mt-4 ">
       <button className="h-10 w-24  border-4 border-black  rounded bg-white shadow-md text-green-500   " >
	   <div class="flex justify-between items-center">
       <span class="text-left ml-2 mr-2 mb-3 text-xl" onClick={()=>{
		setcount(count-1)
	   }}>-</span>
       <span class="text-center  ml-2 mr-2 mb-3 text-xl">{count}</span>
       <span class="text-right ml-2 mr-2 mb-3 text-xl" onClick={()=>{
		setcount(count+1)
	   }}>+</span>
       </div>
	   </button>
	   </div>
	   :
	   <div className="mt-4">
	  <button className="h-10 w-24  border-4 border-black  rounded bg-white shadow-md text-green-500 m-auto  " onClick={handleclickonADD}>ADD</button>
	   </div>
	   }
		</div>)
}
 export default Item;