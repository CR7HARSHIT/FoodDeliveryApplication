import logoimg from "../../assets/LOGO.jpg";
import { useState } from "../../node_modules/react";
const Header = () =>{ 
	const [btnreact,setbtnreact]=useState("Login")

	return(
	<div className="header">
      <div className="logo-container">
		<img className="logo" src={logoimg}/>
	  </div>
	  <div className="nav-items">
		<ul type="none">
			<li>Home</li>
			<li>About us</li>
			<li>Conatct us</li>
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