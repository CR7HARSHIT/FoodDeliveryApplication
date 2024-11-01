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
		<div className="max-w-3xl mx-auto p-8 bg-slate-100 rounded-lg shadow-xl space-y-6">
  <div className="flex flex-col items-center">
    <img 
      src={avatar_url} 
      alt="Developer Avatar" 
      className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md mb-4"
    />
    <h2 className="text-3xl font-bold text-gray-800">Developer Profile</h2>
    <p className="text-gray-600 text-center mt-2">Welcome to my profile! Here’s a bit about me.</p>
  </div>
  
  <div className="space-y-4">
    <div className="flex justify-between">
      <span className="font-semibold">Name:</span>
      <span className="text-gray-700">{name}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Location:</span>
      <span className="text-gray-700">{location}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Age:</span>
      <span className="text-gray-700">21</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Bio:</span>
      <span className="text-gray-700">{bio}</span>
    </div>
    <div className="flex justify-between">
      <span className="font-semibold">Hiring Status:</span>
      <span className={`text-${hireable ? "green-500" : "gray-500"}`}>
        {hireable ? "Available For Hiring" : "Not Available"}
      </span>
    </div>
  </div>

  <div className="border-t border-gray-300 pt-4">
    <h3 className="text-lg font-semibold">Connect with me:</h3>
    <div className="space-y-2 mt-2">
      <div className="flex justify-between">
        <span className="font-semibold">Twitter:</span>
        <span className="text-blue-500">
          <a href={`https://x.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">{twitter_username}</a>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">GitHub:</span>
        <span className="text-gray-700">
          <a href={html_url} target="_blank" rel="noopener noreferrer">CR7HARSHIT</a>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">LinkedIn:</span>
        <span className="text-blue-500">
          <a href="https://www.linkedin.com/in/harshvardhanrao15022004/" target="_blank" rel="noopener noreferrer">harshvardhanrao15022004</a>
        </span>
      </div>
      <div className="flex justify-between">
        <span className="font-semibold">Email:</span>
        <span className="text-red-500">
          <a href="mailto:hr2697020@gmail.com">hr2697020@gmail.com</a>
        </span>
      </div>
    </div>
  </div>
</div>

	  

)
	
   }
}
export default Developercardcls;