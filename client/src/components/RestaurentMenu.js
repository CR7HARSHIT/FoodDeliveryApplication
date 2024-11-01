import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Toggle from "./Toggle";
import useFetchMenu from "../../utils/useFetchMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
import star from "../../assets/staricon.png";
import { useState,useContext } from "react";
import UserLocationContext from "../../utils/UserLocationContext";
const RestaurentMenu=()=>{
	const [AKopen,setAKopen]=useState(null);
	const rest=useParams();
	const location=useContext(UserLocationContext);
	const status=useOnlineStatus();
	const restid=rest['rest-name-id']
	console.log(restid)
	console.log(`statusofRM::${status}`)
	
     const stvariable=useFetchMenu(restid,status,location);
     if(stvariable===null) return(<Shimmer/>)
		if(status===false) return(
			<>
			<h3>Loading error...</h3>
			<h3>Please Check internet Connection</h3>
			{console.log(`Compoenet RM offline  page rendering finished`)}
			</>)
     const resmenu=stvariable.data.cards;
	 //[5]?.groupedCard?.cardGroupMap?.REGULAR.cards
	 const {name,
      costForTwoMessage,
	  cuisines,
	  avgRatingString,sla,
	  totalRatingsString,
	  locality
	 }=stvariable?.data?.cards[2]?.card?.card?.info;
	 const x=resmenu[resmenu.length-1].groupedCard?.cardGroupMap?.REGULAR.cards
                   // Find indices for the specified item types
				   console.log(`Issue satrt form HERE::::::${x}`)
      let index1 = x.findIndex(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      let index2 = x.findIndex(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
      let arr=null // declared arr
      // If index2 is not found, set it to a high value to avoid issues
      if (index2 === -1) index2 = 100;

      // Ensure both indices are valid
      if (index1 === -1) index1 = 0; // Fallback if index1 is not found

      // Validate that x is an array and has enough elements
      if (Array.isArray(x) && x.length > 2) {
      // Use the smaller index as the start index for slicing
      const startIndex = Math.min(index1, index2);
      arr = x.slice(startIndex, -2); // Slicing to exclude the last two elements
     } else {
      // Handle cases where x is too short or not an array
      arr = []; // or assign an appropriate default value or error handling
    }

	 
	return(
		<div>
			<div className="mx-40 p-2 text-center font-bold">
			<h1 className="text-left text-xl  ml-40 mr-6"><pre> {name}</pre></h1>
			<div className="text-left mx-36 font-bold border border-gray-300 rounded-lg p-5 shadow-2xl">
			<span className="flex"><img className="w-[21px]" src={star}/><h3>{avgRatingString}({totalRatingsString}) &nbsp; •{costForTwoMessage}</h3></span>
			<h3>{cuisines.join(',')}</h3>
			<h3>Outlet:&nbsp;{locality}</h3>	
			<h4>{sla.slaString}</h4>
			</div>
			</div>
			{console.log("Hello")}
			<div className="mx-48" key={restid}>
              {
				
			arr.map((obj)=>
			{ 
                 const {
					title,
					categories,
					itemCards
				 }=obj.card.card
                 return ( obj.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ? (
					 <div className="mx-40 my-5 py-3 border-b-8 border-slate-300 px-5  shadow-lg cursor-pointer" key={title}>
                     <Toggle key={title+"id"} id={title+"id"} arrobj={itemCards} heading={title} clickstatus={title+"id"===AKopen ? true:false} openAK={(x)=> setAKopen(x)} currentsv={AKopen}/>
					 </div>   
				 ) : 
				 
				    (<div key={title} className="mx-40 my-5 border-b-8 border-slate-300 px-5 py-3 shadow-lg" >  
						<h3 className="font-black ">{title}</h3> 
					 {(categories.map((obj)=>{
						 
						const {
						   title,
						   itemCards
						}=obj
						return (
							<div className="my-5 py-3 border-b-2 border-slate-300 cursor-pointer">
							<Toggle key={title+"id"} id={title+"id"} arrobj={itemCards} heading={title} clickstatus={title+"id"===AKopen ? true:false} openAK={(x)=> setAKopen(x)} currentsv={AKopen}/>
							</div>   
						)
					}))}
					</div>)
		    }
		)
	}
   </div>
   {console.log("RM accordian finished")}
	</div>
)}
export default RestaurentMenu;

