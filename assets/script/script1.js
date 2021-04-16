var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");
var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var pages = document.getElementsByClassName("page");

var currentPage = 0;

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
        correctAnswer: 0
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
    var answers = document.createElement("div");
    answers.setAttribute("class", "answers");
    quizContainer.append(answers);
    quizAnswersArray.forEach((quizAnswer, index) => {
        var answerDiv = document.createElement("div");
        var answer = document.createElement("input");
        answer.setAttribute("type", "radio");
        answer.setAttribute("value", `${index}`);
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

function getResults() {

}

function init() {
    addPage();
    // showPage(currentPage);
    showQandA(quizQuestions[currentPage]);
    // clearPage();

    // showQandA(quizQuestions[1]);
}

nextButton.addEventListener("click", showNextPage);
previousButton.addEventListener("click", showPreviousPage);




init();
