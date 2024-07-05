import "./Experience.css";
import Heading from "../headings/Headings";
import { FieldArray, useFormikContext } from 'formik';
import TextFiledInputDy from "../subcomponents/TextFieldInputDy";

export default function Experience(){
  const {values} = useFormikContext();
  return(<FieldArray name="experience">
    {({ remove, push }) => (
      <div>
        <div className="expdiv">
          <Heading heading={"Experience"} />
          {values.experience.length > 0 &&
            values.experience.map((exper, index) => (
              <div className="row" key={index}>
                <TextFiledInputDy name={`experience.${index}.company`} title={"Company Name"} id="company" className="column"/>
                <TextFiledInputDy name={`experience.${index}.designation`} title={"Designation"} id="designation" className="column"/>
                <TextFiledInputDy type="date" name={`experience.${index}.fromdate`} title={"From Date"} id="fromdate" className="column"/>
                <TextFiledInputDy type="date" name={`experience.${index}.todate`} title={"To Date"} id="uniboard" className="column"/>
                <button type="button" className="btnar" onClick={() => remove(index)}> Del </button>
              </div>
            ))}
          <center>
            <button type="button" className="btnar" onClick={() => push({ company: '', designation: '', fromdate:'', todate: "" })} > Add </button>
          </center>
        </div>
      </div>
    )}
  </FieldArray>)
}