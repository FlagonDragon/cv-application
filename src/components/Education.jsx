// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({arr}) {

    return (
    <>
        {arr.map(item => (
        <div key={item}>
            {/* <br></br> */}
            <h3>{item+1}</h3>
            <CustomInput placeholder={'School Name'}></CustomInput>
            <CustomInput placeholder={'Title of Study'}></CustomInput>
            <CustomInput placeholder={'Date of Study'}></CustomInput>
        </div>  
        ))}

    </>
    )

}

export default Education