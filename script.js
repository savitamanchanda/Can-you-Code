var startButton = document.getElementById('start');
var nextButton = document.getElementById('next');
var timerEl = document.getElementById('countdown');
var qContainerEl = document.getElementById('question-container')
var heading = document.getElementById('landing');
var quesEl = document.getElementById('question');
var ansButtonEl = document.getElementById('answer-buttons');
var setResult = document.getElementById('result');
var showScore = document.getElementById('showScore');
var scoreArea = document.getElementById('score');
var initial = document.getElementById('initial');
var showScore = document.getElementById('showScore');
var final = document.getElementById('final');
var scores = document.getElementById('scores');
var showPrevious = document.getElementById('showPrevious');
var previousScore = document.getElementById('previousScore')
var pScore = document.getElementById('Pscore');
var restartButton = document.getElementById('restart');

var timeInterval;
var shuffledQuestions;
var currentQuestionIndex;
var timeLeft = 0;
var pointCounter = 0;
var questions = [ 
    {
        question: 'In which HTML element, we put the JavaScript code?',
        answers: [
            {text: '<javascript>...</javascript>'},
            {text: '<js>...</js>'},
            {text: '<script>...</script>'},
            {text: '<css>...</css>'}
        ]
    },
    {
        question: 'Which symbol is used to separate JavaScript statements?',
        answers: [
            {text: 'Comma (,)'},
            {text: 'Colon (:)'},
            {text: 'Hyphen (_)'},
            {text: 'Semicolon (;)'}
        ]
    },
    {
        question: 'Which JavaScript method is used to access an HTML element by id?',
        answers: [
            {text: 'getElementById()'},
            {text: 'getElementBy(id)'},
            {text: 'getElementById(id)'},
            {text: 'elementById(id)'}
        ]
    },
    {
        question: "Which JavaScript method is used to write on browser's console?",
        answers: [
            {text: 'console.write()'},
            {text: 'console.output()'},
            {text: 'console.log()'},
            {text: 'console.writeHTML()'}
        ]
    },
    {
        question: "Which JavaScript method is used to write into an alert box?",
        answers: [
            {text: 'window.alertHTML()'},
            {text: 'window.alert()'},
            {text: 'window.alertBox()'},
            {text: 'window.alertContent()'}
        ]
    }
];
var correctAnswers = ['<script>...</script>', 'Semicolon (;)', 'getElementById(id)', 'console.log()', 'window.alert()'];

function startTimer(){

    timeLeft = 91;

    timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds remaining";
      timerEl.classList.remove('hide');

      if (timeLeft >=0) {
        if (questions.length < currentQuestionIndex + 1) {
        clearInterval(timeInterval);
        finishQuiz();
    }
    }

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        loseGame();
    }
  
    }, 1000);
}


function startGame() {
startTimer();
currentQuestionIndex = 0;
shuffledQuestions = questions[currentQuestionIndex];
startButton.classList.add('hide');
qContainerEl.classList.remove('hide');
heading.classList.add('hide');
setQuestion()
}

startButton.addEventListener("click", startGame);  
/*nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    shuffledQuestions = questions[currentQuestionIndex];
    setQuestion();
    setResult.classList.add('hide');
}); */


function setQuestion() {
reset();
showQuestion(shuffledQuestions);
}


function showQuestion(question) {
quesEl.textContent = question.question
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.textContent = answer.text
    button.classList.add('btn')
    button.addEventListener('click', answerSelected)
    ansButtonEl.appendChild(button)
})
}

function reset() {
    nextButton.classList.add('hide')
    while(ansButtonEl.firstChild) {
        ansButtonEl.removeChild(ansButtonEl.firstChild)
    }
}
function answerSelected(e) {
var selectedButton = e.target.textContent;
setResult.classList.remove('hide');
if (correctAnswers.includes(selectedButton)) {
    setResult.innerText = 'You are correct!'
    pointCounter = pointCounter + 10
} else {
    setResult.innerText = 'You are incorrect.'
    timeLeft = timeLeft - 5;
}
if (questions.length > currentQuestionIndex + 1) {
    //nextButton.classList.remove('hide')
    currentQuestionIndex++;
    shuffledQuestions = questions[currentQuestionIndex];
    setQuestion();
    //setResult.classList.add('hide');
} else {
    clearInterval(timeInterval);
    finishQuiz();
    timerEl.classList.add('hide');
}
}

function finishQuiz(){
    heading.classList.add('hide');
    qContainerEl.classList.add('hide');
    scoreArea.classList.remove('hide');
}

showScore.addEventListener('click', finalScore);

function finalScore(){
timerEl.classList.add('hide');
final.classList.remove('hide');
scores.textContent = "1. " + initial.value + " : " + pointCounter
localStorage.setItem("PointCount", pointCounter)
}

restartButton.addEventListener('click', resetGame);

function resetGame(){
scoreArea.classList.add('hide');
final.classList.add('hide');
setResult.classList.add('hide');
startGame();
}

function loseGame() {
timerEl.textContent = 'Sorry! Time is up!'
finishQuiz();
}

