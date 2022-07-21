// variables
const username = localStorage.getItem('username')
let counter = 0
let score = 0 ;
let questions = [
    {
        question: 'what type is null javascript',
        choice1: 'Object',
        choice2: 'undefine',
        choice3: 'null',
        choice4: 'number',
        answer: 'Object',
        checked: false,
        isAnswered: false
    },

    {
        question: 'Which of the following is an HTML5 semantics?',
        choice1: 'h1',
        choice2: 'p',
        choice3: 'nav',
        choice4: 'div',
        answer: 'nav',
        checked: false,
        isAnswered: false

    },

    {
        question: 'What the comment in HTML?',
        choice1: '//',
        choice2: '/* */',
        choice3: '#',
        choice4: 'none of the above',
        answer: '/* */',
        checked: false,
        isAnswered: false

    },

    {
        question: 'What the Primitive Data Types',
        choice1: 'String',
        choice2: 'Number',
        choice3: 'Boolean',
        choice4: 'all above',
        answer: 'all above',
        checked: false,
        isAnswered: false

    },

    {
        question: 'How do you write an alert',
        choice1: 'msg("Hello world")',
        choice2: 'alertBox("Hello world")',
        choice3: 'alert("Hello world")',
        choice4: 'msgBox("Hello world")',
        answer: 'alert("Hello world")',
        checked: false,
        isAnswered: false,
    }
]


// Dom 
const studentName = document.querySelector('.student-name')
const questionTitle = document.querySelector('.question-title')
const questionResult = document.querySelector('.question-result')
const qCount = document.querySelector('#Q-count') 
let nextBtn = document.querySelector('.next-btn')
// 
studentName.innerText = username;
let randomQuestion = Math.floor(Math.random()*questions.length)

// localStorage.setItem('score')

nextBtn.addEventListener('click',getQuestion);

function getQuestion(){
    console.log(counter);
    if(counter === 4){
        nextBtn.innerText = 'Submit'
    }
    if(counter === 5){
        console.log(counter,'kjdsf')
        localStorage.setItem('score',JSON.stringify(score))
        window.location.href = './leaderBoard.html'
        console.log(rest);
        
    }
    nextBtn.style.backgroundColor = '#656565'
    randomQuestion = Math.floor(Math.random()*questions.length) 
    while(questions[randomQuestion].checked){
        randomQuestion = Math.floor(Math.random()*questions.length) 
    }
    questionTitle.innerText = questions[randomQuestion].question ;
    questions[randomQuestion].checked = true 
    qCount.innerText = `${++counter}/5`
    questionResult.innerHTML = `
    <div class="result result-1" onClick = 'searchAnswer(this)'><span>A</span><p>${questions[randomQuestion].choice1}
    </p></div>
    <div class="result result-2" onClick = 'searchAnswer(this)'><span>B</span><p>${questions[randomQuestion].choice2}
    </p></div>
    <div class="result result-3" onClick = 'searchAnswer(this)'><span>C</span><p>${questions[randomQuestion].choice3}
    </p></div>
    <div class="result result-4" onClick = 'searchAnswer(this)'><span>D</span><p>${questions[randomQuestion].choice4}</p></div>
    `
}

function searchAnswer(e){
    if(!questions[randomQuestion].isAnswered){
        if(questions[randomQuestion].answer === e.querySelector('p').innerText){
            e.style.backgroundColor = 'green'
            e.style.color = 'white'
            nextBtn.style.backgroundColor = '#000'
            score++ ;
            questions[randomQuestion].isAnswered = true ;
        }else{
            e.style.backgroundColor = 'red'
            e.style.color = 'white'
            nextBtn.style.backgroundColor = '#000'
            questions[randomQuestion].isAnswered = true ;
        }
    }
}

getQuestion()






