import { useEffect, useState } from "react";

const useFetchCards=(status,location)=>{
   const [FetchCardsArray,setFetchCardsArray]=useState([]);
   const {latitude,longitude}=location;
   console.log(`usefetchcards triggered`)
   useEffect(()=>{
	console.log(`la::${latitude},lo::${longitude}`)
	
		if(status && (latitude!==null))
			{fetchdata();
			}
	  
	},[location])
   
   async function fetchdata() { 
	const url = encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
    const proxyUrl = `${process.env.REACT_APP_BASE_URL}/proxy?url=${url}`;
  
    let data;
    try {
        console.log("Fetch called");

        // Fetch data through the custom proxy server
        let response = await fetch(proxyUrl);
        console.log("Fetch responded");

        // Check if the response status is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON data from the response
        let x = await response.json();

        // Assuming the data is wrapped, we just directly assign it to 'data'
        data = x; // You can process 'x' if necessary based on its structure
        
        // Log the received data for debugging
        console.log("Data received from proxy:", data);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error("Error fetching data:", error);
    }
    console.log(data)
    // Set the fetched data in the React component's state
   
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