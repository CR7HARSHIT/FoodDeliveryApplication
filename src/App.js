import React from "react";
import ReactDOM from "react-dom/client";
import  { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurentCard from "./components/RestaurentCard";
import Error from "./components/Error";
import Aboutus from "./components/AboutUs";
import Contact from "./components/Contact";


const AppLayout = () => (
	<div className="app">
		{console.log("AppLayout is working")}
     <Header/>
     <Outlet/>
	 <Footer/>
	</div>
)
const appRouter=createBrowserRouter(
	[
		{
			path:"/",
			element:<AppLayout/>,
		   children:[
			{
				path:"/",
			element:<Body/>
			},
		{
			path:"/about",
			element:<Aboutus/>,		
		},
		{
			path:"/contact",
			element:<Contact/>,
		}]

		,errorElement:<Error/>}
	]
);
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
