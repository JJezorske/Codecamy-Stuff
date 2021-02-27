let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function validateGuess(humanGuessInput) {
  if (humanGuessInput < 0 || humanGuessInput > 9) {
    window.alert('Number is out of range.');
  }
};

function generateTarget() {
  const random = Math.floor(Math.random()*10)
  return random
};

function getAbsoluteDistance(humanGuess, computerGuess, targetNum) {
  validateGuess(humanGuess);
  if (humanGuess >= targetNum) {
    humanDiff = humanGuess - targetNum
  } else {
    humanDiff = targetNum - humanGuess
  }
 if (computerGuess >= targetNum) {
    computerDiff = computerGuess - targetNum
  } else {
    computerDiff = targetNum - computerGuess
  }
};

function compareGuesses(humanGuess, computerGuess, targetNum) {
  getAbsoluteDistance(humanGuess, computerGuess, targetNum)
  return humanDiff <= computerDiff
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1
  } else {
    computerScore += 1
}
};

function advanceRound(){
  currentRoundNumber += 1
}
