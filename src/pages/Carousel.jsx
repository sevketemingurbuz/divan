import React from 'react'
import Buttons from './Buttons'
import Home from './Home'
import Author from './Author'

export default function Carousel() {
  return (
    <div>
        <header>
        <div
       id="introCarousel"
       class="carousel slide carousel-fade shadow-2-strong"
       data-mdb-ride="carousel"
       >

   


    <div class="carousel-inner">

      <div class="carousel-item active">
      <img src="/gorseller/divan-edebiyati.jpg" className="d-block w-100" alt="..." style={{ width: "100%", height: "100vh" }} />
        <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
          <div
               class="d-flex justify-content-center align-items-center h-100"
               >
            <Home />
          </div>
        </div>
      </div>
      
         
      
    </div>

   
  </div>

</header>
    </div>
  )
}
