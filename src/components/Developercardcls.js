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
	console.log(`hiring value=${hireable}`)
	return (
	<div className="developercard">
			<h2>{"Developer"}</h2>
			<img src={avatar_url}/>
			<h3>Name:<span className="dc-span">{name}</span></h3>
			<h3>Location:<span className="dc-span">{location}</span></h3>
			<h3>Age:<span className="dc-span">{21}</span></h3>
			<h3>Bio:<span className="dc-span bio">{bio}</span></h3>
			<h3>CurrentHiringStatus:<span className="dc-span">{hireable=== true ? "Availabe For Hiring" : "Unknown" }</span></h3>
			<h3>Twitter_ID:<span className="dc-span"><a href={"https://x.com/"+twitter_username}>{twitter_username}</a></span></h3>
			<h3>Github_ID:<span className="dc-span"><a href={html_url}>{"CR7HARSHIT"}</a></span></h3>
			<h3>Linkedin_ID:<span className="dc-span"><a href={"https://www.linkedin.com/in/harshvardhanrao15022004/"}>{"harshvardhanrao15022004"}</a></span></h3>
			<h3>Email:<span  className="dc-span">  <a href={`mailto:${"hr2697020@gmail.com"}`}>{"hr2697020@gmail.com"}</a></span></h3>
		</div>)
   }
}
export default Developercardcls;