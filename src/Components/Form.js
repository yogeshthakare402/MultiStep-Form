import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FromOne from './FromOne';
import FromTwo from './FromTwo';
import FormThree from './FormThree';
import FromFour from './FromFour';
import MainPage from './MainPage';
import "./Form.css";

function Form() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/one' element={<FromOne />}></Route>
                    <Route path='/two' element={<FromTwo />}></Route>
                    <Route path='/three' element={<FormThree />}></Route>
                    <Route path='/four' element={<FromFour />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Form