import React from 'react';
import Tracker from './Tracker';
import { UsethisContext } from '../App';
import { useNavigate } from 'react-router-dom';


function FromFour() {
    let navigate = useNavigate();
    const { formValues } = UsethisContext();
    console.log(formValues);

    return (
        <div id='formData' className='form'>
            <Tracker/>
            <h2>User Details</h2>
            <div>
                <div>First Name:- {formValues.firstName}</div>
                <div>Last Name:- {formValues.lastName}</div>
                <div>email:- {formValues.email}</div>
            </div>
            <hr />
            <div>
                <div>Date Of Birth:- {formValues.dob}</div>
                <div>Gender:- {formValues.gender}</div>
                <div>Phone Number:- {formValues.phoneNumber}</div>
                <div>Address:- {formValues.address}</div>
            </div>
            <hr />
            <div>
                <div>Educational Status:- {formValues.educationLevel}</div>
                <div>Employment Status:- {formValues.employmentStatus}</div>
                <div>Annual Income:- {formValues.annualIncome}</div>
                <div>Marital Status:- {formValues.maritalStatus}</div>
            </div>
            <div className="form-group-btn">
                <button type='button' className='btn btn-danger' onClick={() => navigate("/three")}>Back</button>
                <button type='button' className='btn btn-success' onClick={() => navigate("/")}>Submit the Form</button>
            </div>
        </div>
    )
}

export default FromFour