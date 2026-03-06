import { useState } from "react";
import '../styles/CV.css'
import CustomInput from './CustomInput.jsx'
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";

function CV() {
  const [EdArr, setEdArr] = useState([0]);
  const [PrArr, setPrArr] = useState([0]);


    // return(
    //     <form className='CVDiv' onSubmit={e => e.preventDefault()}>
    //         <div className='section'>
    //             <h2>TEST TEST TEST</h2> 
    //             <CustomInput placeholder={'Testing!'}></CustomInput>
    //         </div>
    //     </form>
    // )

    function addEd() {
        let newArr = [...EdArr]
        newArr.push(newArr.length)
        console.log(newArr);
        setEdArr(newArr);
    }

    function addPr() {
        let newArr = [...PrArr]
        newArr.push(newArr.length)
        console.log(newArr);
        setPrArr(newArr);
    }

    return(
    <div className='CVDiv'>
        <div className='section'>
            <h2>General Information</h2> 
            <CustomInput placeholder={'Name'}></CustomInput>
            <CustomInput placeholder={'Email'}></CustomInput>
            <CustomInput placeholder={'Phone Number'}></CustomInput>
        </div>
        <div className='section'>
            <h2>Educational Experience <button className='addBtn' onClick={addEd}>Add</button></h2> 
            <Education arr={EdArr}></Education>
        </div>
        <div className='section'>
            <h2>Practical Experience <button className='addBtn' onClick={addPr}>Add</button></h2> 
            <Practical arr={PrArr}></Practical>
        </div>
    </div>
    )

};

export default CV;