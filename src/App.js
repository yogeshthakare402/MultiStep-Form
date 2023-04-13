import { createContext, useState, useContext } from 'react';
import './App.css';
import Form from './Components/Form';

let formContext = createContext();

function App() {
  const [formValues,setFormValues] = useState({
    firstName:"",
    lastName : "",
    email : "",
    password : "",
    dob : "",
    gender : "",
    phoneNumber : "",
    address : "",
    educationLevel : "",
    employmentStatus : "",
    annualIncome : "",
    maritalStatus : ""
  })
  return (
    <div className="App">
      <formContext.Provider value={{formValues,setFormValues}}>
      <Form/>
      </formContext.Provider>
    </div>
  );
}

export default App;

export function UsethisContext() {
  let formContent = useContext(formContext);

  return formContent
}
