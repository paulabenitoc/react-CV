import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="card">
        <h2 className="experience-title">Experience</h2>
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <p className="name">{item.name}</p>
            <p>{item.date}</p>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

