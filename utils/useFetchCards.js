import { useEffect, useState } from "react";
const useFetchCards=(status)=>{
   const [FetchCardsArray,setFetchCardsArray]=useState([]);
   useEffect(()=>{
	if(status){
		fetchdata();}
	},[status])

   async function fetchdata() { 
	const url=encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
	const proxyUrl=`https://thingproxy.freeboard.io/fetch/${url}`;
  
	let data;
	try {
	  console.log("fetch called");
	  let response=await fetch(proxyUrl);
	  console.log("fetch responded");
	  console.log(response)
	  let x=await response.json();
	  // Since the data is wrapped by the proxy, we need to parse the actual contents
	  data =  x;
	} catch (error) {
	  console.log(error);
	}
	console.log(data);
	// let arr= data.data.success.cards;
	// for(let i=0;i<(arr.length);i++){
	// 	const {restaurants}=data?.data.success.cards[i].gridWidget.gridElements.infoWithStyle
	// 	if(typeof restaurants!== undefined)
	// 	{
	// 		setFetchCardsArray(restaurants);
	// 		console.log(restaurants)
	// 		break;
	// 	}
	// }
	console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
	 setFetchCardsArray(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
	
  }
   return FetchCardsArray;
}

export default useFetchCards;