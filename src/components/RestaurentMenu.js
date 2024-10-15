import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import Toggle from "./Toggle";
import useFetchMenu from "../../utils/useFetchMenu";
import useOnlineStatus from "../../utils/useOnlineStatus";
const RestaurentMenu=()=>{
	const rest=useParams();
	const status=useOnlineStatus();
	const restid=rest['rest-name-id']
	console.log(restid)
	console.log(`statusofRM::${status}`)
	
     const stvariable=useFetchMenu(restid,status);
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
	  totalRatingsString
	 }=stvariable?.data?.cards[2]?.card?.card?.info;
	 const x=resmenu[resmenu.length-1].groupedCard?.cardGroupMap?.REGULAR.cards

	  let  index = (x.findIndex(item => item.card?.card?.title === "Top Picks"));
	  let arr;
	  if(index===-1){
		 index =x.findIndex(item => item.card?.card?.title === "Recommended")
		 if(index===-1) arr=x.slice(1,-2);
         else arr=x.slice(index,-2);
	  }
	 else  arr=x.slice(index+1,-2);
	 
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
                     <Toggle key={title+"id"} arrobj={itemCards} heading={title}/>   
				 ) : 
				 
				    <div className="catg" key={title}>  
						<h3 className="catg-heading">{title}</h3> 
					 {(categories.map((obj)=>{
						// console.log(obj)
						const {
						   title,
						   itemCards
						}=obj
						return (
							<Toggle key={title+"id"} arrobj={itemCards} heading={title}/>   
						)
					}))}
					</div>
		    }	
		)
    }</div>
)}
export default RestaurentMenu;

