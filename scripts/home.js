const charactersSection=document.querySelector(".characters-sec");
function showHideCharacters() {
    if (charactersSection.style.display=== "none"|| charactersSection.computedStyleMap.display===""){
        charactersSection.style.display="block";
        }
        else{
        charactersSection.classList.toggle("hidden");
        }
    }
    
