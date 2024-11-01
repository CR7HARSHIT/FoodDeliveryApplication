import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const Cart=()=>{
	const itemsarray=useSelector((store)=> store.cart.items);
	
	return(
	  <div className="bg-gray-100 min-h-screen p-4">
         <h3 className="text-center font-extrabold text-3xl mb-8">CART ITEMS</h3>
           <div className="flex flex-col items-center gap-4" >
           {itemsarray.map((itemobject) => {
            console.dir(itemobject);
             return (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={itemobject.id}>
                    <CartItem obj={itemobject} itemarr={itemsarray}  />
                </div>
             );
           })}
        </div>
      </div>

	)
}
export default Cart;