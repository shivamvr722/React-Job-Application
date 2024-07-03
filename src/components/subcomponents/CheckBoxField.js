import { Field } from "formik";

export default function CheckboxField(props){
  return(
    <div className="checkbox">
      <Field type="checkbox" name={props.data.name} id={props.data.name} className="checkb"/>
      <label htmlFor={props.data.name} className="checkl">{props.data.title}</label>
    </div>
  )
}