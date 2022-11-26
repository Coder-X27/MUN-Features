import React from 'react'
const Agendas = () => {
    return (
        <div className='section agenda'>
            <div className="container1 flex">
                <h1 className="sectionTitle2"><span>A</span>Genda's</h1>
                <img src={require("../../images/line.png")} alt="" className="line" />
                <div className="agendaBoxes flex">
                    <div className="agendaBox">
                        <div className="agendaTImg">
                            <h1 className="agendaTitle">RESERVATION SYSTEM IN INDIA</h1>
                            <img className='agendaImg' src={require('../../images/agenda1.jpg')} alt="" />
                        </div>
                        <p className="agendaDescription">JECRC MUN is a ten years old legacy established in 2012, making JECRC the first host of a MUN conference in Jaipur. Inaugurated by the eminent educationist Shri Kul Bhushan Kothari, JECRC MUN has spiraled out exponentially to achieve the pinnacle of growth. With the zealous efforts of extensive organizing committees over the 10 years of conducting MUN conferences, we have gained a lot of momentum inviting immense participation from across the country.</p>
                    </div>
                    <div className="agendaBox">
                        <div className="agendaTImg">
                            <h1 className="agendaTitle">INTERNET PRIVACY RIGHTS</h1>
                            <img className='agendaImg' src={require('../../images/agenda4.jpg')} alt="" />
                        </div>
                        <p className="agendaDescription">With the Internet now available in every nook and corner of the world, it raises a vital question for everyone- the privacy of data. Although sharing of data to websites and their parent companies makes it easier to get recommendations and gives it a more personalized look, leaks of personal information can cause both physical and mental anguish to the users. This agenda is a take on both the positive and negative aspects of how the privatization of data to the users themselves would affect them for better or for worse.</p>
                    </div>
                    <div className="agendaBox">
                        <div className="agendaTImg">
                            <h1 className="agendaTitle">MILLENNIALS VS GEN Z</h1>
                            <img className='agendaImg' src={require('../../images/agenda3.jpg')} alt="" />
                        </div>
                        <p className="agendaDescription">The tech-savvy, the hard worker, the smart worker, the multi-tasker, the innovator, the financially stable, the flexible, etc. Two generations separated from each other by the many aspects of life. Millennials (born between 1982 and 2000) and Gen Z (born between 2001 and 2019), have different opinions and places in their lives due to technology, education, self-identity, society, upbringing, communication, and emotions. The agenda raises a series of queries and aspects to marvel on- which side are you on?</p>
                    </div>
                    <div className="agendaBox">
                        <div className="agendaTImg">
                            <h1 className="agendaTitle">A WORLD WITH AI </h1>
                            <img className='agendaImg' src={require('../../images/agenda2.jpg')} alt="" />
                        </div>
                        <p className="agendaDescription">Artificial intelligence is a new and up-and-coming technology capable of changing the world as we know it. It is the simulation of human intelligence processed by machines that can be the cause of mass destruction, a robot uprising, or the settlement of a new and improved civilization. This revolution in technology would impact us all, for good or bad. This agenda gives the participants an opportunity to debate on topics such as human error, new inventions, the high cost of creation, unemployment, technology improvement, human activity, and so on.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agendas
