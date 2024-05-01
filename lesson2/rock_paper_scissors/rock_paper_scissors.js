const readline = require("readline-sync");
const WINNING_COMBOS = require("./rock_paper_scissors.json").winningCombos;
const VALID_MOVES = Object.getOwnPropertyNames(WINNING_COMBOS);
const VULCAN_SALUTE = "🖖";

// We need this info inside some function calls
const FIRST_TO = 3; // win three rounds to win the game
let playerRounds = 0;
let compRounds = 0;

/** -------------------------- DISPLAY FUNCTIONS --------------------------- */

function prompt(message) {
  function oneLinePrompt(msg) {
    if (msg === "") {
      console.log();
    } else {
      console.log(`=> ${msg}`);
    }
  }

  if (!message.includes("\n")) {
    oneLinePrompt(message);
    return;
  }

  let messages = message.split("\n");
  messages.forEach((msg) => {
    oneLinePrompt(msg);
  });
}

function errorPrompt(message) {
  console.log(`>>> INPUT ERROR!! ${message} <<<\n`);
}

function displayRules() {
  let rules = "";
  VALID_MOVES.forEach((winningMoveAbbr, index) => {
    let winningMove = WINNING_COMBOS[winningMoveAbbr];
    let losingMovesNames = [];

    Object.getOwnPropertyNames(winningMove.beats).forEach((losingMoveAbbr) => {
      losingMovesNames.push(WINNING_COMBOS[losingMoveAbbr].name);
    });

    rules += `${winningMove.name} beats ${losingMovesNames.join(" and ")}`;

    if (index !== VALID_MOVES.length - 1) {
      rules += "\n";
    }
  });
  prompt(rules);
}

function welcomeSequence() {
  console.clear();
  let welcomePrompt =
    "Welcome to Rock, Paper, Scissors, Lizard, Spock" +
    "\nIt's an extended version of the classic Rock, Paper, Scissors" +
    "\nPress enter once to continue to the rules of the game";
  prompt(welcomePrompt);

  readline.question();

  console.clear();
  displayRules();

  prompt("\nPress enter to continue to the game");
  readline.question();
}

function displayRoundWinner(roundResult, playerMoveAbbr, compMoveAbbr) {
  let playerMove = WINNING_COMBOS[playerMoveAbbr];
  let compMove = WINNING_COMBOS[compMoveAbbr];
  prompt(
    `Player move: ${playerMove.name}  |  Computer move: ${compMove.name}\n`
  );
  if (roundResult === 0) {
    prompt("It's a tie!");
  } else if (roundResult === 1) {
    prompt(
      `${playerMove.name} ${playerMove.beats[compMoveAbbr]} ${compMove.name}`
    );
    prompt("Player wins the round!");
  } else {
    prompt(
      `${compMove.name} ${compMove.beats[playerMoveAbbr]} ${playerMove.name}`
    );
    prompt("Computer wins the round!");
  }
}

// there's no tie for final winner
function displayGameWinner() {
  let winner = playerRounds > compRounds ? "Player" : "Computer";
  prompt(
    `${winner} was first to win ${FIRST_TO} round${FIRST_TO > 1 ? "s" : ""}\n`
  );
  prompt(`${winner} wins the game!!!\n`);
}

function refreshRoundsWonDisplay() {
  console.clear();
  prompt(
    `First to win ${FIRST_TO} round${FIRST_TO > 1 ? "s" : ""} wins the game!`
  );
  prompt(`Player: ${playerRounds}  |  Computer: ${compRounds}`);
  console.log("==========================================================");
}

/** ------------------------------------------------------------------------ */

/** ------------------------- USER INPUT FUNCTIONS ------------------------- */

// trim and lowercase user input before returning the value
function getCleanedInput(promptMessage) {
  prompt(promptMessage);
  return readline.question().trim().toLowerCase();
}

function playAgain() {
  const AGAIN_OPTIONS = ["y", "n"];
  const DO_AGAIN = "y";

  function getAgain() {
    return getCleanedInput([`Play again? (${AGAIN_OPTIONS.join("/")})`]);
  }
  let again = getAgain();
  while (!AGAIN_OPTIONS.includes(again)) {
    refreshRoundsWonDisplay();
    errorPrompt(`Invalid input! Choose: (${AGAIN_OPTIONS.join(", ")})`);
    again = getAgain();
  }
  return again === DO_AGAIN;
}

function getPlayerMoveAbbr() {
  function getMove() {
    let promptMessages = "Choose your move:\n";
    VALID_MOVES.forEach((moveAbbr) => {
      promptMessages += ` (${moveAbbr}): ${WINNING_COMBOS[moveAbbr].name}\n`;
    });
    return getCleanedInput(promptMessages);
  }

  let moveAbbr = getMove();
  while (!VALID_MOVES.includes(moveAbbr)) {
    refreshRoundsWonDisplay();
    errorPrompt(
      `Invalid input! Available choices: (${VALID_MOVES.join(", ")})`
    );
    moveAbbr = getMove();
  }

  return moveAbbr;
}

/** ------------------------------------------------------------------------ */

/** -------------------------- COMPUTE FUNCTIONS --------------------------- */

function determineCompMoveAbbr() {
  let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randomIndex];
}

// 1: player wins, 0: tie, -1: computer wins
function computeRoundResult(playerMoveAbbr, compMoveAbbr) {
  if (playerMoveAbbr === compMoveAbbr) {
    return 0;
  }
  if (WINNING_COMBOS[playerMoveAbbr].beats[compMoveAbbr]) {
    return 1;
  }
  return -1;
}

/** ------------------------------------------------------------------------ */

/** ------------------------------ MAIN LOGIC ------------------------------ */

welcomeSequence();

while (true) {
  playerRounds = 0;
  compRounds = 0;

  while (playerRounds < FIRST_TO && compRounds < FIRST_TO) {
    refreshRoundsWonDisplay();
    let playerMoveAbbr = getPlayerMoveAbbr();
    let compMoveAbbr = determineCompMoveAbbr();

    let roundResult = computeRoundResult(playerMoveAbbr, compMoveAbbr);
    if (roundResult === 1) {
      playerRounds += 1;
    } else if (roundResult === -1) {
      compRounds += 1;
    }

    refreshRoundsWonDisplay();
    displayRoundWinner(roundResult, playerMoveAbbr, compMoveAbbr);
    prompt("\nPress enter to continue");
    readline.question();
  }

  refreshRoundsWonDisplay();
  displayGameWinner();

  if (!playAgain()) {
    break;
  }
}

console.clear();
prompt(`\nThank you for playing! See you next time! ${VULCAN_SALUTE}\n`);

/** ------------------------------------------------------------------------ */
