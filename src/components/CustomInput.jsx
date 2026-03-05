import { useState } from "react";
import '../styles/CustomInput.css'

function CustomInput({placeholder}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);

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
            <button type="submit" onClick={() => {{setOpen(!open)}}}>
                {'Submit'}
            </button>
        </div>
        ) : (
        <div className="inputDiv submittedDiv">
            <div>{placeholder}: {value}</div>
            <button onClick={() => {{setOpen(!open)}}}>
                {'Edit'}
            </button>
        </div>
        )}
    </>
  );
}



export default CustomInput;