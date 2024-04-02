import React from "react";
import "./More.css";

const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="card">
        <h2>More</h2>
        <div>
          <p>
            Language: {languages.language} (Writing: {languages.wrlevel}, Speaking: {languages.splevel})
          </p>
        </div>
        <div>
          <h3>Habilities</h3>
          <ul>
            {habilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Volunteer</h3>
          {volunteer.map((item, index) => (
            <div key={index} className="volunteer-item">
              <p className="name">{item.name}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default More;
