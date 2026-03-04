// import { useState } from "react";
import '../styles/CV.css'
import CustomInput from './CustomInput.jsx'

function CV() {

    

    return(
    <div className='CVDiv'>
        <div className='section'>
            <h2>General Information</h2> 
            <CustomInput placeholder={'Name'}></CustomInput>
            <CustomInput placeholder={'Email'}></CustomInput>
            <CustomInput placeholder={'Phone Number'}></CustomInput>
        </div>
        <div className='section'>
            <h2>Educational Experience</h2> 
            <CustomInput placeholder={'School Name'}></CustomInput>
            <CustomInput placeholder={'Title of Study'}></CustomInput>
            <CustomInput placeholder={'Date of Study'}></CustomInput>
        </div>
        <div className='section'>
            <h2>Practical Experience</h2> 
            <CustomInput placeholder={'Company Name'}></CustomInput>
            <CustomInput placeholder={'Position Title'}></CustomInput>
            <CustomInput placeholder={'Responsibilities'}></CustomInput>
            <CustomInput placeholder={'Start/End Dates'}></CustomInput>
        </div>
    </div>
    )

};

export default CV;