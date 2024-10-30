import CDNlinks from "../../utils/constants";
import { additem } from "../features/cartSlice";
import { useDispatch } from "react-redux";
const Item=({itemdata})=>{
	const dispatch=useDispatch();
	const handleclickonADD=()=>{
		dispatch(additem());
	}
  return (<div className="border-b-2 border-slate-300 px-4 pb-4 flex justify-between ">
	   <div className="w-9/12">
		<h2 className="text-lg font-bold text-gray-600">{itemdata.name}</h2>
		<h3 className="font-black text-gray-800">₹{(itemdata.finalPrice||itemdata.defaultPrice || itemdata.price)/100}</h3>
		<h3>{itemdata.description}</h3>
	   </div>
	   <div className="border-black">
	  <button className="rounded bg-black shadow-md text-white m-10 p-4 border-b-amber-700 " onClick={handleclickonADD}>ADD</button>
	   </div>
		</div>)
}
 export default Item;