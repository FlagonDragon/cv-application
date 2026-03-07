// import { useState } from "react";
import CustomInput from './CustomInput.jsx'

function Education({open}) {

    return (
        <div>
            <h3>♦</h3>
            <CustomInput placeholder={'Name'} open={open}></CustomInput>
            <CustomInput placeholder={'Email'} open={open}></CustomInput>
            <CustomInput placeholder={'Phone Number'} open={open}></CustomInput>
        </div>  
    )

}

export default Education