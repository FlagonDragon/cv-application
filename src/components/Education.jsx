// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({arr, open}) {

    return (
    <>
        {arr.map(item => (
        <div key={item}>
            {/* <br></br> */}
            <h3>{item+1}</h3>
            <CustomInput placeholder={'School Name'} open={open}></CustomInput>
            <CustomInput placeholder={'Title of Study'} open={open}></CustomInput>
            <CustomInput placeholder={'Date of Study'} open={open}></CustomInput>
        </div>  
        ))}

    </>
    )

}

export default Education