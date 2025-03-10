const textBox = document.getElementById("textBox");
const wpmH1 = document.getElementById("wpmH1");
const timeDisplay = document.getElementById("timeH1");
const buttonStart = document.getElementById("buttonStart");
const buttonStart2 = document.getElementById("buttonStart2");

let wordCount = 0;
let countdown;

// Start the timer when Enter is pressed
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        timer();
    }
});


buttonStart.addEventListener("click", timer);
buttonStart2.addEventListener("click", timer);

// Update word count as the user types
textBox.addEventListener("input", () => {
    let words = textBox.value.trim().split(/\s+/);
    wordCount = textBox.value.trim() === "" ? 0 : words.length;
});

function timer() {
    textBox.value = "";
    wpmH1.innerHTML = "WPM: " + "0";
    let i = 15;
    timeDisplay.innerHTML = i;

    // Clear any existing countdown to avoid multiple timers running
    if (countdown) {
        clearInterval(countdown);
    }

    countdown = setInterval(function () {
        timeDisplay.innerHTML = i;
        i--;

        if (i < 0) {
            clearInterval(countdown);
            timeDisplay.innerHTML = "Time's up!";

            

            let typeSpeed = (wordCount / 15) * 60;
            wpmH1.innerHTML = "WPM: " + Math.round(typeSpeed);

            
            textBox.value = "";
            wordCount = 0;
            
        }
    }, 1000);
}