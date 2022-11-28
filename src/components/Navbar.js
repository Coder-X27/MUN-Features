import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
const Navbar = () => {
    const header = document.getElementById('header');
    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 50) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
    const [switchToggled, setSwitchToggled] = useState(false);
    const toggelSwitch = () => {
        switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    };
    const cln=(e)=>{
        switchToggled ? setSwitchToggled(false):setSwitchToggled(true);
        e.preventDefault();
    }
    return (
        <div id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <img src={require("../images/munLogo.png")} alt="" />
                    </div>
                    <div className="nav-list">
                        <div onClick={toggelSwitch} className={
                            switchToggled ? "hamburger active" : "hamburger"
                        }>
                            <div className="bar"></div>
                        </div>
                        <ul className={
                            switchToggled ? "active" : ""
                        }>
                            <li onClick={cln}><Link  to="/" data-after="Home">Home</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/about" data-after="About">About</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/sponsers" data-after="Team">Sponsers</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/" data-after="Registrations">Registrations</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/team" data-after="Team">Team</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/events" data-after="Team">Events</Link><div className="navbarAnimation"></div></li>
                            <li onClick={cln}><Link  to="/contact" data-after="Contact">Contact</Link><div className="navbarAnimation"></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
