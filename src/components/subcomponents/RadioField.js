export default function RadioField(props){
  return(
    <div className="radios">
      <input type="radio" className="radiob" name={props.data.name} id={props.data.name + props.data.title}/>
      <label className="radiol" htmlFor={props.data.name + props.data.title}>{props.data.title}</label>
    </div>
  )
}