import { useState } from "react";
import { additem,changecount,deleteitem } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const Item=({itemdata})=>{
	const dispatch=useDispatch();
	const handleclickonADD=()=>{
		dispatch(additem({itemdata,count:1}));
        setcount(1);
	}
	let num=useSelector((state)=>{
		
		let arr=state.cart.items;
		for(let i=0;i<arr.length;i++)
		{
			if(arr[i].itemdata.id===itemdata.id) return arr[i].count;
		}
       return 0;
	})

	let [count,setcount]=useState(num);
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
		if(count-1 === 0) dispatch(deleteitem({id:itemdata.id}))
		else dispatch(changecount({id:itemdata.id,sign:"-"}))
		setcount(count-1)
	   }}>-</span>
       <span class="text-center  ml-2 mr-2 mb-3 text-xl">{count}</span>
       <span class="text-right ml-2 mr-2 mb-3 text-xl" onClick={()=>{
		dispatch(changecount({id:itemdata.id,sign:"+"}))
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