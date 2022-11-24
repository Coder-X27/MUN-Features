import React from 'react'
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'
import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer >
            <div className="flex container1">
                <div className="footerDetails flex">
                    <img src={require("../images/munLogo.png")} alt="MUN LOGO" />
                    <h6 className="footerBrandHeading">JECRC MUN</h6>
                </div>
                <div className="footerInfo">
                    <div className="infoSection">
                        <h1 className="infoTitle">Address</h1>
                        <p className="infoDetail">Shri Ram Ki Nangal, <br /> via Sitapura RICCO,<br /> Tonk Road, Jaipur</p>
                    </div>
                    <div className="infoSection">
                        <h1 className="infoTitle">Email</h1>
                        <p className="infoDetail">mun@jecrc.ac.in</p>
                    </div>
                    <div className="infoSection">
                        <h1 className="infoTitle">Contacts</h1>
                        <p className="infoDetail">Vrindaa Joshi</p>
                        <p className="infoDetail">7296877859</p>
                    </div>
                </div>
                <hr />
                <h1 className="footerTechteam">
                    This site is maintained & developed by <a href="/"> JECRC MUN Techinal Team.</a>
                </h1>
                <div className="footerSocialicons">
                    <div className="iconDiv flex">
                        <GrFacebook className='reactIcon' />
                    </div>
                    <div className="iconDiv flex">
                        <GrInstagram className='reactIcon' />
                    </div>
                    <div className="iconDiv flex">
                        <GrTwitter className='reactIcon' />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer