
import React from 'react'
import "./ProjectCard.css"
// import Profile from "./images/profile-picture.webp"
// import Project from './images/project-sample.png'
// import Like from "./images/like.png"
// import Comment from "./images/comment.png"
// import Share from "./images/share.png"
// import Save from "./images/save.png"
// import Sensory from "./images/sensory.jpg"

const ProjectCard = () => {
  return (
    <div class="project-card0">
      <div class="project-card">
        <h3>
          Ready to create amazing designs ? Check out the latest project and
          start earing today.
        </h3>
        <hr />
        <div class="project-header">
          <div class="profile-info">
            <img src="/images/profile-picture.webp" alt="Profile Picture" />
            <div class="profile-details">
              <div class="name">Mickelson Klus</div>
              <div>Business owner of D House</div>
              <div>25 Nov at 12:44 PM</div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="button submit-button">Submit Project</button>
            <button class="button view-button">View</button>
          </div>
        </div>

       
        <div class="project-description">
          Title: Display the title of the posted requirement.<br />
          Description: Show the detailed description of the requirement,
          including brand logo, identity, and desired message.
        </div>

       
        <img
          src="/images/project-sample.png"
          alt="Project Sample"
          class="project-image"
        />

       
        <div class="engagement">
          <div class="like">
            <img src="/images/like.png" alt="Like Icon" /> <span>14</span>
          </div>
          <div class="comment">
            <img src="/images/comment.png" alt="Comment Icon" /> <span>52</span>
          </div>
          <div class="share">
            <img src="/images/share.png" alt="Share Icon" /> <span>10</span>
          </div>
          <div class="save">
            <img src="/images/save.png" alt="Save Icon" />
          </div>
        </div>
      </div>
      <div class="project-card">
        <div class="project-header">
          <div class="profile-info">
            <img src="/images/profile-picture.webp" alt="Profile Picture" />
            <div class="profile-details">
              <div class="name">Mickelson Klus</div>
              <div>Business owner of D House</div>
              <div>25 Nov at 12:44 PM</div>
            </div>
          </div>
          <div class="action-buttons">
            <button class="button submit-button">Submit Project</button>
            <button class="button view-button">View</button>
          </div>
        </div>

  
        <div class="project-description">
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy
            text ever since the 1500s.
          </p>
        </div>

     
        <img
          src="/images/sensory.jpg"
          alt="Project Sample"
          class="project-image"
        />

        <div class="engagement">
          <div class="like">
            <img src="/images/like.png" alt="Like Icon" /> <span>14</span>
          </div>
          <div class="comment">
            <img src="/images/comment.png" alt="Comment Icon" /> <span>52</span>
          </div>
          <div class="share">
            <img src="/images/share.png" alt="Share Icon" /> <span>10</span>
          </div>
          <div class="save">
            <img src="/images/save.png" alt="Save Icon" />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2><a href="#" class="join">View New Projects </a></h2>
        <br />
      </div>
    </div>
 
  )
}

export default ProjectCard
