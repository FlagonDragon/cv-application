import { useState } from "react";
import '../styles/CustomInput.css'

function CustomInput({placeholder, open}) {
  const [value, setValue] = useState("");

  return (
    <>
        {open == true ? (
        <div className="inputDiv">
            <label>
                {placeholder}: {' '}
                <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
            </label>
        </div>
        ) : (
        <div className="inputDiv submittedDiv">
            <div>{placeholder}: {value}</div>
        </div>
        )}
    </>
  );
}



export default CustomInput;