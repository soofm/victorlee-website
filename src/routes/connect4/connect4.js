import React, { Component } from 'react';
import './connect4.scss';

function Square(props) {
  return (
    <div className="board-square" onClick={props.onClick}>
      <div className="board-circle">
        {props.value}
      </div>
    </div>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
              key={i}
      />
    )
  };
  render() {
    const boardSize = 7;
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      let row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(boardSize * i + j));
      }
      board.push(<div className="board-row" key={i}>{row}</div>);
    }
    return (
      <div className="board">
        {board}
      </div>
    );
  }
}

class Connect4Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(49).fill(null)
    };
  }
  render() {
    return (
      <Board squares={this.state.squares}
             onClick={(i) => console.log(i)} />
    )
  }
}

export default Connect4Game;