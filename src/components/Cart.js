import { useSelector } from "react-redux";
import Item from "./Item";
const Cart=()=>{
	const itemsarray=useSelector((store)=> store.cart.items);
	return(
		<div className="m-32  flex items-center justify-center flex-wrap">
			<h3 >CART ITEMS</h3>
            <div>
				{itemsarray.map((itemobject)=>{ 
				return (<Item itemdata={itemobject}/>)
				})}
			</div>
		</div>
	)
}
export default Cart;