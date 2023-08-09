import React from 'react'
import './hero.css'

import Video from "./ocean-54081.mp4"

function Hero() {
  return (
    <div className='hero'>
        <video autoPlay loop muted  id='video' >
            <source src={Video} type='video/mp4'/>
        </video>
        <div className='overlay'></div>
        <div className='content'>
          <h1>First Class Travel</h1>
          <h2>Top 1% Locations <br></br> Worldwide</h2>
          <div className='searchbar'>
            <input type='text' className='input' placeholder='Search Destination'/>
            <button id='butt'><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>

        </div>
    </div>
  )
}

export default Hero;


