import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tracker from './Tracker';
import { UsethisContext } from '../App';


function FromTwo() {
    let navigate = useNavigate();
    const {formValues,setFormValues} = UsethisContext();
    // console.log(formValues)
    const changeValues = (e)=>{
        console.log(e.target.value)
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    return (
        <form className='form'>
            <Tracker/>
            <div className='form-group'>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" value={formValues.dob} name='dob' id='dob' className="form-control" placeholder="Enter Date of Birth" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="gender">Gender</label>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" value={"Male"} name='gender' id="inlineCheckbox1" onChange={(e)=>changeValues(e)}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="inlineCheckbox2" value={"Female"} name='gender' onChange={(e)=>changeValues(e)}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="inlineCheckbox3" value={"Transgender"} name='gender' onChange={(e)=>changeValues(e)}/>
                    <label className="form-check-label" htmlFor="inlineRadio3">Transgender</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" id="inlineCheckbox3" value={"Other"} name='gender' onChange={(e)=>changeValues(e)}/>
                    <label className="form-check-label" htmlFor="inlineRadio4">Other</label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" value={formValues.phoneNumber} name='phoneNumber' className="form-control" id="phoneNumber" aria-describedby="emailHelp" placeholder="Enter Phone Number" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" value={formValues.address} name='address' className="form-control" id="address" placeholder="Address" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className="form-group-btn">
                <button type='button' className='btn btn-danger' onClick={()=>navigate("/one")}>Back</button>
                <button type='button' className='btn btn-success' onClick={()=>navigate("/three")}>Save and Continue</button>
            </div>
        </form>
    )
}

export default FromTwo