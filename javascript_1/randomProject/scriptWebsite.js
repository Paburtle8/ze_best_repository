
let age = Number(prompt("What is your age?"));
let name = prompt("What is your name?");

if (age <= 18 || name.toLowerCase() !== "jinu") {
    alert("Sorry, but you must be 18 or older to enter this website! (And you must be a certain someone!)");
    console.log("The person is now redirected to main.html");
    window.location.replace("main.html");
}

setTimeout(() => {
    let websiteRating = Number(prompt("What is your rating of this website from 1-5?"));

    let bestPerson = prompt("Who is the best person in the world?");

    if (bestPerson.toLowerCase() === "jinu" && websiteRating === 5){
        alert("YOU ARE DA BEST PERSON IN THE WORLDDDD!");
    } else {
        alert("You are bad :(");
        window.location.replace("main.html");
    }

}, 5000);





