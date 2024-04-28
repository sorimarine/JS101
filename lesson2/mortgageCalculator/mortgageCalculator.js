const readline = require("readline-sync");
const PROMPTS = require("./mortgageCalculator.json").prompts;
const OPTIONS = require("./mortgageCalculator.json").options;
const CHECK_MARK = "\u2713";

/** --------------------------- DISPLAY FUNCTIONS ----------------------------*/

function prompt(message) {
  console.log(`=> ${message}`);
}

function errorPrompt(message) {
  console.log(`>>> INPUT ERROR!! ${message} <<<\n`);
}

function printLoanAmountLine(loanAmount) {
  prompt(
    `Loan Amount: ($) ${
      loanAmount !== null ? loanAmount.toFixed(2) + " " + CHECK_MARK : "___"
    }`
  );
}

function printAPRLine(apr) {
  prompt(
    `Annual Percentage Rate: (%) ${
      apr !== null ? apr + " " + CHECK_MARK : "___"
    }`
  );
}

function printDurationLine(duration) {
  prompt(
    `Loan Duration: (months) ${
      duration !== null ? duration + " " + CHECK_MARK : "___"
    }`
  );
}

function printMonthlyPaymentLine(payment) {
  const THREE_CHECKS = CHECK_MARK + CHECK_MARK + CHECK_MARK;
  prompt(
    `Monthly payment: ($) ${
      payment !== null ? payment.toFixed(2) + " " + THREE_CHECKS : "___"
    }`
  );
}

function refreshInfoDisplay(loanInfo) {
  console.clear();
  printLoanAmountLine(loanInfo.loanAmount);
  printAPRLine(loanInfo.annualPercentRate);
  printDurationLine(loanInfo.durationInMonths);
  console.log("----------------------------------");
  printMonthlyPaymentLine(loanInfo.monthlyPayment);
  console.log("====================================================\n");
}

/** ------------------------------------------------------------------------- */

/** --------------------------- HELPER FUNCTIONS -----------------------------*/

function invalidNumber(numberStr) {
  return numberStr.trimStart() === "" || Number.isNaN(Number(numberStr));
}

function lessThanTwoDecimals(amountStr) {
  let beforeAndAfter = amountStr.trim().split(".");
  // if no decimal or if decimal portion less than 2
  return beforeAndAfter.length === 1 || beforeAndAfter[1].length <= 2;
}

/** ------------------------------------------------------------------------- */

/** ------------------------ USER INPUT FUNCTIONS ----------------------------*/

function setLoanAmount(loanInfo) {
  prompt(PROMPTS.loan);
  let loan = readline.question();
  // positive valid dollar amount only. can't have a fraction of a cent
  while (
    invalidNumber(loan) ||
    Number(loan) <= 0 ||
    !lessThanTwoDecimals(loan)
  ) {
    refreshInfoDisplay(loanInfo);
    errorPrompt(PROMPTS.loanInvalid);
    prompt(PROMPTS.loan);
    loan = readline.question();
  }
  loanInfo.loanAmount = Number(loan);
}

// (ie. 23.5 NOT 0.235)
function setAnnualPercentRate(loanInfo) {
  prompt(PROMPTS.apr);
  let apr = readline.question();
  // choosing to only allow up to two decimal places. anything more seems weird
  while (invalidNumber(apr) || Number(apr) < 0 || !lessThanTwoDecimals(apr)) {
    refreshInfoDisplay(loanInfo);
    errorPrompt(PROMPTS.aprInvalid);
    prompt(PROMPTS.apr);
    apr = readline.question();
  }
  loanInfo.annualPercentRate = Number(apr);
}

function setDurationInMonths(loanInfo) {
  prompt(PROMPTS.loanDuration);
  let duration = readline.question();
  // has to be integer greater than 0
  while (
    invalidNumber(duration) ||
    Number(duration) < 1 ||
    !Number.isInteger(Number(duration))
  ) {
    refreshInfoDisplay(loanInfo);
    errorPrompt(PROMPTS.loadDurationInvalid);
    prompt(PROMPTS.loanDuration);
    duration = readline.question();
  }
  loanInfo.durationInMonths = Number(duration);
}

function doAgain() {
  prompt(PROMPTS.doAgain);
  let again = readline.question().trim();
  while (!OPTIONS.doAgain.includes(again)) {
    console.clear();
    prompt(PROMPTS.doAgainInvalid + "\n");
    prompt(PROMPTS.doAgain);
    again = readline.question().trim();
  }
  return again.toLocaleLowerCase() === "y";
}

/** ------------------------------------------------------------------------- */

/** ----------------------------- MAIN LOGIC ---------------------------------*/

console.clear();
prompt(PROMPTS.welcome);
readline.question();

while (true) {
  let loanInfo = {
    loanAmount: null,
    annualPercentRate: null,
    durationInMonths: null,
    monthlyPayment: null,
  };
  refreshInfoDisplay(loanInfo);
  setLoanAmount(loanInfo);
  refreshInfoDisplay(loanInfo);
  setAnnualPercentRate(loanInfo);
  refreshInfoDisplay(loanInfo);
  setDurationInMonths(loanInfo);
  refreshInfoDisplay(loanInfo);

  // the formula ends up breaking if rate is 0. (you get 0 / 0)
  if (loanInfo.annualPercentRate === 0) {
    loanInfo.monthlyPayment = loanInfo.loanAmount / loanInfo.durationInMonths;
  } else {
    let monthlyInterestRate = loanInfo.annualPercentRate / 12 / 100; // decimal now
    loanInfo.monthlyPayment =
      loanInfo.loanAmount *
      (monthlyInterestRate /
        (1 -
          Math.pow(1 + monthlyInterestRate, -1 * loanInfo.durationInMonths)));
  }

  refreshInfoDisplay(loanInfo);
  prompt(PROMPTS.complete);
  if (!doAgain()) {
    break;
  }
}
console.clear();
prompt(PROMPTS.bye);

/** ------------------------------------------------------------------------- */
