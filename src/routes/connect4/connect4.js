import React, { Component } from 'react';
import './connect4.scss';

const BOARD_ROWS = 6;
const BOARD_COLS = 7;

function Square(props) {
  return (
    <div className="board-square" onClick={props.onClick}>
      {props.value && <div className={`board-circle ${props.value === 1 ? 'player' : 'ai'}`} />}
    </div>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <div key={`wrapper${i}`} className="board-square-wrapper">
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          key={i}
        />
      </div>
    );
  }
  render() {
    const board = [];
    for (let i = 0; i < BOARD_ROWS; i++) {
      for (let j = 0; j < BOARD_COLS; j++) {
        board.push(this.renderSquare((BOARD_COLS * i) + j));
      }
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
      squares: Array(BOARD_ROWS * BOARD_COLS).fill(null),
    };
  }
  hasWinner() {
    // horizontal
    return 0;
  }
  placePiece(square) {
    const col = square % BOARD_COLS;
    const copy = this.state.squares.slice(0);
    for (let i = BOARD_ROWS - 1; i>=0; i--) {
      const sq = (BOARD_COLS * i) + col;
      if (copy[sq] == null) {
        copy[sq] = 1;
        break;
      }
    }
    this.setState({
      squares: copy
    });
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
