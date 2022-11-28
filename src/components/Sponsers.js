import React from 'react'
import Banner from './SubComponents/Banner'
import Tilt from 'react-vanilla-tilt'
import '../styles/Sponsers.css'
const Sponsers = () => {
    return (
        <>
            <Banner title={"Our Previous Sponsers"} description={"Jecrc Mun 2022"} />
            <div className="sponsers flex">
                <div className="sponserItem">
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/1.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/2.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/3.png")} alt="" />
                    </Tilt>
                </div>
                <div className="sponserItem">
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/5.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/6.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/7.png")} alt="" />
                    </Tilt>
                </div>
                <div className="sponserItem">
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/9.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/10.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/11.png")} alt="" />
                    </Tilt>
                </div>
                <div className="sponserItem">
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/4.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/8.png")} alt="" />
                    </Tilt>
                    <Tilt className="sponserTilt">
                        <img src={require("../images/sponsers/12.png")} alt="" />
                    </Tilt>
                </div>
            </div>
        </>
    )
}

export default Sponsers