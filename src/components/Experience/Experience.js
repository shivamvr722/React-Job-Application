import "./Experience.css";
import ExpericeField from "./ExperienceField";
import Heading from "../headings/Headings";
import { FieldArray, useFormikContext } from 'formik';

export default function Experience(){
  const {values} = useFormikContext();
  return(<FieldArray name="experience">
    {({ remove, push }) => (
      <div>
        {values.experience.length > 0 &&
          values.experience.map((exper, index) => (
            <div className="row" key={index}>
              <ExpericeField />
              <div className="buttonx">
                <button type="button" className="btnar" onClick={() => remove(index)}> X </button>
              </div>
            </div>
          ))}
        <center>
          <button type="button" className="btnar" onClick={() => push({ company: '', designation: '', fromdate:'', todate: "" })} > Add </button>
        </center>
      </div>
    )}
  </FieldArray>)
  return(
    <div className="experienceDiv">
      <Heading heading={"Experice Details"} />
      <ExpericeField />
      <ExpericeField />
      <ExpericeField />
      <ExpericeField />
    </div>
  )
}