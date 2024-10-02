import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurentCard from "./components/RestaurentCard";





const AppLayout = () => (
	<div className="app">
		{console.log("AppLayout is working")}
     <Header/>
     <Body/>
	 <Footer/>
	</div>
)

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)

