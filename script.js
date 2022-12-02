var startButton = document.getElementById('start');
var timerEl = document.getElementById('countdown');


var timeLeft = 0;

function startTimer(){

    timeLeft = 61;

    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds remaining";
  
      if((timeLeft >= 0)) {
        if (isWin && timeLeft > 0) {
            clearInterval(timeInterval);
            winGame();
        }
      }

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        loseGame();
      }
  
    }, 1000);
}


function startGame() {
startTimer()
}

startButton.addEventListener("click", startGame);  