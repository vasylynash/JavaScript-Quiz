var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var pages = document.getElementsByClassName("page");

var currentPage = 0;
var userAnswers = [];

previousButton.style.display = "none";
// submitButton.style.display = "none";

var quizQuestions = [
    {
        question: "How to check the type of a primitive variable?",
        answers: [
            "datatype",
            "typeof",
            "<variable_name> is"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between “ == “ and “ === “ operators?",
        answers: [
            "“==” is used to compare values whereas, “ === “ is used to compare both value and types",
            "Both are comparison operators",
            "None"
        ],
        correctAnswer: 0
    },
    {
        question: "What is DOM?",
        answers: [
            "Declaration of Modules",
            "Document Object Model",
        ],
        correctAnswer: 1
    }
];


function addPage() {
    var page = document.createElement("div");
    page.setAttribute("class", "page");
    quizContainer.append(page);
}

function showQandA(quizQuestion) {
    showQuestion(quizQuestion.question);
    showAnswers(quizQuestion.answers);
}

function showQuestion(quizQuestionText) {
    var question = document.createElement("div");
    question.setAttribute("class", "question");
    quizContainer.append(question);
    question.setAttribute("name", `question`)
    question.innerText = quizQuestionText;
}

function showAnswers(quizAnswersArray) {
    var selected = userAnswers[currentPage];
    var answers = document.createElement("div");
    answers.setAttribute("class", "answers");
    quizContainer.append(answers);
    quizAnswersArray.forEach((quizAnswer, index) => {
        var answerDiv = document.createElement("div");
        var answer = document.createElement("input");
        answer.setAttribute("type", "radio");
        answer.setAttribute("value", `${index}`);
        answer.setAttribute("name", "ans");
        if (index == selected) {
            answer.checked = true;
        }
        var label = document.createElement("label");
        label.innerText = `${quizAnswer}`;
        answers.append(answerDiv);
        answerDiv.append(answer);
        answerDiv.append(label);
    })
}

function clearPage() {
    quizContainer.innerHTML = "";
}

function showNextPage() {
    clearPage();
    currentPage++;
    if (currentPage === quizQuestions.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
    if (currentPage === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }
    showQandA(quizQuestions[currentPage]);
}

function showPreviousPage() {
    clearPage();
    currentPage--;
    if (currentPage === quizQuestions.length - 1) {
        nextButton.style.display = "none";
    } else {
        nextButton.style.display = "inline-block";
    }
    if (currentPage === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }
    showQandA(quizQuestions[currentPage]);
}

function saveUserAnswer() {
    let answer = document.querySelector("[name='ans']:checked");
    if (answer) {
        userAnswers[currentPage] = answer.value;
    }
}
function getScore() {
    let count = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] == quizQuestions[i].correctAnswer) {
            count++;
        }
    }
    return count;
}

function showResultPage() {
    quizContainer.innerHTML = "";
    previousButton.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "none";
    var scoreData = document.createElement("div");
    quizContainer.append(scoreData);
    scoreData.innerText = `You score: ` + getScore();
    var initialsInputDiv = document.createElement("div");
    quizContainer.append(initialsInputDiv);
    var initialsLabel = document.createElement("label");
    initialsInputDiv.append(initialsLabel);
    initialsLabel.innerText = "Please enter your initials: "
    var initialsInputField = document.createElement("input");
    initialsInputDiv.append(initialsInputField);
    initialsInputField.setAttribute("style", "margin: 10px");
    initialsInputField.setAttribute("id", "initials");
    var saveButton = document.createElement("button");
    document.body.append(saveButton);
    saveButton.innerText = "Save";
    saveButton.addEventListener("click", saveToLocalStorage);
}

function saveToLocalStorage(highscore) {
    var highscore = [];
    highscore[0] = initialsInputField.value;
    highscore[1] = getScore();
    localStorage.setItem("highscore", JSON.stringify(highscore));
}

function init() {
    addPage();
    // showPage(currentPage);
    showQandA(quizQuestions[currentPage]);
    // clearPage();

    // showQandA(quizQuestions[1]);
    // saveUserAnswer();
}


nextButton.addEventListener("click", saveUserAnswer);
nextButton.addEventListener("click", showNextPage);
previousButton.addEventListener("click", saveUserAnswer);
previousButton.addEventListener("click", showPreviousPage);
submitButton.addEventListener("click", saveUserAnswer);
submitButton.addEventListener("click", getScore);
submitButton.addEventListener("click", showResultPage);
// saveButton.addEventListener("click", saveToLocalStorage);





init();
