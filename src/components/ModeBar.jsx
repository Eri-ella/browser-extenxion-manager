import { useState } from 'react';
import '../styles/ModeBar.css';
import Logo from '../assets/images/logo.svg'
import Sun from '../assets/images/icon-sun.svg'
import Moon from '../assets/images/icon-moon.svg'


export default function ModeBar(){
    const [light, setLight] = useState(false);

    return(
        <>
            <section className='navBar'>
                <span className='col1'>
                    <img 
                        src={Logo}
                        alt="Main logo" 
                    />
                </span /* */>
                <span className='col2'>
                    <button 
                        className='clicker' 
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