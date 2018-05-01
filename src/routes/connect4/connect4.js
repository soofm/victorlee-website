import React, { Component } from 'react';
import {
  Container,
  Col,
  Row,
} from 'reactstrap';
import './connect4.scss';

function Square(props) {
  return (
    <button className="btn-square" onClick={props.onClick}>
      <div className="border rounded-circle">
        {props.value}
      </div>
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
      />
    )
  };
  render() {
    return (
      <div>
        {this.renderSquare(0)}
      </div>
    );
  }
}

class Connect4Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0
    };
  }
  render() {
    return (
      <div>
        <Board />
      </div>
    )
  }
}