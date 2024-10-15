import React from 'react'


const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn0.weddingwire.in/vendor/5504/3_2/640/jpg/advait-resort-forest-canopy-haldi-wedding-venue-ramsukh-resorts-hd_15_85504-163663866767094.jpeg" 
      className="d-block w-100 h-100" 
      style={{ height: '50px', width: '100%' }}

      alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://sparrowsongcollective.com/wp-content/uploads/sites/9915/2021/02/Union12-Columbia-City-Indiana-Wedding-WS-SparrowSongCollective-Blog-6-10.jpg" 
      className="d-block w-100 h-100" 
      style={{ height: '50px', width: '100%' }}

      alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/736x/83/b0/5f/83b05f90d20496470d8d6ff7345083a4.jpg" 
      className="d-block w-100 h-100" 
      style={{ height: '50px', width: '100%' }}

      alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
