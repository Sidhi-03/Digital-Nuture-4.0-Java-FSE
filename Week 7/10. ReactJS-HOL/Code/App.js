import React from 'react';
import './App.css';
import officeImage from './office.jpg'; // ✅ Import your saved image

function App() {
  const heading = "Office Space , at Affordable Range";

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai"
  };

  return (
    <div className="app-container">
      <h1>{heading}</h1>

      <img src={officeImage} alt="Office Space" width="300px" />

      <div className="details">
        <h2>Name: {office.name}</h2>
        <h3 style={{ color: office.rent > 60000 ? "green" : "red" }}>
          Rent: Rs. {office.rent}
        </h3>
        <h4>Address: {office.address}</h4>
      </div>
    </div>
  );
}

export default App;
