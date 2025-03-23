//Defining the game board since this'll be played in the terminal 
//Think of the spaces as the boxes in the game
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

//creating a variable that is the current player 
let currentPlayer = '🫀';

//Making sure the game keeps going til there is a loser/winner
let gameActive = true;


function printBoard() {
    console.log(`
      ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
      ---------
      ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
      ---------
      ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
    `);
  }