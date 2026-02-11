const playBTN = document.getElementById("playBTN");
const levelsImg = document.getElementById("levelsImg");

const boxShopImg = document.getElementById("boxShopImg");
const shopImg = document.getElementById("shopImg");

const boxVocabImg = document.getElementById("boxVocabImg");
const vocabImg = document.getElementById("vocabImg");
const vocabList_T = document.getElementById("vocabList_T");

let level = 1;


/* functions */

function hide(name, sec) {
    setTimeout(() => {
        name.style.display = "none";
    }, sec);
}

function animateAway() {
    levelsImg.animate(
        [
            {transform: "translateY(-20vh)"}
        ], {
            duration: 3000,
            easing: "ease",
            iterations: 1
        }
    )

    boxShopImg.animate(
        [
            {transform: "translateY(60vh)"}
        ], {
            duration: 2500,
            easing: "ease",
            iterations: 1
        }
    )

    shopImg.animate(
        [
            {transform: "translateY(70vh)"}
        ], {
            duration: 3000,
            easing: "ease",
            iterations: 1
        }
    )

    boxVocabImg.animate(
        [
            {transform: "translateY(60vh)"}
        ], {
            duration: 3000,
            easing: "ease",
            iterations: 1
        }
    )

    vocabImg.animate(
        [
            {transform: "translateY(70vh)"}
        ], {
            duration: 3500,
            easing: "ease",
            iterations: 1
        }
    )
    
    vocabList_T.animate(
        [
            {transform: "translateY(60vh)"}
        ], {
            duration: 3000,
            easing: "ease",
            iterations: 1
        }
    )




    playBTN.animate(
        [
            {transform: "translateY(-40vh)"}
        ], {
            duration: 5000,
            easing: "ease",
            iterations: 1
        }
    )
    
    
}


playBTN.addEventListener("click", function() {
    level++;

    setTimeout(() => {
        playBTN.textContent = "Level " + level;
    }, 6000);
    
    
    animateAway();
    hide(levelsImg, 3000);
    hide(boxShopImg, 2500);
    hide(shopImg, 2000);
    hide(boxVocabImg, 3000);
    hide(vocabImg, 2500);
    hide(vocabList_T, 3000);
    hide(playBTN, 5000);
    
});