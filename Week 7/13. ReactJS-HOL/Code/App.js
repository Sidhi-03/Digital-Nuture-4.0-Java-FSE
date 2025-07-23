import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Course Details Column */}
      <div className="column">
        <h1>Course Details</h1>
        <h2>Angular</h2>
        <p>4/5/2021</p>
        <h2>React</h2>
        <p>6/3/2021</p>
      </div>

      {/* Book Details Column */}
      <div className="column">
        <h1>Book Details</h1>
        <ul>
          <li><strong>Master React</strong><br />670</li>
          <li><strong>Deep Dive into Angular 11</strong><br />800</li>
          <li><strong>Mongo Essentials</strong><br />450</li>
        </ul>
      </div>

      {/* Blog Details Column */}
      <div className="column">
        <h1>Blog Details</h1>
        <ul>
          <li><strong>React Learning</strong></li>
          <li><strong>Stephen Biz</strong></li>
          <li>Welcome to learning React!</li>
        </ul>
        
        <h2>Installation</h2>
        <ul>
          <li><strong>Schewzdenier</strong></li>
          <li>You can install React from npm.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;