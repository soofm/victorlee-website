import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import NavComponent from './nav';
import HomeComponent from './routes/home/home';
import Connect4Game from './routes/connect4/connect4';

ReactDOM.render(
  <div>
    <NavComponent />
    <HomeComponent />
    <Connect4Game />
  </div>,
  document.getElementById('root')
);