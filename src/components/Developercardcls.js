import React from "react" 
class Developercardcls extends React.Component
{
	constructor()
	{
		super();
       this.state={
		  data:{
			name:"",
			location:"",
			bio:"",
			twitter_username:"",
			hireable:"",
			avatar_url:"",
			html_url:""
		  }
	   }
	}
	async componentDidMount(){
        let Apidata=await fetch("https://api.github.com/users/CR7HARSHIT")
		let json=await Apidata.json()
		console.log(json)
		this.setState({
			data:json
		})
	}
   render(){
	const {
		name,
			location,
			bio,
			twitter_username,
			hireable,
			avatar_url,
			html_url
	}=this.state.data;
	return (
	<div className="usercard">
			<h2>{"Developer"}</h2>
			<img src={avatar_url}/>
			<h3>Name:{name}</h3>
			<h3>Location:{location}</h3>
			<h3>Age:{21}</h3>
			<h3>Bio:{bio}</h3>
			<h3>Twitter_username:{twitter_username}</h3>
			<h3>CurrentHiringStatus:{hireable}</h3>
			<h3>Github_ID:<a href={html_url}/></h3>
		</div>)
   }
}
export default Developercardcls;