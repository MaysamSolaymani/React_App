import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {func} from './mogule.js'

class Timer extends React.Component{
  render(){
    return <h1> the time is {new Date().toLocaleTimeString()}</h1>
  }
}


const tick = () =>
  {
    ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>,)
  }

setInterval(() => {
  tick()
}, 1000);