'use strict';

const selection = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const playerScoreHtml = document.querySelector('.playerScore');
const machineScoreHtml = document.querySelector('.machineScore');
const scoreMessage = document.querySelector('.score-message');

let playerScore = 0;
let machineScore = 0;

function computerPlay() {
  return selection[Math.floor(Math.random() * selection.length)];
}

function updateScore() {
  playerScoreHtml.innerHTML = `Player: ${playerScore}`;
  machineScoreHtml.innerHTML = `Machine: ${machineScore}`;

  if (playerScore === 5 || machineScore === 5) {
    scoreMessage.innerHTML = `${playerScore === 5 ? 'Player' : 'Machine'} WIN!!`;
  }
}

function playRound(playerInput) {
  console.log(playerInput);
  // const playerInput = prompt('Choose your weapon between "Rock, paper or Scissors"').toLowerCase();
  const computer = computerPlay();

  if (playerInput === computer) {
    console.log('tie');
  } else if (
    (playerInput === 'rock' && computer === 'scissors') ||
    (playerInput === 'paper' && computer === 'rock') ||
    (playerInput === 'scissors' && computer === 'paper')
  ) {
    playerScore++;
  } else if (
    (computer === 'rock' && playerInput === 'scissors') ||
    (computer === 'paper' && playerInput === 'rock') ||
    (computer === 'scissors' && playerInput === 'paper')
  ) {
    machineScore++;
  }

  updateScore();
}

buttons.forEach((btn) =>
  btn.addEventListener('click', function (e) {
    playRound(e.target.id);
  })
);
