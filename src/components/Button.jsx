import "../styles/Button.css";
import { useState } from "react";

export function Button({name, onClick, isFocused, isHovered}) {
    const[clicked, setClicked] = useState(false);
    
    return(
        <>
            <button 
                onClick={() => {onClick(); clicked ? setClicked(false) : setClicked(true)}}
                className={isHovered ? "clicker" : "clickerRed"}
                style={isFocused ? {backgroundColor : "var(--red)", border: "1px solid var(--red)", color: "hsl(227, 75%, 14%)"} : {}}
            >
                {name}
            </button>
        </>
    )
}