
import React from 'react';
import './Slidebar.css';
// import Project from "./images/project.png"
// import Transactions from "./images/transactions.png"
// import Completed from "./images/completed.png"
// import Messaging from "./images/messaging.png"
// import Wallet from "./images/wallet.jpg"
// import Experience from "./images/experience-1.jpg"
// import Profile from "./images/profile-picture.webp"
// import Group from "./images/Group.png"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <img src="/images/project.png" alt="Projects Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Projects</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/transactions.png" alt="Transactions Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Transactions</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/completed.png" alt="Completed Designs Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Completed Designs</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/messaging.png" alt="Messaging Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Messaging</span>
      </div>
      <div className="sidebar-item">
        <img src="/images/wallet.jpg" alt="Wallet Icon" className="sidebar-item-icon" />
        <span className="sidebar-item-text">Wallet</span>
      </div>
      <div className="image">
        <img src="/images/experience-1.jpg" style={{ height: 'auto', width: '100%' }} alt="Experience" />
      </div>
      <div className="profile-card">
        <img src="/images/profile-picture.webp" alt="Profile Picture" />
        <div className="profile-name">Mickelson Klus</div>
        <button className="profile-button">Designer's Profile</button>
      </div>
      <div className="group">
        <img src="/images/Group (1).png" style={{ marginTop: '600px' }} alt="Group" />
      </div>
    </div>
  );
}

export default Sidebar;
