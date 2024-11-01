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
import UserLocationContext from "../utils/UserLocationContext";
import { useState,useEffect } from "react";
import store from "./app/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart"
const AppLayout = () => {
	const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if geolocation is supported
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        // Get the user's current position on initial render
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
            },
            (err) => {
                setError("Failed to retrieve location: " + err.message);
            }, { enableHighAccuracy: true }
        );
    }, []); // Empty dependency array ensures it runs only once on mount
   

  return (	
  <div  className="">
	{console.log("AppLayout is working")}
	 <Provider store={store}>
	 <UserLocationContext.Provider value={location}>
     <Header/>
     <Outlet/>
	 <Footer/>
	 </UserLocationContext.Provider>
	 </Provider>
	</div>)
}
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
			path:"/city/:rest-name-id",
			element:<RestaurentMenu/>,
			
		},
		{
			path:"/cart",
			element:<Cart/>
		}
		
		

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

