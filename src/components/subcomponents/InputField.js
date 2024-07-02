import { Field, useField } from "formik";
import "./InputField.css"

export default function InputField(props){
  const [field, meta] = useField(props.basic);
  return(
    <div>
      <div key={props.basic.title} className="inputs">
        <div><label htmlFor={props.basic.title}>{props.basic.title}:&nbsp;&nbsp;</label></div>
        <div><Field type={props.basic.type} id={props.basic.title} name={props.basic.name} placeholder={props.basic.title} {...field}/></div>
      </div>
      {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}