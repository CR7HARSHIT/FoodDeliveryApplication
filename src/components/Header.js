import logoimg from "../../assets/LOGO.jpg";
import { useState } from "../../node_modules/react";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () =>{ 
	const [btnreact,setbtnreact]=useState("Login")
    const status=useOnlineStatus()
	return(
	<div className="header">
      <div className="logo-container">
		<img className="logo" src={logoimg}/>
	  </div>
	  <div className="nav-items">
		<ul type="none">
			<li>OnlineStatus: {status ? "✅":"📵"}{console.log(`onlineStatusheader:${status}`)}</li>
			<li><Link to="/">Home</Link></li>
			 <li><Link to="/about">About Us</Link></li> 
			<li><Link to="/contact">Contact Us</Link></li>
			<li>Cart</li>
			<Link to="/login"><button onClick={
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