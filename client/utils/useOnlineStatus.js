import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [OnlineStatus,setOnlineStatus]=useState(navigator.onLine);
	useEffect(()=>{
		const handleOnline = () => {
			console.log("Online event listner triggered")
			setOnlineStatus(true);

		}
		const handleOffline = () => {
			console.log("Offline event listner triggered") 
			 setOnlineStatus(false)
		}
	
		// Add event listeners for online and offline events
		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);
	
		// Cleanup event listeners when component unmounts
		return () => {
		  window.removeEventListener('online', handleOnline);
		  window.removeEventListener('offline', handleOffline);
		};
	  
	},[]);

	return OnlineStatus;
}
export default useOnlineStatus;