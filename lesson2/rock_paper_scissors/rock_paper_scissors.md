- SUBPROCESS welcome
- SET playGame = true
- WHILE playGame:
  - SET FIRST_TO = 3;
  - SET playerRoundsWon = 0;
  - SET compRoundsWon = 0;
  - WHILE playerRoundsWon < 3 AND compRoundsWon < 3:
    - SUBPROCESS getUserMove
    - SUBPROCESS getComputerMove
    - SUBPROCESS getRoundWinner
    - IF player won:
      - SET playerRoundsWon += 1
    - ELSE IF comp won:
      - SET compRoundsWon += 1
    - SUBPROCESS displayRoundWinner
  - SET playGame = SUBPROCESS getPlayAgain
- SUBPROCESS bye

## SUBPROCESSES

- _getUserMove_

```
- PRINT Please choose move: (r)ock, (p)aper, (sc)issors, (l)izard, or (sp)ock
- SET userMove
- WHILE userMove not in ["r", "p", "sc", "l", "sp"]:
  - PRINT bad move
  - PRINT Please choose move: (r)ock, (p)aper, (sc)issors, (l)izard, or (sp)ock
  - SET userMove
- RETURN userMove
```

- _getComputerMove_

```
- SET randomInt = random integer between 0-4
- RETURN WINNING_MOVES at randomInt
```

- _getRoundWinner_
