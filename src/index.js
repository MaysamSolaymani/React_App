import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {myTimer} from './mogule.js'

class Timer extends React.Component{
  render(){
    return <h2>the time is {new Date().toLocaleTimeString()}</h2>
  }
}


const tick = () =>
  {
    ReactDOM.createRoot(document.getElementById('root')).render(<Timer/>,)
  }

setInterval(() => 
  {  tick() }, 1000);