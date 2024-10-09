import React from "react" 
class Usercardcls extends React.Component
{
   render(){
	const {
		name,
		location,
		age
	}=this.props
	return (<div className="usercard">
			<h2>ID:{"CLASS BASED REACT COMPONENT"}</h2>
			<h3>Name:{name}</h3>
			<h3>Location:{location}</h3>
			<h3>Age:{age}</h3>
		</div>)
   }
}
export default Usercardcls;