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
