import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  function Rectangle(props) {//lets Rectangle component to “remember” that it got clicked 
    //store the current value of the Retangle in this.state, and change it when it is clicked
    if (props.value=="red")
    { 
      return (
        <button className="squareRed" >
        
        </button>
      );
    }
    if (props.value=="yellow")
    { 
      return (
        <button className="squareYellow">
          
        </button>
      );
    }
    else 
      return (
        <button className="rectangle" onClick={props.onClick}>
          {props.value}
        </button>
      );
    




  }
class Board extends React.Component {
  constructor(props) { //adding a constructor to the Board 
    super(props);
    this.state = { //setting the Board’s initial state to contain an array of 42 nulls corresponding to the squares
      squares: Array(42).fill(null),
      redIsNext: true,
    };

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i] ) {
      return
    }
    squares[i] = this.state.redIsNext ? 'red' : 'yellow';
    this.setState({
      squares: squares,
      redIsNext: !this.state.redIsNext,

    });
  }
  renderRectangle(i) {
    return <Rectangle value={this.state.squares[i]} onClick={() => this.handleClick(i) }/>; // changes the code to pass a prop called value to the rectangle
    
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    let count=0;
    if (winner) {
      status = 'Winner: ' + winner;
    } 
    else {
      status = 'Next player: ' + (this.state.redIsNext ? 'red' : 'yellow');
    }
    for (let b=0; b<42; b++){
      if (this.state.squares[b]!=null) count++;
    }
    if (count==42){ status = 'Game Over: ';}
  

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderRectangle(0)}
          {this.renderRectangle(1)}
          {this.renderRectangle(2)}
          {this.renderRectangle(3)}
          {this.renderRectangle(4)}
          {this.renderRectangle(5)}
          {this.renderRectangle(6)}
        </div>
        <div className="board-row">
          {this.renderRectangle(7)}
          {this.renderRectangle(8)}
          {this.renderRectangle(9)}
          {this.renderRectangle(10)}
          {this.renderRectangle(11)}
          {this.renderRectangle(12)}
          {this.renderRectangle(13)}
        </div>
        <div className="board-row">
          {this.renderRectangle(14)}
          {this.renderRectangle(15)}
          {this.renderRectangle(16)}
          {this.renderRectangle(17)}
          {this.renderRectangle(18)}
          {this.renderRectangle(19)}
          {this.renderRectangle(20)}
        </div>
         <div className="board-row">
          {this.renderRectangle(21)}
          {this.renderRectangle(22)}
          {this.renderRectangle(23)}
          {this.renderRectangle(24)}
          {this.renderRectangle(25)}
          {this.renderRectangle(26)}
          {this.renderRectangle(27)}
        </div>
         <div className="board-row">
          {this.renderRectangle(28)}
          {this.renderRectangle(29)}
          {this.renderRectangle(30)}
          {this.renderRectangle(31)}
          {this.renderRectangle(32)}
          {this.renderRectangle(33)}
          {this.renderRectangle(34)}
        </div>
         <div className="board-row">
          {this.renderRectangle(35)}
          {this.renderRectangle(36)}
          {this.renderRectangle(37)}
          {this.renderRectangle(38)}
          {this.renderRectangle(39)}
          {this.renderRectangle(40)}
          {this.renderRectangle(41)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    //row1
    [0,1,2,3], 
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    //row2
    [7,8,9,10],
    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    //row3
    [14,15,16,17],
    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    //row4
    [21,22,23,24],
    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    //row5
    [28,29,30,31],
    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    //row6
    [35,36,37,38],
    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    //column1
    [0,7,14,21],
    [7,14,21,28],
    [14,21,28,35],
    //column2
    [1,8,15,22],
    [8,15,22,29],
    [15,22,29,36],
    //column3
    [2,9,16,23],
    [9,16,23,30],
    [16,23,30,37],
    //column4
    [3,10,17,24],
    [10,17,24,31],
    [17,24,31,38],
    //column5
    [4,11,18,25],
    [11,18,25,32],
    [18,25,32,39],
    //column6
    [5,12,19,26],
    [12,19,26,33],
    [19,26,33,40],
    //column7
    [6,13,20,27],
    [13,20,27,34],
    [20,27,34,41],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d]= lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a]===squares[d]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

