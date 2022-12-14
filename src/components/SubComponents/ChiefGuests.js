import React from 'react'
import {BiRightArrowAlt} from 'react-icons/bi'
const ChiefGuests = () => {
    return (
        <div className='section'>
            <div className="chiefGuest container2 flex">
                <h1 className="sectionTitle2"><span>Chief</span> Guests</h1>
                <img className='line' src={require('../../images/line.png')} alt="" />
                <div className="cGuestsSection">
                    <div className="cGuest">
                        <div className="guestImg">
                            <img src={require('../../images/Satish.jpg')} alt="" />
                            <h1 className="cGuestName">Satish C. Mehta</h1>
                            <h2 className="cGuestPosition">Former Indian Ambassador to Kuwait</h2>
                        </div>
                        <div className="cGuestDescription">
                            <p className="cGuestDesc">Ambassador Satish C. Mehta joined the Indian Foreign Service in 1983 and retired as Director General, Indian Council for Cultural Relations (ICCR) in September, 2015. Earlier, after serving in France, Ivory Coast and Italy, he was Political Advisor to UN Head of Mission in Haiti during UN Peace Keeping Operations in 1995-96. He served as Director in the Indian Prime Minister's Office from 1997 to 1999 dealing with the strategic sector- External Affairs, Defence, Atomic Energy, Space and S&T.
<br /><br />
                                During July 1999 to July 2002 he was Political Counsellor in the Indian Mission to the United Nations in New York, from where he went as Deputy Chief of Mission in Tel Aviv from 2002-2005. He served as India's Consul General in Toronto from 2005-2008 and as Joint Secretary of Nepal and Bhutan Division in the Ministry of External Affairs from October 2008 until July, 2011. He was Indian Ambassador in Kuwait from July 2011 until November, 2013. </p>
                        </div>
                    </div>
                    <div className="cGuest">
                        <div className="guestImg">
                            <img src={require('../../images/Munshi.jpeg')} alt="" />
                            <h1 className="cGuestName">Dr. Munish Jindal</h1>
                            <h2 className="cGuestPosition">Founder & CEO
HoverRobotixe</h2>
                        </div>
                        <div className="cGuestDescription">
                            <p className="cGuestDesc">Dr. Munish Jindal is the Founder & CEO of HoverRobotix and the Founding President of MENTORx Global. He is awarded and honored with highest civilian honor ???Karmaveer Chakra??? by United Nations. He is the Noble Asian of the Year 2018 as well as the TEDx Speaker. He is the man who followed his dreams. He is MBA, CPA from Australia. He holds Ph.D in Robotics & Artificial Intelligence from USA.
<br /><br />
He came back to India making it big for himself and his fellow citizen. He is into suitcase living, keep on traveling all the time and living with the philosophy of making others rise. Dr. Jindal has penned down 12 books, has 6 patents in his name in India, Australia and Germany. He is the one who launched the concept of Hoverboards, autobots & Mobility Robots in India. He initiated the ideas of ???Education, Empower, Elevate??? in India with MENTORx. He is the one who believes in making others rise.</p>
                        </div>
                    </div>
                </div>
                <a href="/" className="guestList">View More <BiRightArrowAlt className='arrow'/></a>
            </div>
        </div>
    )
}

export default ChiefGuests
