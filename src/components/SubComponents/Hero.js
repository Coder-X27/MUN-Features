import React from 'react'

const Hero = () => {
    return (
        <div className="hero" id="Hero">
            <div className="heroMunBranding container2 flex">
                <img src={require('../../images/munLogo.png')} alt="" className="heroImg" />
                <h1 className="heroTitle">Jecrc Mun</h1>
                <h1 className="heroTitle2">Presents Zero Hour Summit</h1>
                <h1 className="heroTitle3">Awaken the Leader in You</h1>
                <a href="/"><h1 className="heroBtn"><span> 3rd December </span><br />Register Now !</h1></a>
            </div>
        </div>
    )
}

export default Hero