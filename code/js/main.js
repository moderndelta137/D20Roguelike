const boardGrid = document.getElementById("boardGrid");
const logPanel = document.getElementById("logPanel");
const rollButton = document.getElementById("rollButton");
const advanceButton = document.getElementById("advanceButton");

const state = {
  floor: 1,
  hp: 12,
  dice: 20,
  heroPosition: 14,
  log: ["Welcome to the D20 Roguelike prototype.", "Roll the dice to resolve encounters."]
};

const tiles = Array.from({ length: 24 }, (_, index) => index + 1);

function renderBoard() {
  boardGrid.innerHTML = "";
  tiles.forEach((tileId) => {
    const tile = document.createElement("div");
    tile.className = "board__tile";
    tile.textContent = tileId;
    if (tileId === state.heroPosition) {
      tile.classList.add("board__tile--hero");
      tile.textContent = "@";
    }
    boardGrid.appendChild(tile);
  });
}

function updateStats() {
  document.getElementById("floorValue").textContent = state.floor;
  document.getElementById("hpValue").textContent = state.hp;
  document.getElementById("diceValue").textContent = `1d${state.dice}`;
}

function pushLog(message) {
  state.log.unshift(message);
  logPanel.innerHTML = state.log
    .slice(0, 6)
    .map((entry) => `<p>${entry}</p>`)
    .join("");
}

function rollDice() {
  const roll = Math.ceil(Math.random() * state.dice);
  pushLog(`Rolled a ${roll}.`);

  if (roll >= 15) {
    pushLog("Critical success! Gain 1 HP.");
    state.hp += 1;
  } else if (roll <= 5) {
    pushLog("Trap sprung! Lose 1 HP.");
    state.hp = Math.max(0, state.hp - 1);
  } else {
    pushLog("Steady progress on the board.");
  }

  updateStats();
}

function advanceTurn() {
  state.heroPosition = state.heroPosition % tiles.length + 1;
  if (state.heroPosition === 1) {
    state.floor += 1;
    pushLog(`Descended to floor ${state.floor}.`);
  } else {
    pushLog("Moved to the next tile.");
  }
  renderBoard();
  updateStats();
}

rollButton.addEventListener("click", rollDice);
advanceButton.addEventListener("click", advanceTurn);

renderBoard();
updateStats();
state.log.slice().reverse().forEach((entry) => pushLog(entry));
