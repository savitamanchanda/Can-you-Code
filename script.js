var startButton = document.getElementById('start');
var nextButton = document.getElementById('next');
var timerEl = document.getElementById('countdown');
var qContainerEl = document.getElementById('question-container')
var heading = document.getElementById('landing');
var quesEl = document.getElementById('question');
var ansButtonEl = document.getElementById('answer-buttons');
var setResult = document.getElementById('result')

var shuffledQuestions;
var currentQuestionIndex;
var timeLeft = 0;
var pointCounter = 0;
var questions = [ 
    {
        question: 'Which of the following is not Javascript data types?',
        answers: [
            {text: 'Undefined type'},
            {text: 'Null type'},
            {text: 'Number type'},
            {text: 'All of the mentioned'}
        ]
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: '1'},
            {text: '2'},
            {text: '3'},
            {text: '4'}
        ]
    },
    {
        question: 'Which of the following is not ?',
        answers: [
            {text: 'a'},
            {text: 'b'},
            {text: 'c'},
            {text: 'd'}
        ]
    },
    {
        question: 'Which of?',
        answers: [
            {text: 'e'},
            {text: 'f'},
            {text: 'g'},
            {text: 'h'}
        ]
    }
];
var correctAnswers = ['All of the mentioned', 'a', '1', 'h'];

function startTimer(){

    timeLeft = 91;

    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds remaining";
  
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
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    shuffledQuestions = questions[currentQuestionIndex];
    setQuestion();
})

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
if (correctAnswers.includes(selectedButton)) {
    setResult.innerText = 'You are correct!'
    pointCounter++
} else {
    setResult.innerText = 'You are incorrect.'
    pointCounter--
}
//setPoints();
if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
} else {
    showHighScore();
}
}

function setPoints() {
    
}

function showHighScore(){

}