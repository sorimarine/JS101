const readline = require("readline-sync");
const CALCULATOR_CONF = require("./calculator.json");
const PROMPTS = CALCULATOR_CONF.prompts;
const OPTIONS = CALCULATOR_CONF.options;

let lang = "";
let langChosen = false;

function prompt(key) {
  let message = "";
  if (langChosen) {
    message = PROMPTS[lang][key];
  } else {
    message = PROMPTS[key];
  }
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("languagePrompt");
lang = readline.question().trim();
while (!OPTIONS.languages.includes(lang)) {
  console.clear();
  prompt("languageInvalid");
  prompt("languagePrompt");
  lang = readline.question().trim();
}
langChosen = true;

let again = "1";
while (again.trim() === "1") {
  prompt("firstNum");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    console.clear();
    prompt("numberInvalid");
    prompt("firstNum");
    number1 = readline.question();
  }

  prompt("secondNum");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    console.clear();
    prompt("numberInvalid");
    prompt("secondNum");
    number2 = readline.question();
  }

  prompt("operation");
  let operation = readline.question().trim();

  while (!OPTIONS.operations.includes(operation)) {
    console.clear();
    prompt("operationInvalid");
    prompt("operation");
    operation = readline.question();
  }

  let output;
  number1 = Number(number1);
  number2 = Number(number2);
  switch (operation) {
    case "+":
      output = number1 + number2;
      break;
    case "-":
      output = number1 - number2;
      break;
    case "*":
      output = number1 * number2;
      break;
    case "/":
      output = number1 / number2;
      break;
  }

  console.log(`${number1} ${operation} ${number2} = ${output}`);

  prompt("again");
  again = readline.question();
  // Just to make sure the user input is intentional
  while (!OPTIONS.again.includes(again)) {
    console.clear();
    prompt("againInvalid");
    prompt("again");
    again = readline.question();
  }
}
prompt("bye");
