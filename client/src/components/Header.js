import logoimg from "../../assets/LOGO.jpeg";
import { useState } from "../../node_modules/react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{ 
	const [btnreact,setbtnreact]=useState("Login")
    const status=useOnlineStatus()
	let num=useSelector((store)=>
		{ const arr=store.cart.items
			console.dir(arr)
			const resarr=arr.map((obj)=> obj.count)
			let x=0;
			for (let i = 0; i < resarr.length; i++) {
				x += resarr[i];
			}
			return x; 
		})
    
	console.log("num=",num)
	return(
		
		<div className="flex justify-between items-center p-4 bg-white shadow-md border-b border-gray-300 ">
    <div className="logo-container ">
        <img className="w-40 h-auto" src={logoimg} alt="Khana Le Lo Logo" />
    </div>

    <div className="flex-grow">
        <ul className="flex justify-center items-center space-x-12 text-gray-800 font-semibold text-lg">
            <li className="hover:text-orange-600 transition duration-200">
                <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-600 transition duration-200">
                <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-orange-600 transition duration-200">
                <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center">
                <span className="text-lg font-medium">
                    Online Status: <span className={`text-${status ? 'green-600' : 'red-600'}`}>{status ? "✅" : "📵"}</span>
                </span>
            </li>
            <li className="flex items-center">
                <Link to="/cart" className="relative flex items-center justify-center bg-orange-500 text-white font-bold rounded-lg p-2 hover:bg-orange-600 transition duration-200">
                    {/* Font Awesome Shopping Cart Icon */}
                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                        {num}
                    </span>
                </Link>
            </li>
        </ul>
    </div>
</div>
	
	  )
}
export default Header;