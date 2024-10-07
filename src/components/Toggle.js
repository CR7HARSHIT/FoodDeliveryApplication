import {useState} from "react";
const Toggle=(props)=>{
    const [clickstatus,setclickstatus]=useState(false);
	const {
		heading,
		arrobj
	}=props
	return(
	<div className="Toggle">
      <div className="Toggle-div" onClick={()=>{
		setclickstatus(!clickstatus);
	  }}>
		<h4>{heading}({arrobj.length})</h4>
        {(clickstatus)?<span> '▲' </span> : <span>'▼'</span>}
	  </div>
	  {
		(clickstatus?
		 arrobj.map((obj)=>{
            return(<div key={obj.card.info.id}>
				 <h2>{obj.card.info.name}</h2>
                 <h3>{obj.card.info.category}</h3>
				 <h3>Rs={(obj.card.info.finalPrice||obj.card.info.defaultPrice || obj.card.info.price)/100}</h3>
			</div>)
		 })
		: null)
	  }
	</div>
	  	  
	)
}
export default Toggle