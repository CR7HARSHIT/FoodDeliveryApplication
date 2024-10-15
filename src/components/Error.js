import { useRouteError } from "react-router-dom";
const Error=()=>{
	const err=useRouteError()
	console.log(err)
	return (
		<div>
			<h1>Errorpage hai bhai</h1>
			<h3>{err.data}</h3>
		</div>
	)
}
export default Error;