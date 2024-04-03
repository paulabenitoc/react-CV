import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="card">
        <h2 className="education-title">Education</h2>
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <p className="name">📕 {item.name}</p>
            <p>{item.where}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
