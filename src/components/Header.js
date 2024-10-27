import logoimg from "../../assets/LOGO.jpg";
import { useState } from "../../node_modules/react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () =>{ 
	const [btnreact,setbtnreact]=useState("Login")
    const status=useOnlineStatus()
	return(
	<div className="flex m-4 p-4 justify-between bg-white shadow-lg">
      <div className="logo-container">
		<img className="w-36" src={logoimg}/>
	  </div>
	  <div className="flex items-center">
		<ul type="none" className="flex p-4 m-4 ">
			<li className="m-3 px-4 ">OnlineStatus: {status ? "✅":"📵"}{console.log(`onlineStatusheader:${status}`)}</li>
			<li className="m-3 px-4 hover:text-orange-500"><Link to="/">Home</Link></li>
			 <li className="m-3 px-4 hover:text-orange-500"><Link to="/about">About Us</Link></li> 
			<li className="m-3 px-4 hover:text-orange-500"><Link to="/contact">Contact Us</Link></li>
			<li className="m-3 px-4 hover:text-orange-500">Cart</li>
			<Link to="/login" className="m-3 px-4"><button className="  hover:text-orange-500 " onClick={
				()=>{
                   btnreact === "Login"? setbtnreact("Logout"):setbtnreact("Login")
				}
			} >{btnreact}</button></Link>
		</ul>
	  </div>
	  {console.log(`onlineStatusheader:${status} header rendering finished`) }
	</div>
	
)
}
export default Header;