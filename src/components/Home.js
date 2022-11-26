import React from 'react'
import '../styles/Home.css'
import About from './SubComponents/About'
import Agendas from './SubComponents/Agendas'
import Hero from './SubComponents/Hero'
import MunExcellencies from './SubComponents/MunExcellencies'
const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <MunExcellencies/>
      <Agendas/>
    </>
  )
}

export default Home