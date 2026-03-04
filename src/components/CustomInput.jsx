import { useState } from "react";
import '../styles/CustomInput.css'

function CustomInput({placeholder}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(true);

  return (
    <>
        {open == true ? (
        <>
            <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}/>
            <button onClick={() => {{setOpen(!open)}}}>
                {'Submit'}
            </button>
        </>
        ) : (
        <>
            <div>{value}</div>
            <button onClick={() => {{setOpen(!open)}}}>
                {'Edit'}
            </button>
        </>
        )}
    </>
  );
}



export default CustomInput;