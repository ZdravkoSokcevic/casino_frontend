import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/App';
import StartScreen from './components/StartScreen';
import './index.css';

ReactDOM.render(
  // <StartScreen/>,
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <StartScreen/>,
  document.getElementById('startScreen')
)
