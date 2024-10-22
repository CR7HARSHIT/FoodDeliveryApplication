import RestaurentCard,{AddToppick} from "./RestaurentCard";
import Shimmer from "./shimmer";
import { filterops } from "../../utils/constants";
import Filterbutton from "./Filterbutton";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchCards from "../../utils/useFetchCards";
import { useState } from "../../node_modules/react";
import { useEffect } from "react";
const Body = () =>{
	const status=useOnlineStatus();
	  const ListofRestaurent=useFetchCards(status);
	  console.log(`listofRestaurent::${ListofRestaurent}`)
	  const [listfordisplay,setlistfordisplay]=useState([]);
	  console.log(`listofdisplay::${listfordisplay}`);
	  const [textToSearch,settextToSearch]=useState("");
	  const [filterbtns,setfilterbtns]=useState(filterops);
	  const HocofRc=AddToppick(RestaurentCard)
	   const handlefilterorderchnage=(neworder)=> {
		setfilterbtns(neworder)
	   }
	   useEffect(()=>{
          setlistfordisplay(ListofRestaurent)
	   },[ListofRestaurent])

	   if(status===false) return(
		<>
		<h3>Loading error...</h3>
		<h3>Please Check internet Connection</h3>
		{console.log(`Compoenet RM offline  page rendering finished`)}
		</>)
	   return( 
	<div className="body">
     <div className="search-bar">
		<input className="search-box" type="text" placeholder="Search restaurent here" onChange={(e)=>{
         settextToSearch(e.target.value)
		 
		}} value={textToSearch}></input>
		<button className="search-button" onClick={()=>{
			const list=ListofRestaurent
			const ans=list.filter((rc)=>(rc.info.name.toLocaleLowerCase().replace(/\s+/g, '').includes(textToSearch.toLocaleLowerCase().replace(/\s+/g, ''))))
			textToSearch.length===0 ? setlistfordisplay(ListofRestaurent):setlistfordisplay(ans);
			
		}}><i className="fa-solid fa-magnifying-glass"></i> <span> Search</span></button>
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
	{listfordisplay.length===0 &&textToSearch.length!==0 ? <h3>No Results Found </h3>:
	 ListofRestaurent.length===0  ? <Shimmer/>:
	 <div className="restaurent-conatiner">
      {listfordisplay.map((value) => (<Link className="Link-RC"key={value.info.id} to={"/city/jaipur/"+(value?.info?.id)}> {(value?.info?.avgRating>4.4)?<HocofRc  x1={value} corder={handlefilterorderchnage}/> :<RestaurentCard  x1={value} corder={handlefilterorderchnage} />}</Link>))}
   </div>}
     
	</div>
  )};

export default Body;