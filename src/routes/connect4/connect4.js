import React, { Component } from 'react';
import './connect4.scss';

const boardSize = 7;

function Square(props) {
  return (
    <div className="board-square" onClick={props.onClick}>
      {
        props.value ? <div className={`board-circle ${props.value}`} /> : null
      }
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
  };
  render() {
    const board = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        board.push(this.renderSquare((boardSize * i) + j));
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
      squares: Array(49).fill(null),
    };
  }
  placePiece(square) {
    const col = square % boardSize;
    const copy = this.state.squares.slice(0);
    for (let i = boardSize - 1; i>=0; i--) {
      const sq = (boardSize * i) + col;
      if (copy[sq] == null) {
        copy[sq] = 'player';
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
