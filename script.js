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
  score = [humanScore, computerScore]
  return score
}

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let playerS = document.querySelector('.player-score')
let computerS = document.querySelector('.computer-score')
const gameOver = document.querySelector('.game-over')
const resultShow = document.querySelector('.choose-your-move')
const roundWinner = document.querySelector('.round-winner')
const buttonStorage = document.querySelector('.player-move')

playerS.textContent = `Player: ${score[0]}`
computerS.textContent = `Computer: ${score[1]}`

rock.addEventListener('click', () => {
  playRound('rock', getComputerChoice())
  playerS.textContent = `Player: ${score[0]}`
  computerS.textContent = `Computer: ${score[1]}`
  if (score[0] >= 5 || score[1] >= 5) {
    result()
  }
})

paper.addEventListener('click', () => {
  playRound('paper', getComputerChoice())
  playerS.textContent = `Player: ${score[0]}`
  computerS.textContent = `Computer: ${score[1]}`
  if (score[0] >= 5 || score[1] >= 5) {
    result()
  }
})

scissors.addEventListener('click', () => {
  playRound('scissors', getComputerChoice())
  playerS.textContent = `Player: ${score[0]}`
  computerS.textContent = `Computer: ${score[1]}`
  if (score[0] >= 5 || score[1] >= 5) {
    result()
  }
})

function result() {
  if (score[0] >= 5) {
    restartButton()
    gameOver.textContent = 'Game Over!!'
    resultShow.textContent = 'You Won The Game'
  } else if (score[1] >= 5) {
    restartButton()
    gameOver.textContent = 'Game Over!!'
    resultShow.textContent = 'Computer Won The Game'
  }
  resultShow.style.color = '#00FF00'
}

function restartButton() {
  const restart = document.createElement('button')
  restart.textContent = 'Restart'
  restart.style.cssText =
    'padding: 6px 24px; border: none; font-size: 16px; font-weight: 600; cursor: pointer;'
  buttonStorage.appendChild(restart)
  buttonStorage.removeChild(rock)
  buttonStorage.removeChild(paper)
  buttonStorage.removeChild(scissors)

  roundWinner.textContent = ''

  restart.addEventListener('click', () => {
    humanScore = 0
    computerScore = 0
    playerS.textContent = `Player: ${humanScore}`
    computerS.textContent = `Computer: ${computerScore}`
    gameOver.textContent = ''
    resultShow.textContent = 'Choose your move'
    resultShow.style.color = 'unset'
    buttonStorage.append(rock, paper, scissors)
    buttonStorage.removeChild(restart)
  })
}