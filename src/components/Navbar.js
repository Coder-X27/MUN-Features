import React, { useState } from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
    const header = document.querySelector('.header.container');
    document.addEventListener('scroll', () => {
        var scroll_position = window.scrollY;
        if (scroll_position > 100) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });
    const [switchToggled, setSwitchToggled] = useState(false);
    const toggelSwitch = () => {
        switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    };
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
                            <li><a href="#Hero" data-after="Home">Home</a></li>
                            <li><a href="#About" data-after="About">About</a></li>
                            <li><a href="#projects" data-after="Registrations">Registrations</a></li>
                            <li><a href="#about" data-after="Agenda">Agenda</a></li>
                            <li><a href="#contact" data-after="Gallery">Gallery</a></li>
                            <li><a href="#contact" data-after="Team">Team</a></li>
                            <li><a href="#contact" data-after="Contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
