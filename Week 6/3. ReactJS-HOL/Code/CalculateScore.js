import React from 'react';
import './mystyle.css';

function CalculateScore() {
  const name = "Steeve";
  const school = "DNV Public School";
  const total = 284;
  const score = ((total / 300) * 100).toFixed(2); // Assuming out of 300

  return (
    <div className="details-container">
      <h2 className="heading">Student Details:</h2>
      <p><span className="label blue">Name:</span> <span className="value blue">{name}</span></p>
      <p><span className="label red">School:</span> <span className="value red">{school}</span></p>
      <p><span className="label maroon">Total:</span> <span className="value">{total} Marks</span></p>
      <p><span className="label green">Score:</span> <span className="value green">{score}%</span></p>
    </div>
  );
}

export default CalculateScore;
