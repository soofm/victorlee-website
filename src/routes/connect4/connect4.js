import React, { Component } from 'react';
import './connect4.scss';

const boardSize = 7;

function Square(props) {
  return (
    <div className="board-square" onClick={props.onClick}>
      <div className="board-circle">
        {props.value}
      </div>
    </div>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  };
  render() {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      const row = [];
      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare((boardSize * i) + j));
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

class Connect4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(49).fill(null),
    };
  }
  placePiece(square) {
    const col = square % boardSize;
    const copy = this.state.squares.slice(0);
    for (let i = boardSize - 1; i>=0; i--) {
      const sq = (boardSize * i) + col;
      if (copy[sq] == null) {
        console.log(`placing piece @ ${sq}`);
        copy[sq] = 'O';
        continue;
      }
    }
    this.setState(copy);
  }
  render() {
    return (
      <Board
        squares={this.state.squares}
        onClick={(i) => this.placePiece(i)}
      />
    );
  }
}

export default Connect4;
