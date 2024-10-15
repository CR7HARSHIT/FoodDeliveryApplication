import { useEffect, useState } from "react";
const useFetchMenu=(restid,status)=>{
  const [object,setobject]=useState(null)
  useEffect(()=>{
	if(status) fetchdata()
  },[status])
  async function fetchdata() { 
		
   
	const url=encodeURIComponent(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=${restid}&catalog_qa=undefined&submitAction=ENTER`);
	const proxyUrl = `https://api.allorigins.win/get?url=${url}`;
  
	let dataobj;
	try {
	  console.log("fetch called");
	  let response=await fetch(proxyUrl);
	  console.log("fetch responded");
	  let jsonData=await response.json();
	  // Since the data is wrapped by the proxy, we need to parse the actual contents
	  
	  dataobj=JSON.parse(jsonData.contents);
	} catch (error) {
	  console.log(error);
	}
	
	 setobject(dataobj)
	 console.log(dataobj)
  }
  return object;
}
export default useFetchMenu;

