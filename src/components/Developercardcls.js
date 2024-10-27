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
		<div className="developercard max-w-md mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300 border border-gray-200">
	<div className="p-6 text-white">
		<h2 className="text-3xl font-bold text-center mb-4">Developer</h2>
		<div className="flex justify-center mb-6">
			<img src={avatar_url} alt="Developer Avatar" className="w-32 h-32 rounded-full border-4 border-white shadow-md transform transition-transform hover:scale-110 duration-300"/>
		</div>
		<div className="space-y-4">
			<h3 className="text-lg font-semibold">Name: <span className="dc-span">{name}</span></h3>
			<h3 className="text-lg font-semibold">Location: <span className="dc-span">{location}</span></h3>
			<h3 className="text-lg font-semibold">Age: <span className="dc-span">21</span></h3>
			<h3 className="text-lg font-semibold">Bio: <span className="dc-span bio">{bio}</span></h3>
			<h3 className="text-lg font-semibold">
				Current Hiring Status: <span className={`dc-span ${hireable ? "text-green-300" : "text-gray-300"}`}>{hireable ? "Available For Hiring" : "Unknown"}</span>
			</h3>
			<h3 className="text-lg font-semibold">
				Twitter: <span className="text-blue-300 dc-span"><a href={`https://x.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">{twitter_username}</a></span>
			</h3>
			<h3 className="text-lg font-semibold">
				GitHub: <span className="text-gray-300 dc-span"><a href={html_url} target="_blank" rel="noopener noreferrer">CR7HARSHIT</a></span>
			</h3>
			<h3 className="text-lg font-semibold">
				LinkedIn: <span className="text-blue-300 dc-span"><a href="https://www.linkedin.com/in/harshvardhanrao15022004/" target="_blank" rel="noopener noreferrer">harshvardhanrao15022004</a></span>
			</h3>
			<h3 className="text-lg font-semibold">
				Email: <span className="text-red-300 dc-span"><a href="mailto:hr2697020@gmail.com">hr2697020@gmail.com</a></span>
			</h3>
		</div>
	</div>
</div>
)
	
   }
}
export default Developercardcls;