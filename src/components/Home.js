import React from 'react'
import '../styles/Home.css'
import About from './SubComponents/About'
import Agendas from './SubComponents/Agendas'
import ChiefGuests from './SubComponents/ChiefGuests'
import Hero from './SubComponents/Hero'
import MunExcellencies from './SubComponents/MunExcellencies'
const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <MunExcellencies/>
      <Agendas/>
      <ChiefGuests/>
    </>
  )
}

export default Home