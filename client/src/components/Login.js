import { useFormik } from "formik";
import Formschema from "../../schemas/Formschema";
const initialValues={
	name:"",
	email:"",
	password:"",
	confirmPassword:""
}
const Login=()=>{
	const  {
		values,errors,handleChange,handleBlur,handleSubmit,touched
		}=useFormik({
        initialValues:initialValues,
		validationSchema:Formschema,
		onSubmit:(values)=>{
			console.log(values)
		}
	})
	
	return (
	<div className="login-page">
	<form className="login-form" onSubmit={handleSubmit}>
      <div className="lf-item">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="name"
		  onChange={handleChange}
		  onBlur={handleBlur}
		  values={values.name}
		  autoComplete="off"
        />
		<p>{errors.name && touched.name ? errors.name: null}</p>
      </div>

      <div className="lf-item">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
		   autoComplete="off"
		  onChange={handleChange}
		  onBlur={handleBlur}
		  values={values.email}
        />
		<p>{errors.email && touched.email ? errors.email: null}</p>
      </div>

      <div className="lf-item">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password"   
		   autoComplete="off"
		  onChange={handleChange}
		  onBlur={handleBlur}
		  values={values.password}     
		/>
		<p>{errors.password && touched.password ? errors.password: null}</p>
      </div>

      <div className="lf-item">
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirmPassword"
		   autoComplete="off"
		  onChange={handleChange}
		  onBlur={handleBlur}
		  values={values.confirmPassword}
        />
		<p>{errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword: null}</p>
      </div>

      <button type="submit">Register</button>
    </form>
	</div>
	)
}
export default Login;