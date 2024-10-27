import CDNlinks from "../../utils/constants";
import star from "../../assets/staricon.png";
const RestaurentCard=(protos) =>{
	const {cloudinaryImageId,
		name,
		avgRating,
		costForTwo,
		cuisines	
     }=protos.x1.info
	 const Xrating="NEW"
	
	return (<div className="m-4 p-4 w-[275px] bg-gray-200 rounded-lg transform transition-all duration-300 hover:scale-95 hover:translate-y-2">
		
		<img className="rounded-lg " src={CDNlinks+cloudinaryImageId} alt="RC-image"/>
		
		
	<h3 className="font-bold py-2 text-lg">{name}</h3>
		<span className="RC-info">
		<div className="flex">
		<h4><img className="w-[21px]" src={star}/></h4>
		<h4>{"   "+(typeof avgRating === "undefined" ? Xrating : avgRating)} </h4>
		</div>
		<h4> {costForTwo}</h4>
		<h4 className="cuisine">{cuisines.join(", ")}</h4>
		</span>
	</div>)
}
export default RestaurentCard;

export const AddToppick=(RestaurentCard)=>{

	return (props)=>{

		return (
            <div className="relative  group ">
			<label className="absolute left-2 z-10 bg-black text-white text-xs font-bold px-2 py-1 rounded-full transform transition-transform duration-300  group-hover:scale-80  group-hover:translate-x-4 group-hover:translate-y-4">Top Pick</label>
			<RestaurentCard {...props}/>
			</div>
		)
	}

}