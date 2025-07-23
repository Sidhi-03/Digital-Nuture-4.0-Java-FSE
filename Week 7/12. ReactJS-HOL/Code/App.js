import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="screen">
      <div className="box">
        {isLoggedIn ? (
          <>
            <h1>Welcome back</h1>
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          </>
        ) : (
          <>
            <h1>Please sign up.</h1>
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
