import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import Toggle from "./Toggle";
const RestaurentMenu=()=>{
	const rest=useParams();
	const restid=rest['rest-name-id']
	console.log(restid)
     const [stvariable,setstvariable]=useState(null);
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
		
		 setstvariable(dataobj)
		 console.log(dataobj)
	  }
	 
    useEffect(()=>{
     fetchdata();
	},[])


     if(stvariable===null) return(<Shimmer/>)
     const resmenu=stvariable.data.cards;
	 //[5]?.groupedCard?.cardGroupMap?.REGULAR.cards
	 const {name,
      costForTwoMessage,
	  cuisines,
	  avgRatingString,sla,
	  totalRatingsString
	 }=stvariable?.data?.cards[2]?.card?.card?.info;
	 const x=resmenu[resmenu.length-1].groupedCard?.cardGroupMap?.REGULAR.cards
	 let index = x.findIndex(item => item.card?.card?.title === "Recommended");
	 let arr=x.slice(index,-2);
	return(
		<div className="rest-menu">
			<h1>{name}</h1>
			<h3>{costForTwoMessage}</h3>
			<h3>{cuisines}</h3>
			<h3>{avgRatingString}({totalRatingsString})</h3>	
			<h4>{sla.slaString}</h4>
              {
			arr.map((obj)=>
			{
                 const {
					title,
					categories,
					itemCards
				 }=obj.card.card
                 return ( itemCards!== undefined) ? (
                     <Toggle arrobj={itemCards} heading={title}/>   
				 ) : 
				 
				         
					 (categories.map((obj)=>{
						console.log(obj)
						const {
						   title,
						   itemCards
						}=obj
						return (
							<Toggle arrobj={itemCards} heading={title}/>   
						)
					}))
		    }	
		)
    }</div>
)}
export default RestaurentMenu;

// PRICE:{"RS"+(finalPrice|| defaultPrice || price)/100}