const data = [
    {
        id: 1,
        question: "which of this fish is actally a fish",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A plain scale is used to read ?",
        answers: [
            { answer: "one dimension", isCorrect: false },
            { answer: "two dimensions", isCorrect: true },
            { answer: "three dimensions ", isCorrect: false },
            { answer: "all of these ", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "a flutter is group of",
        answers: [
            { answer: "butterfiles", isCorrect: true },
            { answer: "bees", isCorrect: false },
            { answer: "camels", isCorrect: false },
            { answer: "penguins", isCorrect: false },
        ],
    }


]

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qindex = 0
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
     qindex = 0
     correctCount = 0;
     wrongCount = 0;
     total = 0;
     selectedAnswer;
    showQuestion();

}

play.addEventListener("click",(e)=>{
    resultScreen.style.display = "none"
    gameScreen.style.display = "flex"
    playAgain();
})


const showResult = () => {
    resultScreen.style.display = "flex"
    gameScreen.style.display = "none"
    resultScreen.querySelector(".correct").textContent =
        `Correct Answer: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
        `Wrong Answer: ${wrongCount}`

    resultScreen.querySelector(".score").textContent =
        `Score: ${(correctCount - wrongCount) * 10}`


}

const showQuestion = (qNumber) => {
    if (qindex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        ` <div class="answer">
     <input name="answer" type="radio" id=${index} value="${item.isCorrect}" />
     <label for=${index}>${item.answer}</label>
   </div>`
    ).join("")

    selectAnswer();
}


const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", e => {
            console.log(e.target.value);
            selectedAnswer = e.target.value;
        })
    })
}



const submitAnswer = () => {
    submit.addEventListener("click", e => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qindex++;
            showQuestion(qindex);
        }
        else {
            alert("please select an answer");
        }
    })

}











showQuestion(qindex);
submitAnswer();
