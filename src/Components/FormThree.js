import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tracker from './Tracker';
import { UsethisContext } from '../App';


function FormThree() {
    let navigate = useNavigate();
    const {formValues,setFormValues} = UsethisContext();
    // console.log(formValues)
    const changeValues = (e)=>{
        // console.log(e.target.name)
        // console.log(e.target.value)
        setFormValues({...formValues,[e.target.name]:e.target.value})
    };

    return (
        <form className='form'>
            <Tracker />

            <div className="form-group">
                <label htmlFor="educationLevel">Education Level</label>
                <select id="educationLevel" name='educationLevel' className="form-control" onChange={(e)=>{changeValues(e)}}>
                    <option>Choose...</option>
                    <option value={"Under-Graduate"}>Under-Graduate</option>
                    <option value={"Diploma"}>Diploma</option>
                    <option value={"Bachelor's degree"}>Bachelor's degree</option>
                    <option value={"Master's degree"}>Master's degree</option>
                    <option value={"Doctorate"}>Doctorate</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="employmentStatus">Employment Status</label>
                <select name='employmentStatus' id="employmentStatus" className="form-control" onChange={(e)=>{changeValues(e)}}>
                    <option>Choose...</option>
                    <option value={"Worker"}>Worker</option>
                    <option value={"Employee"}>Employee</option>
                    <option value={"Self-Employed"}>Self-Employed</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="annualIncome">Annual Income</label>
                <input type="text" value={formValues.annualIncome} name='annualIncome' className="form-control" id="annualIncome" placeholder="Enter Annual Income in Rs." onChange={(e)=>{changeValues(e)}}/>
            </div>
            <div className="form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select name='maritalStatus' id="maritalStatus" className="form-control" onChange={(e)=>{changeValues(e)}}>
                    <option>Choose...</option>
                    <option value={"Married"} >Married</option>
                    <option value={"Single"} >Single</option>
                    <option value={"Divorced"} >Divorced</option>
                </select>
            </div>
            <div className="form-group-btn">
                <button type='button' className='btn btn-danger' onClick={() => navigate("/two")}>Back</button>
                <button type='button' className='btn btn-success' onClick={() => navigate("/four")}>Save and Continue</button>
            </div>
        </form>
    )
}

export default FormThree