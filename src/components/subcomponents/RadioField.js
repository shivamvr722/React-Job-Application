import { Formik, Field, useField, ErrorMessage } from "formik";

export default function RadioField(props){
  // const [field, meta] = useField(props.basic);
  return(
    <>
    <div className="radios">
      <Field type="radio" className="radiob" {...props.data} {...Field}/>
      <label className="radiol" htmlFor={props.data.title}>{props.data.title}</label>
    </div>
    <ErrorMessage {...props.data}/>
    </>
  )
}