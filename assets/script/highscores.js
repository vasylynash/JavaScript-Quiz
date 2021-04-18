var highscoresContainer = document.getElementById("highscore");

function init() {
    const highscores = JSON.parse(localStorage.getItem("highscores") || "[]");
    highscores.sort((a, b) =>
        b.score - a.score
    );
    highscores.forEach(element => {
        var row = document.createElement("p");
        row.innerText = element.initials + " " + element.score;
        highscoresContainer.append(row);
    });

}

init();