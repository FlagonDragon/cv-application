import { useState } from "react";
import '../styles/CV.css'
import CustomInput from './CustomInput.jsx'
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";

function CV() {
  const [edArr, setEdArr] = useState([0]);
  const [prArr, setPrArr] = useState([0]);
  const [gen, setGen] = useState(true);
  const [ed, setEd] = useState(true);
  const [pr, setPr] = useState(true);




    function addEd() {
        let newArr = [...edArr]
        newArr.push(newArr.length)
        console.log(newArr);
        setEdArr(newArr);
    }

    function addPr() {
        let newArr = [...prArr]
        newArr.push(newArr.length)
        console.log(newArr);
        setPrArr(newArr);
    }

    return(
    <div className='CVDiv'>
        <form className='section' onSubmit={e => e.preventDefault()}>
            <h2>
                General Information <button 
                    type='submit'
                    onClick={() => {{setGen(!gen)}}}
                >Submit</button>
            </h2> 
            <CustomInput placeholder={'Name'} open={gen}></CustomInput>
            <CustomInput placeholder={'Email'} open={gen}></CustomInput>
            <CustomInput placeholder={'Phone Number'} open={gen}></CustomInput>
        </form>
        <div className='section'>
            <h2>Educational Experience <button className='addBtn' onClick={addEd}>Add</button> <button 
                    type='submit'
                    onClick={() => {{setEd(!ed)}}}
                >Submit</button></h2>
            <Education arr={edArr} open={ed}></Education>
        </div>
        <div className='section'>
            <h2>Practical Experience <button className='addBtn' 
            onClick={addPr}>Add</button> <button 
                    type='submit'
                    onClick={() => {{setPr(!pr)}}}
                >Submit</button></h2> 
            <Practical arr={prArr} open={pr}></Practical>
        </div>
    </div>
    )

};

export default CV;