import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UsethisContext } from '../App';
import Tracker from './Tracker';

function FromOne() {
    let navigate = useNavigate();
    const {formValues,setFormValues} = UsethisContext();
    // console.log(formValues)
    const changeValues = (e)=>{
        // console.log(e.target.value);
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    return (
        <form className='form'>
            <Tracker/>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={formValues.firstName} name='firstName' id='firstName' className="form-control" placeholder="Enter First Name" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className='form-group'>
                <label htmlFor="lastName">First Name</label>
                <input type="text" value={formValues.lastName} name='lastName' id='lastName' className="form-control" placeholder="Enter Last Name" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" value={formValues.email} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e)=>changeValues(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={formValues.password} name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>changeValues(e)}/>
            </div>
            <div className="form-group-btn">
                <button type='button' className='btn btn-danger' onClick={()=>navigate("/")}>Back</button>
                <button type='button' className='btn btn-success' onClick={()=>navigate("/two")}>Save and Continue</button>
            </div>
        </form>
    )
}

export default FromOne