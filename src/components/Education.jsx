// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({arr, open, delFunc}) {

    return (
    <>
        {arr.map(item => (
        <div key={item}>
            <h3>{open ? <button onClick={() => {delFunc(item)}}>Delete</button> : '♦' }</h3>
            <CustomInput placeholder={'School Name'} open={open}></CustomInput>
            <CustomInput placeholder={'Title of Study'} open={open}></CustomInput>
            <CustomInput placeholder={'Date of Study'} open={open}></CustomInput>
        </div>  
        ))}

    </>
    )

}

export default Education