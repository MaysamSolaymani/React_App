import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const tick = () =>
  {
    const elem = (<h1>it is {new Date().toLocaleString()}</h1>)
    ReactDOM.createRoot(document.getElementById('root')).render(elem,)
  }

setInterval(() => {
  tick()
}, 1000);