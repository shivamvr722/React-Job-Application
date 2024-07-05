import "./BasicDetails.css"
import InputField from "../subcomponents/InputField";
import basicDetailsFieldFeed from "./basicDetailFieldFeed";
import RadioField from "../subcomponents/RadioField";
import Heading from "../headings/Headings";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { State, City }  from 'country-state-city';
import { useState } from "react"; 



function Relationship(){
  return(
    <div>
      <label htmlFor="relation">Relationship: </label>
      <Field as="select" name="relation" id="relation">
        <option value="single">Single</option>
        <option value="married">Married</option>
      </Field>
    </div>
  )
}

const radioData = [
  {
    "title": "Male",
    "value": "male",
    "name": "gender",
  },
  {
    "title": "Female",
    "value": "female",
    "name": "gender",
  },
  {
    "title": "Other",
    "value": "other",
    "name": "gender",
  },
]


let sState = "";
const displayCities = (cities, selectState) => {
  if(Array.isArray(cities) && selectState){
    sState = selectState;
    return cities.map((city, i)=>{
      return <option key={i} value={city.isoCode}>{city.name}</option>
    })
  }
}

let MappedFilterdCities = "";
const states = State.getStatesOfCountry("IN");

const mappedRadioCollection = radioData.map((obj, i)=>{
  return <RadioField data={obj} key={obj.title + i} />
})

const mappedStates = states.map((state, i) => {
  return <option key={i} value={state.isoCode}>{state.name}</option>
})




const States = () => {
  const {value, setFieldValue} = useFormikContext();
  const chooseStateHandler = (event) => {
    const stateSelected = event.target.value;
    let cities = City.getCitiesOfState("IN", stateSelected);
    MappedFilterdCities = displayCities(cities, stateSelected)
    setFieldValue("states", stateSelected)
  }


  return (
   <div>
      <label htmlFor="states">State: </label>
      <Field as="select" id="states" name="states" onChange={chooseStateHandler}>
        {mappedStates}
      </Field>
   </div>)
}


const Cities = () => {
  return (
  <div>
    <label>City: </label>
    <Field as="select" id="city" name="city">
      {MappedFilterdCities}
    </Field>
  </div>
  )
}

export default function BasicDetails(){
  const basicInfoCollectionText = basicDetailsFieldFeed();

  const mappedCollection = basicInfoCollectionText.map((basic, i)=>{
    return <InputField basic={basic} key={basic.title  + 1}/>;
  })

  return(
    <div className="fields">
      <Heading heading={"Basic Details"} />
      {mappedCollection}
      <div className="relation">
        <Relationship />
      </div>
      <div className="citystates">
        <div className="states">
          <States />
        </div>
        <div className="cities">
          <Cities />
        </div>
      </div>
      <div className="radios">
        {mappedRadioCollection}
      </div>
      <div className="error">
          <ErrorMessage name="gender" />
      </div>
    </div>
  );
}