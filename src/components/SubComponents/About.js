import React from 'react'
import Tilt from 'react-vanilla-tilt'

const About = () => {
  return (
    <div className='section' id='About'>
        <div className="container2">
            <div className="aboutIntroSection">
                <div className="introDetails">
                    <h3 className="aboutHeading">About us</h3>
                    <h1 className="introHeading">Welcome to Jecrc Mun</h1>
                    <img src={require('../../images/line.png')} alt="" />
                    <p className="introDescription">JECRC MUN is a ten years old legacy established in 2012, making JECRC the first host of a MUN conference in Jaipur. Inaugurated by the eminent educationist Shri Kul Bhushan Kothari, JECRC MUN has spiraled out exponentially to achieve the pinnacle of growth. With the zealous efforts of extensive organizing committees over the 10 years of conducting MUN conferences, we have gained a lot of momentum inviting immense participation from across the country.</p>
                    <a href='/' className="introBtn">Read More</a>
                </div>
                <Tilt options={{ scale: 2, max: 25 }} className="introImg">
                    <img src={require('../../images/aboutIntro.png')} alt="" />
                </Tilt>
            </div>
            <div className="aboutBoxes">
                <div className="aboutBox">
                    <h1 className="boxText"><span>2000+</span> <br />delegates</h1>
                </div>
                <div className="aboutBox">
                    <h1 className="boxText"><span>100+</span> <br />INTERNATIONAL DELEGATES</h1>
                </div>
                <div className="aboutBox">
                    <h1 className="boxText"><span>700+</span> <br />PARTICIPATION INSTITUTES</h1>
                </div>
                <div className="aboutBox">
                    <h1 className="boxText"><span>14 Lakh+</span> <br />MASSIVE OUTREACH</h1>
                </div>
            </div>
            <div className="aboutIntroSection">
                
                <Tilt className="introImg">
                    <img src={require('../../images/aboutIntro.png')} alt="" />
                </Tilt>
                <div className="introDetails">
                    <h1 className="introHeading">Zero Hour Summit</h1>
                    <img src={require('../../images/line.png')} alt="" />
                    <p className="introDescription">The Zero Hour Summit aims to center the voices of our college youth in the conversation about national and international issues and environmental justice. We intend to develop a discussion platform for topics of public interest that requires urgent attention. Zero Hour Summit is going to be an in-house debate competition that is bound to discuss 4 agendas. Agendas do not matter to a man without thought but torture the hearts of people who actively think about this world we live in. With these debates, we aim to move our students towards constant growth and development in thinking, research, and speaking skills, and the ability to have a sound opinion about matters of interest.</p>
                    <a href='/' className="introBtn">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About