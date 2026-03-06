// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({arr}) {

    return (
    <>
        {arr.map(item => (
        <div key={item}>
            {/* <br></br> */}
            <h3>{item+1}</h3>
            <CustomInput placeholder={'Company Name'}></CustomInput>
            <CustomInput placeholder={'Position Title'}></CustomInput>
            <CustomInput placeholder={'Responsibilities'}></CustomInput>
            <CustomInput placeholder={'Start/End Dates'}></CustomInput>
        </div>  
        ))}

    </>
    )

}

export default Education