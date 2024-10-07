import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
const RestaurentMenu=()=>{
	const rest=useParams();
	const restid=rest['rest-name-id']
	console.log(restid)
     const [itemcard,setitemcard]=useState(null);
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
		
		 setitemcard(dataobj)
		 console.log(dataobj)
		 console.log(dataobj.data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards)

	  }
	 
    useEffect(()=>{
     fetchdata();
	},[])


     if(itemcard===null) return(<Shimmer/>)
     const resmenu=itemcard.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards;
	
	return(
		<div className="rest-menu">
			<h1>Restaurent-name::{itemcard?.data?.cards[0]?.card?.card?.text} </h1>
			<h3>R-menu</h3>
			
				
              {  resmenu.map((obj)=>{
				 const {
					name,
					id,
					category,
					description,
					finalPrice,
					defaultPrice,
					price
				       }=obj.card.info

                    return (
						<div key={id} >
						<ul>
							<li>CATEGORY:{category}</li>
							<li>ITEM NAME:{name}</li>
							<li>DESCRIPTION:{description}</li>
							<li>PRICE:{"RS"+(finalPrice|| defaultPrice || price)/100}</li>
                            
						</ul>
						</div>
					)
				})
			} 

			
		</div>
	)
}
export default RestaurentMenu;