import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import Header from './header';
import Home from './routes/home/home';
import Connect4 from './routes/connect4/connect4';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/connect4" component={Connect4} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
