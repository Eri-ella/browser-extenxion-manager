import { useState } from 'react';
import '../styles/ModeBar.css';
//import '../styles/ModeBarLight.css';
import Logo from '../assets/images/logo.svg'
import LogoLight from '../assets/images/logo-light.svg'
import Sun from '../assets/images/icon-sun.svg'
import Moon from '../assets/images/icon-moon.svg'


export default function ModeBar({light, setLight}){
    if (light){
        document.querySelector("body").setAttribute("data-theme", "light");
    } else {
        document.querySelector("body").setAttribute("data-theme", "dark");
    }

    return(
        <>
            <section className='modeBar'>
                <span className='mainLogo'>
                    <img 
                        src={Logo}
                        alt="Main logo" 
                    />
                </span>
                <span className='lightLogo'>
                    <button 
                        className='light' 
                        onClick={() => light ? setLight(false) : setLight(true)}>
                            <img 
                                src={light ? Moon : Sun} 
                                alt={light ? "Moon Icon" : "Sun Icon"}
                            />
                    </button>
                </span>
            </section>
        </>
    )
}