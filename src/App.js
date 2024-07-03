import './App.css';
import BasicDetails from './components/BasicDetails/BasicDetails';
import Education from './components/EducationDetails/Education';
import Experience from './components/Experience/Experience';
import Language from './components/Languages/Languages';
import Technology from './components/Technologies/Technologies';
import Reference from './components/References/Reference';
import Preference from './components/Preferences/Preference';
import { useState, createContext, useContext } from "react";
import { Form, Formik } from 'formik';
import { validationSchema } from './validationSchema';


const steps = ["detail", "education", "expreience", "language", "technology", "reference", "prefrence"]


function App() {
  const [formStep, setFormStep] = useState(0);
  const currentValidationSchema = validationSchema[formStep];
  const isLastStep = formStep === steps.length - 1;

  function handleSubmit(values, actions) {
    if (isLastStep) {
      alert(
        `Dear ${values.firstName}, Your form has been submitted successfully!`
      );
      console.log(values, "data");
    } else {
      setFormStep((step) => step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const initialValue = {
    // basic
    firstname: "",
    lastname: "",
    designation: "",
    email: "",
    phone: "",
    dob: "",
    city: "",
    address: "",
    address2: "",
    zipcode: "",
    name: "",
    relation: "",
    gender: "",

    // education
    education: [{boarduni: "", course: "", passyear: "", percentage: ""}],

    // experience
    experience: [{company: "", designation: "", fromdate: "", todate: ""}],

    //tech
    tjava: "",
    tpython: "",
    tjs: "",
    java: "",
    python: "",
    js: "",

    //lang
    hindi:"",
    hread:"",
    hwrite:"",
    hspeak:"",

    english:"",
    eread:"",
    ewrite:"",
    espeak:"",

    gujarati:"",
    gread:"",
    gwrite:"",
    gspeak:"",


    //relation
    rname: "",
    rcontact: "",
    rrelation: "",

    // pref
    noticeperiod: "",
    expectecctc: "",
    actualctc: "",
  }
  
  function renderStepContent(step) {
    switch (step) {
      case 0:
        return (
          <div className='container'>
            <BasicDetails />
          </div>
        );
      case 1:
        return <Education />
      case 2:
        return <Experience />
      case 3:
        return <Language />
      case 4:
        return <Technology />
      case 5:
        return <Reference />
      case 6:
        return <Preference />
      default:
        return <div>Not Found</div>;
    }
  }

  const changePrevStateHandler = () => {
    setFormStep((step) => step - 1);
  }

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validationSchema={currentValidationSchema}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {renderStepContent(formStep)}
          <div className="App">
            {formStep !== 0 ? (
              <div>
                <div className='btns'>
                  <center>
                    <button onClick={changePrevStateHandler} className='prevnext' type='button'>Prev</button>
                    <button type="submit" className='prevnext'>
                      {isLastStep ? "Submit" : "Next"}
                    </button>
                  </center>
                  </div>
                </div>
            ) : 
            (
              <div ml={4} position="absolute" left="550px">
                <button type="submit" className="prevnext">Next</button>
              </div> 
            )}
          </div>
        </form>)}
    </Formik>
  );
}

export default App;
