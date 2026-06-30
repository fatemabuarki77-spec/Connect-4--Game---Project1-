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
console.log(firstColumnEl);
console.log(secondColumnEl);
console.log(thirdColumnEl);
console.log(fourthColumnEl);
console.log(fifthColumnEl);
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
const firstColumnElement = [];
const secondColumnElement = [];
const thirdColumnElement = [];
const fourthColumnElement = [];
const fifthColumnElement = [];
/*-------------------------------- Functions --------------------------------*/
function init() {
  board = Array(rows * colms).fill("");
  winner = false;
  tie = false;
  turn = "🔴";
}

function checkWinner() {
  winningCombos.forEach((combo) => {
    const a = board[combo[0]];
    const b = board[combo[1]];
    const c = board[combo[2]];
    const d = board[combo[3]];

    if (a && a === b && a === c && a === d) {
      winner = true;
    }
  });
}
function checkTie() {
  if (winner !== false) return;
  if (board.every((cell) => cell !== "")) {
    tie = true;
  }
}

/*function checkWinner() {
  for (let combo of winningCombos) {
    const [a, b, c, d] = combo;
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[a] === board[c] &&
      board[a] === board[d]
    ) {
      winner = true;
      return;
    }
  }
}*/

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
/*----------------------------- Event Listeners -----------------------------*/
resetBtn.addEventListener("click", init);
startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  mainGameContainer.style.display = "flex";
});

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
  });
});

init();
updateStatus();
