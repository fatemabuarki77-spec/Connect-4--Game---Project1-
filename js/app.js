/*------------------------ Cached Element References ------------------------*/
const boardElement = document.querySelectorAll(`.board`);
const cellElement = document.querySelectorAll(`.cell`);
const resetBtn = document.querySelector(`#reset`);
const firstColumnEl = document.querySelectorAll(".firstColumnCell");
const secondColumnEl = document.querySelectorAll(".secondColumnCell");
const thirdColumnEl = document.querySelectorAll(".thirdColumnCell");
const fourthColumnEl = document.querySelectorAll(".fourthColumnCell");
const fifthColumnEl = document.querySelectorAll(".fifthColumnCell");
const statusEl = document.querySelector(`#status`);
const welcomeScreen = document.querySelector("#welcome-screen");
const startBtn = document.querySelector("#start-btn");
const mainGameContainer = document.querySelector(".game-container");
/*-------------------------------- Constants --------------------------------*/
const rows = 5;
const colms = 5;
const winningCombos = [
  // Horizontal
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [20, 21, 22, 23],
  [21, 22, 23, 24],
  // Vertical
  [0, 5, 10, 15],
  [5, 10, 15, 20],
  [1, 6, 11, 16],
  [6, 11, 16, 21],
  [2, 7, 12, 17],
  [7, 12, 17, 22],
  [3, 8, 13, 18],
  [8, 13, 18, 23],
  [4, 9, 14, 19],
  [9, 14, 19, 24],
  // Diagonal
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [1, 7, 13, 19],
  [5, 11, 17, 23],
  [4, 8, 12, 16],
  [8, 12, 16, 20],
  [3, 7, 11, 15],
  [9, 13, 17, 21],
];
/*---------------------------- Variables (state) ----------------------------*/
let turn = "🔴";
let winner = false;
let tie = false;
let board = [];
let firstColumnElement = [];
let secondColumnElement = [];
let thirdColumnElement = [];
let fourthColumnElement = [];
let fifthColumnElement = [];
/*-------------------------------- Functions --------------------------------*/
function init() {
  board = Array(rows * colms).fill("");
  firstColumnElement = [];
  secondColumnElement = [];
  thirdColumnElement = [];
  fourthColumnElement = [];
  fifthColumnElement = [];

  winner = false;
  tie = false;
  turn = "🔴";
  console.log("hi");
  render();
}

function checkWinner2(player) {
  const cols = board.length;

  for (let c = 0; c < cols; c++) {
    const rows = board[c].length;

    for (let r = 0; r < rows; r++) {
      // Horizontal →
      if (
        c <= cols - 4 &&
        board[c][r] === player &&
        board[c + 1][r] === player &&
        board[c + 2][r] === player &&
        board[c + 3][r] === player
      )
        return true;

      // Vertical ↑
      if (
        r <= rows - 4 &&
        board[c][r] === player &&
        board[c][r + 1] === player &&
        board[c][r + 2] === player &&
        board[c][r + 3] === player
      )
        return true;

      // Diagonal ↗
      if (
        c <= cols - 4 &&
        board[c][r] === player &&
        board[c + 1][r + 1] === player &&
        board[c + 2][r + 2] === player &&
        board[c + 3][r + 3] === player
      )
        return true;

      // Diagonal ↘
      if (
        c <= cols - 4 &&
        r >= 3 &&
        board[c][r] === player &&
        board[c + 1][r - 1] === player &&
        board[c + 2][r - 2] === player &&
        board[c + 3][r - 3] === player
      )
        return true;
    }
  }

  return false;
}

function render() {
  updateStatus();
  updateBoard();
}
function updateBoard() {
  board.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });
}

/*firstColumnElement.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });

  secondColumnElement.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });
  thirdColumnElement.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });
  fourthColumnElement.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });
  fifthColumnElement.forEach((cell, index) => {
    const cellEl = cellElement[index];
    if (cellEl) {
      if (cell === "🔴") {
        cellEl.style.backgroundColor = "red";
        cellEl.textContent = "🔴";
      } else if (cell === "🟡") {
        cellEl.style.backgroundColor = "yellow";
        cellEl.textContent = "🟡";
      } else {
        cellEl.style.backgroundColor = "";
        cellEl.textContent = "";
      }
    }
  });
}*/

