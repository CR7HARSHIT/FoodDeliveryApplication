import { useState,useEffect } from "react"
import { filterops } from "../../utils/constants"
const Filterbutton=({
	key,
    x1,
	corder
})=>{
    
	const [btncolor,setbtncolor]=useState("white")
    useEffect(()=>{
		setbtncolor("orange")
	},["Body"])


	const handleclick = () => {
		{

			const arr = [];
			arr.push([x1,key]);
		     
			for (let i = 0; i < filterops.length; i++) {
			  if (filterops[i][0] == x1) continue;
			  arr.push([filterops[i][0],filterops[i][1]]);
			}
			console.log(arr)
			corder(arr)
		}
	  };	

	
	return (
		<div className="filter">
           <button className="filter-btn" style={{ backgroundColor: btncolor }} onClick={
			handleclick
		   }>{x1}</button>
		</div>
	)
}
export default Filterbutton;