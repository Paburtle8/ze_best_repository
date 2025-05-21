// Get DOM elements correctly matching the HTML
const textBox = document.getElementById("textBox");
const wpmH1 = document.getElementById("wpmH1");
const timeDisplay = document.getElementById("timeH1");
const buttonStart = document.getElementById("buttonStart");
const buttonStart2 = document.getElementById("buttonStart2");
const coinImage = document.getElementById("coinImage"); // Fixed to match HTML
const coinText = document.getElementById("coinAmount");

// Initialize variables
let wordCount = 0;
let countdown;
let coinAmount = 0;

// Start the timer when Enter is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    timer();
  }
});



function addCoins(n) {
  coinAmount += n;
  displayCoins();
}

// Display coins function
function displayCoins() {
  coinText.textContent = "Coins: " + coinAmount; 
}

// Button click handlers
buttonStart.addEventListener("click", timer);
buttonStart2.addEventListener("click", timer);

// Update word count as the user types
textBox.addEventListener("input", () => {
  let words = textBox.value.trim().split(/\s+/);
  wordCount = textBox.value.trim() === "" ? 0 : words.length;
});


function timer() {
  textBox.value = "";
  wordCount = 0; // Reset word count when timer starts
  wpmH1.innerHTML = "WPM: 0";
  let i = 15;
  timeDisplay.innerHTML = "Time: " + i; 

  if (countdown) {
    clearInterval(countdown);
  }
  
  
  countdown = setInterval(function () {
    i--;
    timeDisplay.innerHTML = "Time: " + i;
    
    if (i <= 0) {
      clearInterval(countdown);
      timeDisplay.innerHTML = "Time's up!";
      

      let typeSpeed = (wordCount / 15) * 60;
      wpmH1.innerHTML = "WPM: " + Math.round(typeSpeed);
      

      const earnedCoins = Math.floor(typeSpeed / 10);
      if (earnedCoins > 0) {
        addCoins(earnedCoins);
      }
      
   
    }
  }, 1000);
}