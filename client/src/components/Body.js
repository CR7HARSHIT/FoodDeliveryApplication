import RestaurentCard,{AddToppick} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchCards from "../../utils/useFetchCards";
import { useEffect,useState,useContext } from "react";
import UserLocationContext from "../../utils/UserLocationContext";

const Body = () =>{
	const status=useOnlineStatus();
    const location=useContext(UserLocationContext);
	  const ListofRestaurent=useFetchCards(status,location);
    console.log()
	  console.log(`listofRestaurent::${ListofRestaurent}`)
	  const [listfordisplay,setlistfordisplay]=useState([]);
	  console.log(`listofdisplay::${listfordisplay}`);
	  const [textToSearch,settextToSearch]=useState("");
	  const HocofRc=AddToppick(RestaurentCard)
	   const handlefilterorderchnage=(neworder)=> {
		setfilterbtns(neworder)
	   }
	   useEffect(()=>{
          setlistfordisplay(ListofRestaurent)
	   },[ListofRestaurent])

	   if(status===false) return(
		<div className="h-[500px] text-center">
    <div className="m-20 font-extrabold text-3xl">
		<h3 >Loading error...</h3>
		<h3>Please Check internet Connection</h3>
    </div>
		{console.log(`Compoenet RM offline  page rendering finished`)}
		</div>)
	   return( 
	<div className="body">
     <div className="m-4 p-4 bg-isilver shadow-lg">
  <input 
    className="search-box p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" 
    placeholder="Search restaurant here" 
    onChange={(e) => settextToSearch(e.target.value)} 
    value={textToSearch}
  />
  <button 
    className=" px-4 py-2  m-4 border border-gray-400  rounded-lg hover:bg-orange transition-all" 
    onClick={() => {
      const list = ListofRestaurent;
      const ans = list.filter((rc) => 
        rc.info.name
          .toLocaleLowerCase()
          .replace(/\s+/g, '')
          .includes(textToSearch.toLocaleLowerCase().replace(/\s+/g, ''))
      );
      textToSearch.length === 0 ? setlistfordisplay(ListofRestaurent) : setlistfordisplay(ans);
    }}
  > 
    <span>Search</span>
  </button>
</div>
	{listfordisplay.length===0 &&textToSearch.length!==0 ? <h3>No Results Found </h3>:
	 ListofRestaurent.length===0  ? <Shimmer/>:
	 <div className="flex flex-wrap">
      {listfordisplay.map((value) => (<Link className="Link-RC"key={value.info.id} to={"/city/"+(value?.info?.id)}> {(value?.info?.avgRating>4.4)?<HocofRc  x1={value} corder={handlefilterorderchnage}/> :<RestaurentCard  x1={value} corder={handlefilterorderchnage} />}</Link>))}
   </div>}
	</div>
  )};

export default Body;