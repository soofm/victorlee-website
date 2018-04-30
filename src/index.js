import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import NavComponent from './nav';
import ContentComponent from './content';

ReactDOM.render(
  <div>
    <NavComponent />
    <ContentComponent />
  </div>,
  document.getElementById('root')
);