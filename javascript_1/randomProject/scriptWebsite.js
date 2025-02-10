let age = Number(prompt("What is your age?"));
let name = prompt("What is your name?")

if (age < 18 || name.toLowerCase() !== "jinu"){
    alert("Sorry, but you must be 18 or older to enter this website! (And you must be a certain someone!)")
    window.location.replace("main.html");
    console.log("The person is now redirected to main.html");
} else {
    alert("Welcome to my website!");
    console.log("The person is now in the website");
}
