const params = new URLSearchParams(window.location.search);
const id= params.get('id');
const username = document.getElementById("username");
const saveScoreBtn= document.getElementById("saveScoreBtn");
const finalScore= document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

document.getElementById('goToCharBtn').href= `characters.html?id=${id}`;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled =!username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score ={
        score: Math.floor(Number(mostRecentScore) * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort((a,b) => b.score -a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign(`/characters.html?id=${id}`);
};
