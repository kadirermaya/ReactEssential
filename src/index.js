import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const [, , tripod] = ["camera", "lights", "tripods"];
console.log(tripod);

ReactDOM.render(
  <App authorized={true} />,
  document.getElementById('root'));


