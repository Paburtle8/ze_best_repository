
let age = Number(prompt("What is your age?"));
let name = prompt("What is your name?");

if (age <= 18 || name.toLowerCase() !== "jinu") {
    alert("Sorry, but you must be 18 or older to enter this website! (And you must be a certain someone!)");
    console.log("The person is now redirected to main.html");
    window.location.replace("main.html");
}

let points = 0;
let loop = true;

setTimeout(() => {

    while (loop = true){
        
        let websiteRating = Number(prompt("What is your rating of this website from 1-5?"));

        let bestPerson = prompt("Who is the best person in the world?");

        if (bestPerson.toLowerCase() === "jinu" && websiteRating === 5){
            points = points += 1;

            alert("YOU ARE DA BEST PERSON IN THE WORLDDDD!");
            tryAgain = prompt("You have " + points + " points. Do you want to rate again? y or n. ");

            if (tryAgain === "n"){
                break;
            } else {

            }
            
        } else {
            points = points -= 1

            alert("You are bad :(");
            let tryAgain = prompt("You have " + points + " points. Do you want to rate again? y or n. ");

            if (tryAgain === "n"){
                break;
            } else {

            }

        }
    }

}, 5000);





