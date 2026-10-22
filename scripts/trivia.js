const question=document.getElementById("question");
const choices= Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion ={};
let acceptingAnswers=false;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions=[
    {
        question:"What is the core of Harry's wand?",
        choice1:"Dragon heaartstring",
        choice2:"Unicorn hair",
        choice3:"Phoenix feather",
        choice4:"Thestral tail hair",
        answer:3
    },
    {
        question:"What does Harry use to breathe underwater during the second task of the Triwizard Tournament?",
        choice1:"Gillyweed",
        choice2:"Bubble-Head Charm",
        choice3:"Scuba Gear",
        choice4:"Polyjuice Potion",
        answer:1
    },
    {
        question:"Which Mirror shows the deepest, most desperate desire of our hearts?",
        choice1:"The Mirror of Erised",
        choice2:"The Looking Glass",
        choice3:"The Silver Scryer",
        choice4:"The Pensieve",
        answer:1
    },
    {
        question:"Where does Harry live with the Dursleys before he goes to Hogwarts?",
        choice1:"In the attic",
        choice2:"In a cuppboard under the stairs",
        choice3:"In the basesment",
        choice4:"In the guest bedroom",
        answer:2
    },
    {
        question:"Which position does Harry play on the Gryffindor Quidditch team",
        choice1:"Chaser",
        choice2:"Beater",
        choice3:"Keeper",
        choice4:"Seeker",
        answer:4
    },
    {
        question:"What is the name of Harry's pet snowy owl?",
        choice1:"Crookshanks",
        choice2:"Scabbers",
        choice3:"Hedwig",
        choice4:"Fang",
        answer:3
    },
    {
        question:"What shape is the scar on Harry's forehead?",
        choice1:"A crescent moon",
        choice2:"A lightning bolt",
        choice3:"A star",
        choice4:"A circle",
        answer:2
    },
];

const CORRECT_BONUS =10;
const MAX_QUESTIONS=7;
startTrivia = ()=>{
    questionCounter=0;
    score=0;
    availableQuestions=[...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        return window.location.assign("/end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

    progressBarFull.style.width =`${(questionCounter/ MAX_QUESTIONS)*100}%`;
    
    const questionIndex= Math.floor(Math.random()* availableQuestions.length);
    currentQuestion= availableQuestions[questionIndex];
    question.innerText= currentQuestion.question;

    choices.forEach( choice => {
        const number =choice.dataset["number"];
        choice.innerText=currentQuestion["choice"+ number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers=true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers=false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
           selectedAnswer == currentQuestion.answer? "correct" : "incorrect";

        if (classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
           }

        selectedChoice.parentElement.classList.add(classToApply);

           setTimeout(() => {
              selectedChoice.parentElement.classList.remove(classToApply);
              getNewQuestion();
             }, 700);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startTrivia();