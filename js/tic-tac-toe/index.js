let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const resetButton = document.querySelector(".reset");

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin();
});

function displayTurn(turn) {
  document.querySelector(".turn").innerText = `${turn} turn`;
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")
  for (let i = 0; i < 3; i++) {
    console.log(symbols);
    // column check
    const col = symbols[i];
    if (col[0] != "" && col[0] === col[1] && col[1] === col[2]) {
      alert(`${col[0]} won`);
    }
    // row check
    if (symbols[0][i] != "" && symbols[0][i] === symbols[1][i] && symbols[1][i] === symbols[2][i]) {
      alert(`${symbols[0][i]} won`);
    }
  }
  // diagonal check
  if (symbols[0][0] != "" && symbols[0][0] == symbols[1][1] && symbols[1][1] == symbols[2][2]) {
    alert(`${symbols[0][0]} won`);
  } else if (symbols[0][2] != "" && symbols[0][2] == symbols[1][1] && symbols[1][1] == symbols[2][0]) {
    alert(`${symbols[0][2]} won`);
  }

}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  tiles.forEach(element => {
    element.classList = "tile";
  });
}

resetButton.addEventListener("click", reset);