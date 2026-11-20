const params= new URLSearchParams(window.location.search);
const id=params.get('id');

const character=characters.find(function(item){
    return item.id === id;
});
const dropBtn = document.querySelector('.dropBtn');
const navHar = document.querySelector('.navHar');

dropBtn.addEventListener("click", function(){
    navHar.classList.toggle("show");
});

document.getElementById('characterName').textContent=character.name;
document.getElementById('characterImage').src = character.image;
document.getElementById('chardescp').textContent=character.description;
document.getElementById('triviaBtn').href=`trivia.html?id=${character.id}`;
document.getElementById('hsBtn').href=`highscore.html?id=${character.id}`;