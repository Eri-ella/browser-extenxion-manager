import "./App.css";
import Extension from "./components/Extension";
import NavBar from "./components/NavBar";
import ModeBar from "./components/ModeBar";
//import { Switch } from "./components/Switch";

export default function App() {
    return(
        <>
            <section className="mainContainer">
                <ModeBar />
                <NavBar />
                <Extension />
                {/*
                    
                    < Switch />
                */}  
            </section>
        </>
    )
    
}