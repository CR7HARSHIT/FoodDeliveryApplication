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
	
	return (<div className="restaurent-card">
		
		<img className="RC-image" src={CDNlinks+cloudinaryImageId} alt="RC-image"/>
		
	<h3>{name}</h3>
		<span className="RC-info">
		
		<h4><img className="star-image" src={star}/>{" "+(typeof avgRating === "undefined" ? Xrating : avgRating)} &bull; {costForTwo}</h4>
		<h4> </h4>
		<h4 className="cuisine">{cuisines.join(", ")}</h4>
		</span>
	</div>)
}
export default RestaurentCard;