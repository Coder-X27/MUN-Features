import React from 'react'
import '../../styles/Banner.css'
const Banner = (props) => {
  return (
    <div id="banner" style={{background: "var(--heading)"}}>
      <h1 className="bannerTitle">{props.title}</h1>
      <h1 className="bannerTitle2">{props.description}</h1>
    </div>
  )
}

export default Banner