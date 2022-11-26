import React from 'react'
import { AiOutlinePropertySafety } from 'react-icons/ai'
import { FaConnectdevelop, FaNetworkWired, FaPeopleArrows } from 'react-icons/fa'
import { GiDiamondTrophy, GiSkills } from 'react-icons/gi'
import Tilt from 'react-vanilla-tilt'
const MunExcellencies = () => {
    return (
        <div className="section munExcellencies">
            <div className="container2 flex ">
                <div className="sectionTitle"><span>Jecrc</span> Mun Excellencies</div>
                <img className='line' src={require('../../images/line.png')} alt="" />
                <div className="excellenciesCard">
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <GiSkills className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Skills</h1>
                            <p className="cardDescription">JECRC MUN is an ideal place to hone your public speaking, writing and analytical skills. All writing piece will involve your research and analytical abilities. Public speaking is a fundamental part of the conference and it requires you to adapt to several situations to have a strong and effective debate.</p>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <FaConnectdevelop className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Networking</h1>
                            <p className="cardDescription">JECRC MUN will provide you with an opportunity to meet many talented people throughout the country, discover new cultures and their different perspective. You can grow your network for the future by making new contacts. You also build precious memories and friendships that will last forever.</p>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <FaPeopleArrows className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Learn from others</h1>
                            <p className="cardDescription">Model UN is a great educational tool that provides extremely valuable benefits to students. At JECRC MUN, students learn from each other. MUN conferences are fun and during the conference, you will meet other delegates and senior delegates who can help you in learning new things.</p>
                        </div>
                    </Tilt>
                </div>
                <div className="sectionTitle">Become Our <span>Campus AMbassador</span></div>
                <img className='line' src={require('../../images/line.png')} alt="" />
                <div className="excellenciesCard">
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <AiOutlinePropertySafety className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Perks and Entitlements</h1>
                            <p className="cardDescription">Campus Ambassadors of JECRC MUN are entitled to additional benefits in form of concessions and discounts. This is an opportunity to make your conference experience more fulfilling, by paying the fee simply with your networking skills.</p>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <FaNetworkWired className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Networking Skills</h1>
                            <p className="cardDescription">As a campus ambassador you get to enhance your network within your campus with the prestigious tag of JECRC MUN. Get an edge at being heard by your peers and connect with them at a greater level, honing your interpersonal skills.</p>
                        </div>
                    </Tilt>
                    <Tilt>
                        <div className="card flex">
                            <div className="cardImg">
                                <GiDiamondTrophy className='cardLogo' />
                            </div>
                            <h1 className="cardTitle">Recognition</h1>
                            <p className="cardDescription">The merits of being a Campus Ambassador don't end with the conference, but stay with you thereafter. A certificate recognizing your milestones will be conferred upon you, investing the repute and excellence of JECRC MUN on you as well.</p>
                        </div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default MunExcellencies