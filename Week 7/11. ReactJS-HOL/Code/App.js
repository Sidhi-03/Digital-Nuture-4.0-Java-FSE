import React, { useState } from 'react';

function EventExamplesApp() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br /><br />
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);
  const conversionRate = 80; // 1 Euro = 80 INR

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      alert("Enter a valid Euro amount");
      return;
    }
    const result = (parseFloat(amount) * conversionRate).toFixed(2); // Euro → INR
    setConverted(result);
    alert(`Converting to INR Amount is ₹${result}`);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <br /><br />
        <label>
          Currency:
          <textarea value="Euro" readOnly />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
      {converted && (
        <div>
          <h3>Converted Value in INR: ₹ {converted}</h3>
        </div>
      )}
    </div>
  );
}
export default EventExamplesApp;
