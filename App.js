import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => (
	<div className="header">
      <div className="logo-container">
		<img className="logo" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="/>
	  </div>
	  <div className="nav-items">
		<ul type="none">
			<li>Home</li>
			<li>About us</li>
			<li>Conatct us</li>
			<li>Cart</li>
		</ul>
	  </div>
	</div>
)
const RestaurentCard=() =>(
	<div className="restaurent-card">
		<img src="" alt="RC-image"/>
	</div>
)
const Body = () => (
	<div className="body">
     <div className="search-bar">
		<input className="search-box" type="text" placeholder="Search restaurent here"></input>
		<button className="search-button">search</button>
	 </div>
	 <div className="restaurent-conatiner">
	
	
	 </div>
	</div>
)

const Footer = () => (
	<div className="footer">

	</div>
)

const AppLayout = () => (
	<div className="app">
     <Header/>
     <Body/>
	 <Footer/>
	</div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)