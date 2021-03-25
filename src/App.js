import React from 'react';
import "./App.css"

function HiddenComponent() {
  return <h1>This is hidden component.</h1>
}

function RegularComponent() {
  return <h1>This is component can be seen for everyone.</h1>
}

function App({ authorized }) {

  return (
    <>
      {authorized ? <HiddenComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