/*function handleClick(event) {
  console.log("hii");
  const cellIndex = event.target.id;

  if (board[cellIndex] === "🔴" || board[cellIndex] === "🟡") return;
  if (winner) return;
}*/

function checkWinner() {
  winningCombos.forEach((combo) => {
    const a = firstColumnElement[combo[0]];
    const b = firstColumnElement[combo[1]];
    const c = firstColumnElement[combo[2]];
    const d = firstColumnElement[combo[3]];
    const e = secondColumnElement[combo[0]];
    const f = secondColumnElement[combo[1]];
    const g = secondColumnElement[combo[2]];
    const h = secondColumnElement[combo[3]];
    const i = thirdColumnElement[combo[0]];
    const j = thirdColumnElement[combo[1]];
    const k = thirdColumnElement[combo[2]];
    const l = thirdColumnElement[combo[3]];
    const m = fourthColumnElement[combo[0]];
    const n = fourthColumnElement[combo[1]];
    const o = fourthColumnElement[combo[2]];
    const p = fourthColumnElement[combo[3]];
    const q = fifthColumnElement[combo[0]];
    const r = fifthColumnElement[combo[1]];
    const s = fifthColumnElement[combo[2]];
    const t = fifthColumnElement[combo[3]];
    if (a && a === b && a === c && a === d) {
      winner = true;
    } else if (e && e === f && e === g && e === h) {
      winner = true;
    } else if (i && i === j && i === k && i === l) {
      winner = true;
    } else if (m && m === n && m === o && m === p) {
      winner = true;
    } else if (q && q === r && q === s && q === t) {
      winner = true;
    }
  });

  updateStatus();
}

function checkTie() {
  if (winner !== false) return;
  if (firstColumnElement.every((cell) => cell !== "")) {
    tie = true;
  }
  if (secondColumnElement.every((cell) => cell !== "")) {
    tie = true;
  }
  if (thirdColumnElement.every((cell) => cell !== "")) {
    tie = true;
  }
  if (fourthColumnElement.every((cell) => cell !== "")) {
    tie = true;
  }
  if (fifthColumnElement.every((cell) => cell !== "")) {
    tie = true;
  }

  updateStatus();
}

function switchPlayerTurn() {
  if (winner !== false) return;
  console.log("turn");

  if (turn === "🔴") {
    turn = "🟡";
  } else {
    turn = "🔴";
  }
  updateStatus();
}

function updateStatus() {
  console.log("winner is:", winner);

  if (winner) {
    if (turn === "🔴") {
      statusEl.textContent = "🎉 Player 🔴 WINS! 🎉";
      statusEl.style.color = "#e74c3c";
    } else {
      statusEl.textContent = "🎉 Player 🟡 WINS! 🎉";
      statusEl.style.color = "#d0ab16";
    }
  } else if (tie) {
    statusEl.textContent = "🤝 IT'S A TIE! 🤝";
    statusEl.style.color = "#2e3334";
  } else {
    statusEl.textContent = `Player ${turn}'s Turn`;
  }
}

checkWinner();
checkTie();
updateStatus();
switchPlayerTurn();
render();
/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener("click", init);
startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  mainGameContainer.style.display = "flex";
});

firstColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (winner) return;
    const gridIndex = event.target.id;

    if (turn === "🔴") {
      firstColumnElement.push("RED");
    } else if (turn === "🟡") {
      firstColumnElement.push("YELLOW");
    }
    console.log(firstColumnElement);
    console.log(`Cell ${gridIndex} successfully clicked!`);

    firstColumnElement.forEach((element, index) => {
      if (element === "RED") firstColumnEl[index].style.backgroundColor = "red";
      else if (element === "YELLOW")
        firstColumnEl[index].style.backgroundColor = "yellow";
    });
    checkWinner();
    switchPlayerTurn();
  });
});

secondColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (winner) return;
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
    checkWinner();
    switchPlayerTurn();
  });
});

thirdColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (winner) return;
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
    checkWinner();
    switchPlayerTurn();
  });
});

fourthColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (winner) return;
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
    checkWinner();
    switchPlayerTurn();
  });
});

fifthColumnEl.forEach((cell) => {
  cell.addEventListener("click", (event) => {
    if (winner) return;
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
    checkWinner();
    switchPlayerTurn();
  });
});

init();
