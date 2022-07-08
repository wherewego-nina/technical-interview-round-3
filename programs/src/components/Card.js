import React from "react";

export default function Card({program}){


  return (
    <div className="card">
      <img src={program.image.cloudinaryURL} alt="card--img" className="card--image"/>
      <h3 className="card--name">{program.name} </h3>
      <h4 className="card--institution">{program.institution.name}</h4>
      <h5 className="card--type">{program.programType}</h5>
    </div>
  );
};