/*------------------------ Cached Element References ------------------------*/
const boardElement = document.querySelectorAll(`.board`);
const cellElement = document.querySelectorAll(`.cell`);
const statusElement = document.querySelectorAll(`.status`);
const resetBtn = document.querySelector(`#reset`);
const firstColumnEl = document.querySelectorAll(".firstColumnCell");
const secondColumnEl = document.querySelectorAll(".secondColumnCell");
const thirdColumnEl = document.querySelectorAll(".thirdColumnCell");
const fourthColumnEl = document.querySelectorAll(".fourthColumnCell");
const fifthColumnEl = document.querySelectorAll(".fifthColumnCell");
const statusEl = document.querySelector(`#status`);
console.log(typeof firstColumnEl);
console.log(secondColumnEl);
console.log(thirdColumnEl);
console.log(fourthColumnEl);
console.log(fifthColumnEl);
/*-------------------------------- Constants --------------------------------*/
const board = [
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
];
const rows = 5;
const colms = 5;
const winningCombos = [
  [6, 7, 8, 9],
  ,
  [11, 12, 13, 14],
  ,
  [16, 17, 18, 19],
  ,
  [21, 22, 23, 24],

  [6, 11, 16, 21],
  ,
  [7, 12, 17, 22],
  ,
  [8, 13, 18, 23],
  ,
  [9, 14, 19, 24],
];

/*---------------------------- Variables (state) ----------------------------*/

let turn = "🔴";
let winner = false;
let tie = false;
const firstColumnElement = [];
const secondColumnElement = [];
const thirdColumnElement = [];
const fourthColumnElement = [];
const fifthColumnElement = [];
/*-------------------------------- Functions --------------------------------*/
function init() {
  board.fill("");
  winner = false;
  tie = false;
  turn = "🔴";
  render();
}

function isValid(r, c) {
  return r >= 0 && r < rows && c >= 0 && c < colms;
}

function placePiece(index) {
  board[index] = turn;
  console.log(board);

  if (!winner) return;
}
function dropPiece(colIndex) {
  if (!winner) return;
}

function checkWinner() {
  winningCombos.forEach((combo) => {
    const a = board[combo[0]];
    const b = board[combo[1]];
    const c = board[combo[2]];
    const d = board[combo[3]];
    const e = board[combo[4]];

    if (a && a === b && b === c && c === d && d === e) {
      winner = true;
    }
  });
}

function switchPlayerTurn() {
  if (winner !== false) return;
  console.log("turn");

  if (turn === "🔴") {
    turn = "🟡";
  } else {
    turn = "🔴";
  }
}
function updateStatus() {
  if (winner === false && tie === false) {
    statusEl.textContent = `It's ${turn}'s turn!`;
  } else if (winner === false && tie === true) {
    statusEl.textContent = "It's a tie game!";
  } else {
    statusEl.textContent = `Congratulations! Player ${turn} wins!`;
  }
}

function handleClick(colIndex) {
  if (winner === false) {
    return;
  }
}
function playerValue() {
  if (currentPlayer === "Red") {
    currentPlayer = "Yellow";
  } else {
    currentPlayer = "Red";
  }
  document.getElementById("status").textContent = currentPlayer + "'s Turn";
}
function render() {
  switchPlayerTurn();
  checkWinner();
  handleClick();
  placePiece();
  render();
}

/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener("click", init);

firstColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      firstColumnElement.push("RED");
      console.log(firstColumnElement);
    } else if (turn === "🟡") {
      firstColumnElement.push("YELLOW");
      console.log(firstColumnElement);
    }
    console.log(firstColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    firstColumnElement.forEach((element, index) => {
      console.log("in for");
      if (element === "RED") firstColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        firstColumnEl[index].style.backgroundColor = "yellow";
    });
    switchPlayerTurn();
    updateStatus();
  });
});
secondColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;
  });
});

secondColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      secondColumnElement.push("RED");
      console.log(secondColumnElement);
    } else if (turn === "🟡") {
      secondColumnElement.push("YELLOW");
      console.log(secondColumnElement);
    }
    console.log(secondColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    secondColumnElement.forEach((element, index) => {
      console.log("in for");
      if (element === "RED")
        secondColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        secondColumnEl[index].style.backgroundColor = "yellow";
    });
    switchPlayerTurn();
    updateStatus();
  });
});
thirdColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      thirdColumnElement.push("RED");
      console.log(thirdColumnElement);
    } else if (turn === "🟡") {
      thirdColumnElement.push("YELLOW");
      console.log(thirdColumnElement);
    }
    console.log(thirdColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    thirdColumnElement.forEach((element, index) => {
      console.log("in for");
      if (element === "RED") thirdColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        thirdColumnEl[index].style.backgroundColor = "yellow";
    });
    switchPlayerTurn();
    updateStatus();
  });
});
fourthColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      fourthColumnElement.push("RED");
      console.log(fourthColumnElement);
    } else if (turn === "🟡") {
      fourthColumnElement.push("YELLOW");
      console.log(fourthColumnElement);
    }
    console.log(fourthColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    fourthColumnElement.forEach((element, index) => {
      console.log("in for");
      if (element === "RED")
        fourthColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        fourthColumnEl[index].style.backgroundColor = "yellow";
    });
    switchPlayerTurn();
    updateStatus();
  });
});

fifthColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      fifthColumnElement.push("RED");
      console.log(fifthColumnElement);
    } else if (turn === "🟡") {
      fifthColumnElement.push("YELLOW");
      console.log(fifthColumnElement);
    }
    console.log(fifthColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    fifthColumnElement.forEach((element, index) => {
      console.log("in for");
      if (element === "RED") fifthColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        fifthColumnEl[index].style.backgroundColor = "yellow";
    });
    switchPlayerTurn();
    updateStatus();
  });
});
