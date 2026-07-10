import "./App.css";
import { useState } from "react";
import Extension from "./components/Extension";
import NavBar from "./components/NavBar";
import ModeBar from "./components/ModeBar";

export default function App() {
    const [appear, setAppear] = useState("all");
    const [light, setLight] = useState(false);
    const [focusBut, setFocusBut] = useState(appear);
    return(
        <>
            <section className="mainContainer">
                <ModeBar light={light} setLight={setLight}/>
                <NavBar appear={appear} setAppear={setAppear} focusBut={focusBut} setFocusBut={setFocusBut}/>
                <Extension appear={appear}  setAppear={setAppear} />
            </section>
        </>
    )
    
}