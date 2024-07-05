import "./Education.css";
import {useState} from 'react';
import TextFiledInputDy from "../subcomponents/TextFieldInputDy";
import Heading from "../headings/Headings";
import { Field, FieldArray, useFormikContext } from 'formik';


export default function Education(props){
  const {values} = useFormikContext();
  return(
  <>
  <div className="edudetails">
  <Heading heading={"Education Details"} />
  <FieldArray name="education">
    {({ remove, push }) => (
      <div>
        {values.education.length > 0 &&
          values.education.map((edu, index) => (
            <div className="row" key={index}>
              <TextFiledInputDy name={`education.${index}.boarduni`} title={"Uiversiy/board"} id="uniboard"  className="column"/>
              <TextFiledInputDy name={`education.${index}.course`} title={"Course"} id="uniboard"  className="column"/>
              <TextFiledInputDy name={`education.${index}.passyear`} title={"Pass Year"} id="uniboard"  className="column"/>
              <TextFiledInputDy name={`education.${index}.percentage`} title={"Percentage"} id="uniboard"  className="column"/>
              <div>
                <button type="button" className="btnar" onClick={() => remove(index)}> Del </button>
              </div>
            </div>
          ))}
        <center>
          <button type="button" className="btnar" onClick={() => push({ boarduni: '', course: '', passyear: '', percentage:'' })} > Add </button>
        </center>
      </div>
    )}
    </FieldArray>
    </div>
    </>
  )
}


// {console.log(Object.keys(edu))}
//               <div>
//                 <label>University/Board: </label>
//                 <Field name={Object.keys(edu)[0] + index}/>
//               </div>
//               <div>
//                 <label>Course: </label>
//                 <Field name={Object.keys(edu)[1] + index}/>
//               </div>
//               <div>
//                 <label>Pass Year: </label>
//                 <Field name={Object.keys(edu)[2] + index}/>
//               </div>
//               <div>
//                 <label>Percentage: </label>
//                 <Field name={Object.keys(edu)[3] + index}/>
//               </div>