let Gameboard = (function () {
  let gameOver = false;
  let winner = undefined;
  const arr = [];
  //initialize the 2D array
  function clearArray() {
    for (let i = 0; i < 3; i++) {
      arr.push([0, 0, 0]);
    }
  }
  function checkIndices(i, j) {
    if (arr[i][j] == 'x' || arr[i][j] == 'o') return true;
  }

  let enterChoice = (player, i, j) => {
    arr[i][j] = player;
  };

  const printArray = () => {
    console.log(arr);
  };
  //check the rows
  let checkGameState = function (player) {
    for (let i = 0; i < 3; i++) {
      if (arr[i][0] == player && arr[i][1] == player && arr[i][2] == player) {
        gameOver = true;
        winner = player;
        break;
      }
    }
    //check the columns
    for (let i = 0; i < 3; i++) {
      if (arr[0][i] == player && arr[1][i] == player && arr[2][i] == player) {
        gameOver = true;
        winner = player;
        break;
      }
    }
    //Check one diagonal

    if (arr[0][0] == player && arr[1][1] == player) {
      gameOver = true;
      winner = player;
    }

    //check second diagonal
    if (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player) {
      gameOver = true;
      winner = player;
    }
    return { gameOver, winner };
  };
  return { checkGameState, enterChoice, printArray, clearArray, checkIndices };
})();
function Player(player) {
  function playerChoice(i, j) {
    Gameboard.enterChoice(player, i, j);
  }
  return {playerChoice};
}
