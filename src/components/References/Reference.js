import "./References.css";
import ReferenceField from "./ReferenceField";
import Heading from "../headings/Headings";

export default function Reference(){
  return(
    <div className="reference">
      <Heading heading={"Reference Details"} />
      <ReferenceField />
    </div>
  )
}