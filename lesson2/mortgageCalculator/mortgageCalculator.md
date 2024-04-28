## Input

- Prompt for inputs from user:
  1. the loan amount (number, we'll round to 2 decimals)
  2. The Annual Percentage Rate (APR) - number, we'll expect this in percent values, 15(%) instead of 0.15
  3. the loan duration - number, we'll expect this in whole months

## Output

- no return value
- PRINT:
  - print the monthly payment in valid $ amount ( $123.45 instead of $123.452 )

## Pseudo

- PRINT welcome message
- SET loanAmount = SUBPROCESS getLoanAmount
- SET annualPercentRate = SUBPROCESS getApr
- SET durationInMonths = SUBPROCESS getDurationInMonths
- SET monthlyPayment = SUBPROCESS getMonthlyPayment
- PRINT monthlyPayment

**_getLoanAmount_**

```
- GET enter loan amount in $ (example: 200.23)
- SET loanAmount
- WHILE loanAmount NOT number AND <= 0:
  - PRINT input error
  - GET enter loan amount in $
  - SET loanAmount
- RETURN loanAmount (round this to the nearest cent)
```

**_getApr_**

```
- GET enter annual percentage rate (example: 15)
- SET annualPercentRate
- WHILE annualPercentRate NOT number AND < 0:
  - PRINT input error
  - GET enter annual percentage rate (example: 15)
  - SET annualPercentRate
return annualPercentRate / 100 (returns the decimal representation)
```

**_getDurationInMonths_**

```
- GET enter loan duration in whole months (example: 21)
- SET durationInMonths
- WHILE durationInMonths NOT an integer AND NOT < 1:
  - PRINT input error
  - GET enter loan duration in whole months
```

**_monthlyPayment (loanAmount, annualPercentRate, durationInMonths)_**

```
- SET monthlyInterestRate = annualPercentRate / 12
- SET monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-1 * loanDurationInMonths))))
- RETURN monthlyPayment (round this to the nearest cent)
```
