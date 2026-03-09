const cortisolMeter = document.getElementById("cortisolMeter");
const jumpscareButton = document.getElementById("jumpscareButton");
const countdownText = document.getElementById("countdownText");
const spookyText = document.getElementById("spookyText");
const cortisolItems = document.getElementById("cortisolItems");
const calculateButton = document.getElementsByClassName("calculateButton")[0];
const changeButton = document.getElementsByClassName("changeButton")[0];
const cortisolH2 = document.getElementsByTagName("h2")[0];

const bunny = document.getElementById("bunny");

window.addEventListener("load", function() {
    console.log("loaded the site");
});



let cart = ["Banana", "Orange", "Grape", "Dragonfruit"];
let cortisol = [30, 5, 0, 50];

let cortisolLevel = 0;

for (let i = 0; i < cortisol.length; i++) {
    cortisolLevel += cortisol[i];
}

cortisolItems.textContent = "Shopping cart: " + cart + ". Total cortisol level: " + cortisolLevel;


function countdown() {
    countdownText.style.visibility = "visible";

    let i = 3
    const interval = setInterval(() => {
        countdownText.textContent = i;

        i--

        if (i < 1) {
            clearInterval(interval);
        }
    }, 1000); 

    setTimeout(function() {
        bunny.style.display = "block";
    }, 4000)

        

    
}

function changeCortisol(a, b) {
    cortisolLevel = 0;
    for (let i = 0; i < 4; i++) {
        cortisol[i] = (a + b) + i/ 2 + i;
        cortisolLevel += cortisol[i];
    }
}

calculateButton.onclick = function() {
    if(cortisolLevel > 80) {
        cortisolH2.textContent = "High";
    } else if (cortisolLevel > 30) {
        cortisolH2.textContent = "Medium";
    } else {
        cortisolH2.textContent = "Low";
    }
}

changeButton.onclick = function() {
    changeCortisol(1, 3);
    cortisolItems.textContent = "Shopping cart: " + cart + ". Total cortisol level: " + cortisolLevel;
}


jumpscareButton.onclick = function() {
    countdown();
}
jumpscareButton.onmouseover = function() {
    spookyText.style.visibility = "visible";
    spookyText.textContent = "AHHHHH NOOO DON'T DO IT!";
}
jumpscareButton.onpointerout = function() {
    spookyText.style.visibility = "hidden";
}

