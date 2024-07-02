import "./headings.css"

export default function Heading(props){
  return(
    <div className="headingdiv">
      <center>
        <h3 className="heading">{props.heading}</h3>
      </center>
    </div>
  )
}


