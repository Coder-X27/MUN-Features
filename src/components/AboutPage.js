import React from 'react'
import Banner from './SubComponents/Banner'
import '../styles/AboutPage.css'
const AboutPage = () => {
  return (
    <>
      <Banner title={"About Us"} description={"Jecrc Mun 2022"} />
      <div className="aboutPage ">
        <div className="aboutFloat">
          <h1 className="aboutPageContent ">JECRC MUN is a ten years old legacy established in 2012, making JECRC the first host of a MUN conference in Jaipur. Inaugurated by the eminent educationist Shri Kul Bhushan Kothari, JECRC MUN has spiraled out exponentially to achieve the pinnacle of growth. With the zealous efforts of extensive organizing committees over the 10 years of conducting MUN conferences, we have gained a lot of momentum inviting immense participation from across the country.</h1>
          <h1 className="aboutPageContent">Till the eighth edition, we have hosted approximately 2000+ delegates, including international delegates as well. To appreciate the endeavors of the participants and inspire them to sharpen their skills of diplomacy, we have had some renowned chief guests. For JECRC MUN 2018, we were graced by the presence of Shri Manishankar Aiyar, politician and diplomat and Shri Anand Chulani, a world-famous motivational speaker. In the eighth edition of 2019, the green-Hyderabad pioneer, Ms Hari Chandna Dasari, IAS ZHMC and Dr Jawahar Surisetti blessed us with their presence and filled the spirits of delegates with enthusiasm.</h1>
          <h1 className="aboutPageContent">Every year our expanse of expertise has grown beyond the previously achieved marks, as we continue to set new benchmarks for our future conferences. The committees we simulate and the agendas we offer, both give mind-bending experiences to the delegates. The prominent committees are General Assembly- Disarmament and International Security (GA-DISEC), United Nations Security Council (UNSC), International Monetary Fund (IMF), Lok Sabha, and International Press. The recent editions have also witnessed a Special Committe.</h1>
          <h1 className="aboutPageContent">We have created a promising platform for all the young diplomats that seek experience and genuine input about their performances, all credited to the correct MUN environment we offer. Our success as a MUN community is attributed to our delegates, and we wish to improve and attain the pinnacle of perfection for their sake. This year at JECRC MUN 2022, the experience will be a never before one of its kind adventure for the delegates. Like always, only grander!</h1>
        </div>
      </div>

    </>
  )
}

export default AboutPage