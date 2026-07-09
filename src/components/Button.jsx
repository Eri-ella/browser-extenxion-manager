import "../styles/Button.css";
import { useState } from "react";

export function Button({name, onClick}) {
    const[clicked, setClicked] = useState(false);

    return(
        <>
            <button 
                onClick={() => {onClick(); clicked ? setClicked(false) : setClicked(true)}}
                className="clicker"
            >
                {name}
            </button>
        </>
    )
}