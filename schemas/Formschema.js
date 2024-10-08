import * as Yup from "yup"
const Formschema=Yup.object({
	name:Yup.string().min(4).max(25).required("Enter an valid Name"),
	email:Yup.string().email().required("Enter an Valid Mail"),
	password:Yup.string().min(6).required("Enter at least 6 characters"),
	confirmPassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must match")

});
export default Formschema;