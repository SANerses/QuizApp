import { quiz } from "./data.js";
import { displayAlert, showScore } from "./dom.js";

const questionBox = document.querySelector(".question");
const questionContent = document.getElementById("question-content");
const choicesBox = document.querySelector(".choices");
const timer = document.querySelector(".timer");

let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerID = null;
let currentQuiz = [];

export function selectRandomQuestions() {
    if (!quiz || quiz.length === 0) {
        console.error("Quiz data is missing or empty!");
        return;
    }

    currentQuiz = quiz.sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    renderQuestion();
}


export function renderQuestion() {
    const currentQuestion = currentQuiz[currentQuestionIndex];

    if (!currentQuestion) {
        console.error("Current question is undefined!");
        return;
    }

    questionBox.textContent = currentQuestion.question;
    questionContent.textContent = currentQuestion.content;

    choicesBox.innerHTML = "";
    currentQuestion.choices.forEach((choice) => {
        const choiceDiv = document.createElement("div");
        choiceDiv.classList.add("choice");
        choiceDiv.textContent = choice;

        choiceDiv.addEventListener("click", () => {
            document.querySelectorAll(".choice").forEach((c) => c.classList.remove("selected"));
            choiceDiv.classList.add("selected");
        });

        choicesBox.appendChild(choiceDiv);
    });

    startTimer();
}


export function checkAnswer(selectedAnswer) {
    const correctAnswer = currentQuiz[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
        score++;
        displayAlert("Correct Answer!");
    } else {
        displayAlert(`Wrong Answer! The correct answer is "${correctAnswer}".`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        renderQuestion();
    } else {
        stopTimer();
        showScore();
    }
}

function startTimer() {
    clearInterval(timerID);
    timeLeft = 60;
    timer.textContent = timeLeft;

    timerID = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerID);
            displayAlert("Time's up!");
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuiz.length) {
                renderQuestion();
            } else {
                showScore();
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerID);
}

export function resetQuiz() {
    selectRandomQuestions();
}
