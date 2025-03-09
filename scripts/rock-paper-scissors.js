let themeButton = document.querySelector('.theme-button');
let moveButton = document.querySelectorAll('.move-button');

themeButton.addEventListener('click', changeTheme);

function changeTheme() {
  if(themeButton.innerHTML === `<span class="light hidden">
        <i class="fa-solid fa-sun"></i>
      </span>
      <span class="dark">
        <i class="fa-solid fa-moon"></i>
      </span> Dark theme`) 
  {
    themeButton.innerHTML = `<span class="light">
        <i class="fa-solid fa-sun"></i>
      </span>
      <span class="dark hidden">
        <i class="fa-solid fa-moon"></i>
      </span> Light theme`;
      console.log('Hello')
    
    document.body.classList.add('light-theme');
    moveButton.forEach(button => {
      button.classList.add('light-theme-button')
    });
    themeButton.classList.add('light-theme-button')
  }
  else {
    themeButton.innerHTML = `<span class="light hidden">
        <i class="fa-solid fa-sun"></i>
      </span>
      <span class="dark">
        <i class="fa-solid fa-moon"></i>
      </span> Dark theme`;
      
    document.body.classList.remove('light-theme');
    moveButton.forEach(button => {
      button.classList.remove('light-theme-button')
    });
    themeButton.classList.remove('light-theme-button')
  }
}


let score = JSON.parse(localStorage.getItem('score'));

    if(!score) {
      score = {
        wins: 0,
        loses: 0,
        ties: 0
      }
    }

    updateScoreElement();

    function playGame(playerMove) {
      const computerMove = pickComputerMove();

      let result = '';

      if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
        result = 'You Lose!';
        }
        else if (computerMove === 'paper') {
          result = 'You Win!';
        }
        else if(computerMove === 'scissors') {
          result = 'Tie!'
        }

      }
      else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
      result = 'You Win!';
      }
      else if (computerMove === 'paper') {
        result = 'Tie!';
      }
      else if(computerMove === 'scissors') {
        result = 'You Lose!'
      }

      }
      else if(playerMove === 'rock') {
        if(computerMove === 'rock') {
      result = 'Tie!';
      }
      else if (computerMove === 'paper') {
        result = 'You Lose!';
      }
      else if(computerMove === 'scissors') {
        result = 'You Win!'
      }

      }

      if(result === 'You Win!') {
        score.wins ++   
      }
      else if(result === 'You Lose!') {
        score.loses ++
      }
      else if(result === 'Tie!') {
        score.ties ++
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      if(result === 'You Win!') {
        document.querySelector('#js-result').innerHTML = `<span class="text-green-500 font-semibold">${result}</span>`;
      }
      else if(result === 'You Lose!') {
        document.querySelector('#js-result').innerHTML = `<span class="text-red-500 font-semibold">${result}</span>`;
      }
      else if(result === 'Tie!') {
        document.querySelector('#js-result').innerHTML = `<span class="text-blue-400 font-semibold">${result}</span>`;
      }


      document.querySelector('#js-moves').innerHTML = `You<img src="./images/${playerMove}-emoji.png" alt="" class="w-6 md:w-10 md:w-14">
      <img src="./images/${computerMove}-emoji.png" alt="" class="w-6 md:w-10 md:w-14">
      Computer`;

      // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
      // Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`);
    }

    function updateScoreElement() {
      document.querySelector('#js-score').innerHTML = `<span class="text-green-500 font-semibold">Wins: ${score.wins}</span>, <span class="text-red-500 font-semibold">Loses: ${score.loses}</span>, <span class="text-blue-400 font-semibold">Ties: ${score.ties}</span>`;
    }


    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;
    }

    console.log(computerMove)
