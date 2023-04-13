import React from 'react'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    let navigate = useNavigate()
  return (
    <div>
        <h2>Fill the Multi Step Form</h2>
        <button type='button' className='btn btn-success' onClick={()=>navigate("/one")}>Go Ahead</button>
    </div>
  )
}

export default MainPage