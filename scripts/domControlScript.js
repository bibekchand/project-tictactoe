let gameOver = false;
let count = 0;
const dialog = document.querySelector("dialog");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", newGameEventHandler);
function newGameEventHandler(e) {
  const choice = e.target.textContent;
  const computerChoice = choice == "x" ? "o" : "x";
  const container = document.querySelector(".container");
  container.addEventListener("click", myFunc);
  function myFunc(e) {
    if (e.target.getAttribute("class") == "box") {
      let index = parseInt(e.target.getAttribute("data-index"));
      if (index == 0 || index == 1 || index == 2) {
        if (!Gameboard.checkIndices(0, index))
          checkCondition(choice, 0, index, computerChoice);
      } else {
        let i = parseInt(index / 10);
        let j = parseInt(index % 10);
        if (!Gameboard.checkIndices(i, j))
          checkCondition(choice, i, j, computerChoice);
      }
      if (count == 5 && gameOver == false) {
        dialog.textContent = "Draw";
        dialog.showModal();
      }
      printArrayToDOM();
    }
  }
}

function setComputerIndex(computerChoice) {
  let i = 0;
  let j = 0;
  if (count < 5) {
    while (Gameboard.checkIndices(i, j)) {
      i = Math.floor(Math.random() * 3);
      j = Math.floor(Math.random() * 3);
    }
    Gameboard.enterChoice(computerChoice, i, j);
  }
}

//function adds the choice to array and now according to array it just prints x's in the dom
//print Array on the DOM
function printArrayToDOM() {
  let arr = Gameboard.arr.flat();
  let i = 0;
  const box = document.querySelectorAll(".box");
  box.forEach((item) => {
    item.textContent = arr[i];
    item.style.setProperty("font-size", "60px");
    i++;
  });
}

function checkCondition(choice, first, second, computerChoice) {
  count++;
  Gameboard.enterChoice(choice, first, second);
  if (Gameboard.checkGameState(choice) == true) {
    dialog.textContent = `${choice} wins`;
    dialog.showModal();
    gameOver = true;
  }
  setComputerIndex(computerChoice);
  if (Gameboard.checkGameState(computerChoice) == true && gameOver == false) {
    dialog.textContent = `${computerChoice} wins`;
    dialog.showModal();
    gameOver = true;
  }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      Gameboard.arr[i][j] = "";
    }
  }
  gameOver = false;
  printArrayToDOM();
});


// window.addEventListener("keypress", ()=>{
//   dialog.close(); 
// })
