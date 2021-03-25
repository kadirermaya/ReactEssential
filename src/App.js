import React, { useState, useEffect } from 'react';
import "./App.css"

function App() {
  const [feeling, setFeeling] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${feeling} around here!`);
  }, [feeling]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <>
      <h1>Current feeling is {feeling} and {secondary}</h1>
      <button onClick={() => setFeeling("angry")}>Angry</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setFeeling("sad")}>Sad</button>
      <button onClick={() => setFeeling("happy")}>Happy</button>
    </>
  );
}

export default App;
