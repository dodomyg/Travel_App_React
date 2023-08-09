import React from 'react'
import "./destination.css"

import BoraBora from "./borabora.jpg";
import BoraBora2 from "./borabora2.jpg"
import Maldives from "./maldives.jpg"
import Maldives2 from "./maldives2.jpg"
import Maldives3 from "./maldives3.jpg"



function Destination() {
  return (
    <div className='bg'>
        <div className='container'>
            <h1>All Inclusive Resorts</h1>
            <p>On the Caribbean's Best Beaches</p>
            <div className='img-container'>
                <img className=' span-3 img-grid-row-2' src={BoraBora} alt='/' />
                <img src={BoraBora2} alt='/' />
                <img src={Maldives} alt='/' />
                <img src={Maldives2} alt='/' />
                <img src={Maldives3} alt='/' />
            </div>
        </div>
      
    </div>
  )
}

export default Destination
