

import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ title, decs, image}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{decs}</p>
        <Link to="#" className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  );
}

export default Cards;

