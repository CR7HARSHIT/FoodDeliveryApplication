import {useState} from "react";
const Toggle=()=>{
    const [clickstatus,setclickstatus]=useState(false);
	return(
	<div className="Toggle">
      <div className="Toggle-div" onClick={()=>{
		setclickstatus(!clickstatus);
	  }}>
		<h4>Recommended(20)</h4>
        {(clickstatus)?<span> '▲' </span> : <span>'▼'</span>}
	  </div>
	  {
		(clickstatus?
		<ul>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
			<li>Item1</li>
		</ul> 
		: null)
	  }
	</div>
	  	  
	)
}
export default Toggle