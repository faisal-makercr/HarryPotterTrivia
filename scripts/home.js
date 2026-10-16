let usersection=document.querySelector(".users-section");
let isShow = true;
function showHideCharacters() {
    if (isShow) {
        usersection.style.display="none";
        isShow = false;
    } else {
        usersection.style.display ="block";
        isShow=true;
    }
}
