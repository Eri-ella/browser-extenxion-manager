import "../styles/Button.css";
import { useState } from "react";

export function Button({name, onClick, isFocused}) {
    const[clicked, setClicked] = useState(false);
    
    return(
        <>
            <button 
                onClick={() => {onClick(); clicked ? setClicked(false) : setClicked(true)}}
                className="clicker"
                style={isFocused ? {backgroundColor : "#f05d55", border: "1px solid #f05d55", color: "#1F2535"} : {}}
            >
                {name}
            </button>
        </>
    )
}