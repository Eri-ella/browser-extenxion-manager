import "./App.css";
import { useState } from "react";
import Extension from "./components/Extension";
import NavBar from "./components/NavBar";
import ModeBar from "./components/ModeBar";
//import { Switch } from "./components/Switch";

export default function App() {
    const [appear, setAppear] = useState("all");
    const [light, setLight] = useState(false);
    const [buttonFocus, setButtonFocus] = useState();
    return(
        <>
            <section className="mainContainer">
                <ModeBar light={light} setLight={setLight}/>
                <NavBar appear={appear} setAppear={setAppear} buttonFocus={buttonFocus} setbuttonFocus={setButtonFocus}/>
                <Extension appear={appear}  setAppear={setAppear} />
                {/*
                    < Switch />
                */}  
            </section>
        </>
    )
    
}