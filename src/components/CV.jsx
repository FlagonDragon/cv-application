import { useState } from "react";
import '../styles/CV.css'
import Education from "./Education.jsx";
import Practical from "./Practical.jsx";
import General from "./General.jsx";


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
                General Information 
                {' '}
                <button 
                    type='submit'
                    onClick={() => {{setGen(!gen)}}}
                    >{gen ? 'Submit' : 'Edit'}
                </button>
            </h2> 
            <General open={gen}></General>
        </form>
        <form className='section' onSubmit={e => e.preventDefault()}>
            <h2>Educational Experience 
            {' '}
            <button onClick={addEd}>Add</button>
            {' '}
            <button 
                    type='submit'
                    onClick={() => {{setEd(!ed)}}}
                    >{ed ? 'Submit' : 'Edit'}
            </button>
            </h2>
            <Education arr={edArr} open={ed}></Education>
        </form>
        <form className='section' onSubmit={e => e.preventDefault()}>
            <h2>Practical Experience
            {' '}
            <button onClick={addPr}>Add</button> 
            {' '}
            <button 
                    type='submit'
                    onClick={() => {{setPr(!pr)}}}
                    >{pr ? 'Submit' : 'Edit'}
            </button>
                </h2> 
            <Practical arr={prArr} open={pr}></Practical>
        </form>
    </div>
    )

};

export default CV;