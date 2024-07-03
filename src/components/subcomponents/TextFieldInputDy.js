import { Field, useField } from "formik";
import "./InputField.css"

export default function TextFiledInputDy(props){
  const [field, meta] = useField(props.name);
  return(
    <div>
      <div className="inputs">
        <div><label htmlFor={props.name}>{props.title}:&nbsp;&nbsp;</label></div>
        <div><Field {...props} {...field}/></div>
      </div>
      {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div> 
      ) : null}
    </div>
  );
}