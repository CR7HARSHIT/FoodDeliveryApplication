import React from "react";
import ReactDOM from "react-dom/client";
import  { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Login from "./components/Login";
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
		children:
	[
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
		},
		{
			path:"/city/jaipur/:rest-name-id",
			element:<RestaurentMenu/>,
		},
		
		

	]

		,errorElement:<Error/>},

		{
			path:"/login",
			element:<Login/>,	
			errorElement:<Error/>
		}
		
	
	]
);

// Check if service workers are supported
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
	  navigator.serviceWorker
		.register(new URL('../serviceWorker.js', import.meta.url))  // New syntax
		.then((registration) => {
		  console.log('Service Worker registered:', registration);
		})
		.catch((error) => {
		  console.error('Service Worker registration failed:', error);
		});
	});
  }

  const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)

