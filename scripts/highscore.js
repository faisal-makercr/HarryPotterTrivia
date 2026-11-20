const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const key = `bestScore_${id}`;
document.getElementById('characterpgBtn').href =`characters.html?id=${id}`;

const highScore = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


highScoresList.innerHTML = highScores 
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");