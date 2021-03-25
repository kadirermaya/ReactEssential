import React from 'react';
import picture from './picture.JPG'

function Header(props) {
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
      <img src={picture} height={500} alt="An amazing view in Boardman-Poland Road" />
      <ul style={{ textAlign: "left" }}>
        {photoObjects.map(({ title, id }) =>
          <li key={id}>{title}</li>
        )}
      </ul>
    </section >
  );

}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const photos = [
  "Wedding",
  "Portrait",
  "Event",
  "Graduation"
];

const photoObjects = photos.map((photo, id) => ({ id: id, title: photo }))

function App() {
  return (
    <>
      <Header name="Kadir" lastName="Ermaya" />
      <Main adjective="amazing" photo={photoObjects} />
      <Footer year={new Date().getFullYear()} />
    </>
  );
}



export default App;
