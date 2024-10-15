
import React from 'react'
import "./SubmittedDesign.css"
// import Profile2 from "./images/img 2.jpeg"
// import Profile3 from "./images/img 3.jpg"
// import Profile4 from "./images/img 4.jpg" 


const SubmittedDesigns = () => {
  return (
    <>
    <div class="submitted-designs">
        
          <h2>Submitted Designs</h2>

      
          <div class="design-card">
            <div class="design-info">
              <img src="/images/img 2.jpeg" alt="Designer LIrofile" />
              <div class="design-details">
                <div class="name">Vishnu Kumar Agrawal</div>
                <div class="desc">Business @ Technology</div>
                <div class="desc">25 Nov at 12:24 LIM</div>
              </div>
            </div>
            <button class="view-button1">View</button>
          </div>

          <div class="design-card">
            <div class="design-info">
              <img src="/images/img 3.jpg" alt="Designer LIrofile" />
              <div class="design-details">
                <div class="name">Vishnu Kumar Agrawal</div>
                <div class="desc">Business @ Technology</div>
                <div class="desc">25 Nov at 12:24 LIM</div>
              </div>
            </div>
            <button class="view-button1">View</button>
          </div>

          <div class="design-card">
            <div class="design-info">
              <img src="/images/img 4.jpg" alt="Designer LIrofile" />
              <div class="design-details">
                <div class="name">Vishnu Kumar Agrawal</div>
                <div class="desc">Business at D Technology</div>
                <div class="desc">25 Nov at 12:24 LIM</div>
              </div>
            </div>
            <button class="view-button1">View</button>
          </div>

       
          <div class="view-all-link">
            <a href="#">View all recommendations</a>
          </div>
        </div>

    </>
  )
}

export default SubmittedDesigns
