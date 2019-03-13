document.addEventListener('DOMContentLoaded', startGame)

// default board is 5x5 with 20% bombs
var board = generateNewBoard(3);
/*
document.addEventListener("click", function () {
  var btnVal = event.target.value;
  var val = btnVal;
  switch (val) {
    case "easy":
      generateNewBoard(4);
      break;
    case "medium":
      generateNewBoard(5);
      break;
    case "hard":
      generateNewBoard(6)
      break;
    default;
  }
});
*/
// function that generates new board

function generateNewBoard (rows) {
  var board = {
    cells: []
  };
  // function takes arguments to determine row . col
  for (i = 1; i <= rows; i++) {
    for (j = 1; j <= rows; j++) {
      board.cells.push( { row: i, col: j, isMine: false, isMarked: false, hidden: true } );
    };

  }
  
  let totalCells = board.cells.length;
  // total bombs is determined by total length of the board
  var bombs = Math.round(0.20 * totalCells);
  var totalBombsPlaced = 0;

  while (totalBombsPlaced < bombs) { 
    
    var x = Math.floor(Math.random() * totalCells);

    if (board.cells[x].isMine == false) {
      board.cells[x].isMine = true;
      totalBombsPlaced++;
    }
  }
    return board;
  
};   


function startGame () {
  
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };  
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextMenu', checkForWin);

  lib.initBoard();
}

// Look for a win condition:
function checkForWin () {
  var totalCellsPlayed = 0;
  board.cells.forEach(function (currentCell) {
    if ((currentCell.isMine && currentCell.isMarked) || (!currentCell.isMine && !currentCell.hidden)) {
      totalCellsPlayed++;
      if (totalCellsPlayed === board.cells.length) {
        lib.displayMessage('You win!');
      }
    }
    
  });
}

// You can use this function call to declare a winner
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
