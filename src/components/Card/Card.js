import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card img-container hover"
    value={props.id}
    onClick={() => props.clickCount(props.id)}
    
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Card;
