let Gameboard = (function () {
  const arr = [];
  //initialize the 2D array
  for (let i = 0; i < 3; i++) {
    arr.push(["", "", ""]);
  }
  function checkIndices(i, j) {
    if (arr[i][j] == "x" || arr[i][j] == "o") return true;
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
        return true;
      }
    }
    //check the columns
    for (let i = 0; i < 3; i++) {
      if (arr[0][i] == player && arr[1][i] == player && arr[2][i] == player) {
        return true;
      }
    }
    //Check one diagonal

    if (arr[0][0] == player && arr[1][1] == player && arr[2][2] == player) {
      return true;
    }

    //check second diagonal
    if (arr[0][2] == player && arr[1][1] == player && arr[2][0] == player) {
      return true;
    }
    return false;
  };
  return { checkGameState, enterChoice, printArray, checkIndices, arr };
})();
