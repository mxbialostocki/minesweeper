document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
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
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  board.cells.forEach(cell => {
    cell.surroundingMines = function () {
      for (i = 0; i < board.cells.length; i++) {
        countSurroundingMines(board.cells[i])
      }
    }
  }); 
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  /*for (i = 0; i < cells.length; i++) {
    if (cells[i].isMine == false && cells[i].hidden == false) {
      if (cells[i].isMine == true && cells[i].hidden == true) {

      }

    }*/
    lib.displayMessage('You win!')

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

