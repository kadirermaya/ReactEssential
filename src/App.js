import React, { useState } from 'react';
import "./App.css"

function App() {
  const [feeling, setEmotion] = useState("happy");
  return (
    <>
      <h1>Current feeling is {feeling}</h1>
      <button onClick={() => setEmotion("angry")}>Angry</button>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("happy")}>Happy</button>
    </>
  );
}

export default App;
