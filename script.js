function getComputerChoice() {
  let randomNum = Math.floor(9 * Math.random())

  if (randomNum >= 0 && randomNum < 8 / 3) {
    return 'rock'
  } else if (randomNum >= 8 / 3 && randomNum < 16 / 3) {
    return 'paper'
  } else if (randomNum >= 16 / 3 && randomNum <= 8) {
    return 'scissors'
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Enter your choice', 'rock').toLowerCase()
  if (
    humanChoice === 'rock' ||
    humanChoice === 'paper' ||
    humanChoice === 'scissors'
  ) {
    return humanChoice
  } else {
    return 'rock'
  }
}

let humanScore = 0
let computerScore = 0
let score = [0, 0]

function playRound(humanChoice, computerChoice) {
  if (computerChoice === 'rock') {
    if (humanChoice === 'rock') {
      console.log("It's Draw! Rock Rock")
    } else if (humanChoice === 'paper') {
      console.log('You win! Paper beats Rock')
      humanScore++
    } else if (humanChoice === 'scissors') {
      console.log('You lose! Rock beats Scissors')
      computerScore++
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'rock') {
      console.log('You lose! Paper beats Rock')
      computerScore++
    } else if (humanChoice === 'paper') {
      console.log("It's Draw! Paper Paper")
    } else if (humanChoice === 'scissors') {
      console.log('You win! Scissors beats Paper')
      humanScore++
    }
  } else if (computerChoice === 'scissors') {
    if (humanChoice === 'rock') {
      console.log('You win! Rock beats Scissors')
      humanScore++
    } else if (humanChoice === 'paper') {
      console.log('You lose! Scissors beats Paper')
      computerScore++
    } else if (humanChoice === 'scissors') {
      console.log("It's Draw! Scissors Scissors")
    }
  }
  score = [computerScore, humanScore]
  return score
}
