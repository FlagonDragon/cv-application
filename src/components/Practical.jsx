// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({arr, open}) {

    return (
    <>
        {arr.map(item => (
        <div key={item}>
            {/* <br></br> */}
            <h3>{item+1}</h3>
            <CustomInput placeholder={'Company Name'} open={open}></CustomInput>
            <CustomInput placeholder={'Position Title'} open={open}></CustomInput>
            <CustomInput placeholder={'Responsibilities'} open={open}></CustomInput>
            <CustomInput placeholder={'Start/End Dates'} open={open}></CustomInput>
        </div>  
        ))}

    </>
    )

}

export default Education