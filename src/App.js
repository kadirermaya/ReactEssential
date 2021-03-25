import React from 'react';
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name} {props.lastName} Photography.</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Get your {props.adjective} pictures with me.</p>
      <ul style={{ textAlign: "left" }}>
        {photos.map((photo) =>
          <li>{photo}</li>
        )}
      </ul>
    </section >
  );

}

function Footer(props) {
  console.log(props);
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const photos = [
  "Wedding",
  "Portrait",
  "Event"
];



function App() {
  return (
    <div className="App">
      <Header name="Kadir" lastName="Ermaya" />
      <Main adjective="amazing" photo={photos} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}



export default App;
