document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
/*var board = {
  cells: [
    { row: 1,   col: 1, isMine: true,   hidden: true },
    { row: 1,   col: 2, isMine: false,  hidden: true },
    { row: 1,   col: 3, isMine: true,   hidden: true },
    { row: 2,   col: 1, isMine: false,  hidden: true },
    { row: 2,   col: 2, isMine: false,  hidden: true },
    { row: 2,   col: 3, isMine: false,  hidden: true },
    { row: 3,   col: 1, isMine: false,  hidden: true },
    { row: 3,   col: 2, isMine: false,  hidden: true },
    { row: 3,   col: 3, isMine: false,  hidden: true }
  ]
}*/
var board = generateNewBoard(5);

// function that generates new blank board
function generateNewBoard (rows) {
  var board = {
    cells: []
  };
  // function takes arguments to determine row . col
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= rows; j++) {
      board.cells.push( { row: i, col: j, isMine: true, isMarked: false, hidden: true } );
    };
  }
  return board;
  console.log(board);

}

function startGame () {
 
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextMenu', checkForWin);

  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };
  
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (i = 0; i < board.cells.length; i++) {
    var currentCell = board.cells[i];
    if (currentCell.isMine == true && currentCell.isMarked == false) {
      return;
    } else if (currentCell.isMine == false && currentCell.hidden == true) {
      return;
    } 
  }
  lib.displayMessage('You win!');
} 

  

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
   
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var mines = 0;
  var surroundingArr = lib.getSurroundingCells(cell.row, cell.col);
  surroundingArr.map(cell => {
    if (cell.isMine == true) {
      mines++;
    }
  });
  return mines;
}
