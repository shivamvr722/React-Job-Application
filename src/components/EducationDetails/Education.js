import "./Education.css";
import {useState} from 'react';
import EducationField from "./EducationField";
import Heading from "../headings/Headings";
import { FieldArray, useFormikContext } from 'formik';


export default function Education(props){
  const {values} = useFormikContext();
  return(<FieldArray name="education">
    {({ remove, push }) => (
      <div>
        {values.education.length > 0 &&
          values.education.map((edu, index) => (
            <div className="row" key={index}>
              <EducationField />
              <div className="buttonx">
                <button type="button" className="btnar" onClick={() => remove(index)}> X </button>
              </div>
            </div>
          ))}
        <center>
          <button type="button" className="btnar" onClick={() => push({ course: '', passyear: '', percentage:'', boarduni: "" })} > Add </button>
        </center>
      </div>
    )}
    </FieldArray>)
}