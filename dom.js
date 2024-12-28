import { checkAnswer, resetQuiz, selectRandomQuestions } from "./logic.js";

const startBtn = document.querySelector(".startBtn");
const nextButton = document.querySelector(".nextButton");
const container = document.querySelector(".container");
const alertBox = document.querySelector(".alert");
const scoreCard = document.querySelector(".scoreCard");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const timer = document.querySelector(".timer");
let tabChangeTime = null;
let totalTimeAway = 0;
let lastTimeAway = 0;
const currentQuizLength = 10;
let score = 0;

export function init() {
    container.style.display = "none";
    alertBox.style.display = "none";
}

export function setupListeners() {
    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        container.style.display = "block";
        resetQuiz();
    });

    nextButton.addEventListener("click", handleNextBtn);
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {

        tabChangeTime = new Date();
        console.log("User left the tab at:", tabChangeTime);
    } else if (document.visibilityState === "visible") {

        const returnTime = new Date();
        if (tabChangeTime) {
            const timeAway = (returnTime - tabChangeTime) / 1000;
            console.log(`User returned to the tab after ${timeAway} seconds.`);
            lastTimeAway = timeAway;
            totalTimeAway += timeAway;
        }
        tabChangeTime = null;
    }
});

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

function handleNextBtn() {
    const selectedChoice = document.querySelector(".choice.selected");
    if (!selectedChoice) {
        displayAlert("Please select an answer!");
        return;
    }
    checkAnswer(selectedChoice.textContent);
}

export function displayAlert(message) {
    alertBox.textContent = message;
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.display = "none";
    }, 2000);
}

export function showWinPopup() {
    nextButton.style.display = "none";
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <h2>Congratulations! You won! 😃</h2>
        <button class="nextBtn">Next</button>
    `;
    document.body.appendChild(popup);

    const nextBtn = popup.querySelector(".nextBtn");
    nextBtn.addEventListener("click", () => {
        document.body.removeChild(popup);
        selectRandomQuestions();
        scoreCard.style.display = "none";
        nextButton.style.display = "inline-block";
        timer.style.display = "flex";
    });
}

export function showLossPopup() {
    nextButton.style.display = "none";
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <h2>Unfortunately you lost. 😕</h2>
        <button class="playAgainBtn">Play Again</button>
    `;
    document.body.appendChild(popup);

    const playAgainBtn = popup.querySelector(".playAgainBtn");
    playAgainBtn.addEventListener("click", () => {
        document.body.removeChild(popup);
        selectRandomQuestions();
        scoreCard.style.display = "none";
        nextButton.style.display = "inline-block";
        timer.style.display = "flex";
    });
}

export function showScore() {

    updateScoreCard();

    if (score > 8) {
        showWinPopup();
    } else {
        showLossPopup();
    }
}

function updateScoreCard() {
    if (scoreCard) {
        choicesBox.innerHTML = "";
        timer.style.display = "none";
        scoreCard.innerHTML = `
            <p>Your current score: ${score} / ${currentQuizLength} </p>
            <p>Total time away from the tab: ${totalTimeAway.toFixed(2)} seconds</p>
            <p>Last time away: ${lastTimeAway.toFixed(2)} seconds</p>
        `;
    }
}