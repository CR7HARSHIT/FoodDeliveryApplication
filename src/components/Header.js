import logoimg from "../../assets/LOGO.jpg";
import { useState } from "../../node_modules/react";
import { Link } from 'react-router-dom';

const Header = () =>{ 
	const [btnreact,setbtnreact]=useState("Login")

	return(
	<div className="header">
      <div className="logo-container">
		<img className="logo" src={logoimg}/>
	  </div>
	  <div className="nav-items">
		<ul type="none">
			<li><Link to="/">Home</Link></li>
			 <li><Link to="/about">About Us</Link></li> 
			<li><Link to="/contact">Contact Us</Link></li>
			<li>Cart</li>
			<button onClick={
				()=>{
                   btnreact === "Login"? setbtnreact("Logout"):setbtnreact("Login")
				}
			}>{btnreact}</button>
		</ul>
	  </div>
	</div>
)
}
export default Header;