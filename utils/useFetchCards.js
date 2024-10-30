import { useEffect, useState } from "react";

const useFetchCards=(status,location)=>{
   const [FetchCardsArray,setFetchCardsArray]=useState([]);
   const {latitude,longitude}=location;
   console.log(`usefetchcards triggered`)
   useEffect(()=>{
	console.log(`la::${latitude},lo::${longitude}`)
	
		if(status && (latitude!==null))
			{fetchdata()
			}
	  
	},[location,status])
   
   async function fetchdata() { 
	const url=encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
		// const proxyUrl=`https://thingproxy.freeboard.io/fetch/${url}`;
  
	let data;
	try {
	  console.log("fetch called");
	  let response=await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
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
	const cardsArray=data?.data?.cards
	console.log(cardsArray)

	for(let i=0;i<cardsArray.length;i++ )
	{
		const restaurantArray=cardsArray[i]?.card?.card?.gridElements?.infoWithStyle.restaurants
		if(restaurantArray=== undefined) continue;
		setFetchCardsArray(restaurantArray)
		console.log(`${restaurantArray}${i}`)
		break;
	}
	 
	
  }
   return FetchCardsArray;
}

export default useFetchCards;