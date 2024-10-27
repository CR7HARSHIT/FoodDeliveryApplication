import Item from "./Item";
const Toggle=(props)=>{
    
	const {
         id
		,heading,
		arrobj,
		clickstatus,
		openAK,
		currentsv
		
	}=props
	
	return(
	
	<div>
      <div className="  mx-auto flex justify-between  " onClick={()=>{
		// console.log(`${openAK},,,${id}`)
		if(id===currentsv) openAK(null)
		else openAK(id)
	  }}>
		
		<h4 className="font-semibold pb-5">{heading}({arrobj.length})</h4>
       <div> {(clickstatus)?<span>  ∧</span> : <span>  ∨</span>}</div>
	    
	  </div>
	  
	 <div className="m-0 text-left" key={heading}>
	  {
		(clickstatus ?
		 arrobj.map((obj)=>{
			const data=obj.card.info
			
            return(<><Item itemdata={data} /></>)
		})
		: null)
		
	  }
	  
	  </div>
	  </div>
	
	  	  
	
	)
}
export default Toggle