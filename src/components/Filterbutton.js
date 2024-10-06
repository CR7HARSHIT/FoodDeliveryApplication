import { useState,useEffect } from "react"
import { filterops } from "../../utils/constants"
const Filterbutton=({
	
    x1,
	corder
})=>{
    
	const [btncolor,setbtncolor]=useState("white")
    

	const handleclick = () => {
		{

           btncolor==="white"?setbtncolor("orange"):setbtncolor("white")
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