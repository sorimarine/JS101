const readline = require("readline-sync");
const WINNING_COMBOS = require("./rock_paper_scissors.json").winningCombos;
const VALID_MOVES = Object.getOwnPropertyNames(WINNING_COMBOS);

// We need this info inside some function calls
const FIRST_TO = 3; // win three rounds to win the game
let playerRounds = 0;
let compRounds = 0;

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

function printRules() {
  let rules = "";
  VALID_MOVES.forEach((winningMoveAbr, index) => {
    let winningMove = WINNING_COMBOS[winningMoveAbr];
    let losingMovesNames = [];
    Object.getOwnPropertyNames(winningMove.beats).forEach((losingMoveAbr) => {
      losingMovesNames.push(WINNING_COMBOS[losingMoveAbr].name);
    });
    rules += `${winningMove.name} beats ${losingMovesNames.join(" and ")}`;
    if (index !== VALID_MOVES.length - 1) {
      rules += "\n";
    }
  });
  prompt(rules);
}

function welcome() {
  console.clear();
  let welcomePrompt =
    "Welcome to Rock, Paper, Scissors, Lizard, Spock" +
    "\nIt's an extended version of the classic Rock, Paper, Scissors" +
    "\nPress enter once to continue to the rules of the game";
  prompt(welcomePrompt);

  readline.question();

  console.clear();
  printRules();

  prompt("\nPress enter to continue to the game");
  readline.question();
}

function displayRoundWinner(roundResult, playerMoveAbr, compMoveAbr) {
  console.log;
  prompt(
    `Player move: ${WINNING_COMBOS[playerMoveAbr].name}  ` +
      `|  Computer move: ${WINNING_COMBOS[compMoveAbr].name}`
  );
  if (roundResult === 0) {
    prompt("It's a tie!");
  } else if (roundResult === 1) {
    prompt(
      `${WINNING_COMBOS[playerMoveAbr].name} ${WINNING_COMBOS[playerMoveAbr].beats[compMoveAbr]} ${WINNING_COMBOS[compMoveAbr].name}`
    );
    prompt("Player wins!");
  } else {
    prompt(
      `${WINNING_COMBOS[compMoveAbr].name} ${WINNING_COMBOS[compMoveAbr].beats[playerMoveAbr]} ${WINNING_COMBOS[playerMoveAbr].name}`
    );
    prompt("Computer wins!");
  }
  console.log();
}

// there's no tie for final winner
function displayGameWinner() {
  prompt(
    `The final winner is: ${playerRounds > compRounds ? "PLAYER" : "COMPUTER"}!`
  );
}

function refreshRoundsWon() {
  console.clear();
  prompt(
    `First to win ${FIRST_TO} round${FIRST_TO > 1 ? "s" : ""} wins the game!`
  );
  prompt(`Player: ${playerRounds}  |  Computer: ${compRounds}`);
  console.log("==========================================================");
}

// trim and lowercase user input before returning the value
function getCleanedInput(promptMessages) {
  for (let index = 0; index < promptMessages.length; index += 1) {
    prompt(promptMessages[index]);
  }
  return readline.question().trim().toLowerCase();
}

function getPlayerMoveAbr() {
  function getMove() {
    let promptMessages = ["Choose your move: "];
    VALID_MOVES.forEach((moveAbr) => {
      promptMessages.push(` (${moveAbr}): ${WINNING_COMBOS[moveAbr].name}`);
    });
    return getCleanedInput(promptMessages);
  }

  let moveAbr = getMove();
  while (!VALID_MOVES.includes(moveAbr)) {
    refreshRoundsWon();
    errorPrompt(
      `Invalid input! Available choices: (${VALID_MOVES.join(", ")})`
    );
    moveAbr = getMove();
  }

  return moveAbr;
}

function getCompMoveAbr() {
  let randomIndex = Math.floor(Math.random() * VALID_MOVES.length);
  return VALID_MOVES[randomIndex];
}

// 1: player wins, 0: tie, -1: computer wins
function computeRoundResult(playerMoveAbr, compMoveAbr) {
  if (playerMoveAbr === compMoveAbr) {
    return 0;
  }
  if (WINNING_COMBOS[playerMoveAbr].beats[compMoveAbr]) {
    return 1;
  }
  return -1;
}

function playAgain() {
  const AGAIN_OPTIONS = ["y", "n"];
  const DO_AGAIN = "y";

  function getAgain() {
    return getCleanedInput([`Play again? (${AGAIN_OPTIONS.join("/")})`]);
  }
  let again = getAgain();
  while (!AGAIN_OPTIONS.includes(again)) {
    refreshRoundsWon();
    errorPrompt(`Invalid input! Choose: (${AGAIN_OPTIONS.join(", ")})`);
    again = getAgain();
  }
  return again === DO_AGAIN;
}

welcome();

while (true) {
  playerRounds = 0;
  compRounds = 0;

  while (playerRounds < FIRST_TO && compRounds < FIRST_TO) {
    refreshRoundsWon();
    let playerMoveAbr = getPlayerMoveAbr();
    let compMoveAbr = getCompMoveAbr();

    let roundResult = computeRoundResult(playerMoveAbr, compMoveAbr);
    if (roundResult === 1) {
      playerRounds += 1;
    } else if (roundResult === -1) {
      compRounds += 1;
    }

    refreshRoundsWon();
    displayRoundWinner(roundResult, playerMoveAbr, compMoveAbr);
    console.log();
    prompt("Press enter to continue");
    readline.question();
  }

  refreshRoundsWon();
  displayGameWinner();

  if (!playAgain()) {
    break;
  }
}

prompt("Thank you for playing! See you next time!");
