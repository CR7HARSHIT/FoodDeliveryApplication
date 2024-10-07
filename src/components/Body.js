import RestaurentCard from "./RestaurentCard";
import { useEffect,useState } from "react";
import Shimmer from "./shimmer";
import { filterops } from "../../utils/constants";
import Filterbutton from "./Filterbutton";
import { Link } from 'react-router-dom';
const Body = () =>{
	  const [ListofRestaurent,setListofRestaurent]=useState([]);
	  const [textToSearch,settextToSearch]=useState("");
	  const [filterbtns,setfilterbtns]=useState(filterops);
	  
	   const handlefilterorderchnage=(neworder)=> {
		setfilterbtns(neworder)
	   }

	  useEffect(()=>{	
		fetchdata();
	    },[])

	  
		async function fetchdata() { 
			const url = encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
			const proxyUrl = `https://api.allorigins.win/get?url=${url}`;
		  
			let data;
			try {
			  console.log("fetch called");
			  let response = await fetch(proxyUrl);
			  console.log("fetch responded");
			  let jsonData = await response.json();
			  // Since the data is wrapped by the proxy, we need to parse the actual contents
			  data = JSON.parse(jsonData.contents);
			} catch (error) {
			  console.log(error);
			}
			
			console.log(data); 
			console.log(data?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants)
			setListofRestaurent(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants); 
		  }
		  
	  

	   return( 
	<div className="body">
     <div className="search-bar">
		<input className="search-box" type="text" placeholder="Search restaurent here" onChange={(e)=>{
         settextToSearch(e.target.value)
		 
		}} value={textToSearch}></input>
		<button className="search-button" onClick={()=>{
			const list=json.data?.cards[1].card.card?.gridElements.infoWithStyle.restaurants
			const ans=list.filter((rc)=>(rc.info.name.toLocaleLowerCase().replace(/\s+/g, '').includes(textToSearch.toLocaleLowerCase().replace(/\s+/g, ''))))
			textToSearch.length===0 ? setListofRestaurent(json.data?.cards[1].card.card?.gridElements.infoWithStyle.restaurants):setListofRestaurent(ans);
			
		}}><i class="fa-solid fa-magnifying-glass"></i> <span> Search</span></button>
	 </div>
	 <div className="filtering">
		{filterbtns.map((btnname)=>{
			return (<Filterbutton
				key={btnname[1]}
				x1={btnname[0]}
				corder={handlefilterorderchnage}  
				filterops={filterbtns}  
			  />)
		})}
	 </div>
	{ListofRestaurent.length===0 &&textToSearch.length!==0 ? <h3>No Results Found </h3>:
	 ListofRestaurent.length===0 &&textToSearch.length===0 ? <Shimmer/>:
	 <div className="restaurent-conatiner">
      {ListofRestaurent.map((value) => (<Link className="Link-RC"key={value.info.id} to={"/city/jaipur/"+(value?.info?.id)}><RestaurentCard  x1={value} corder={handlefilterorderchnage} /></Link>))}
   </div>}
     
	</div>
  )};

export default Body;