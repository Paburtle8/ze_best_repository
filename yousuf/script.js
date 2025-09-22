const yousuf = document.getElementById("yousuf");
const background = document.getElementById("background");

background.style.display = "none";
if (yousuf) {
    yousuf.addEventListener("click", doAnimation);
}

function doAnimation() {
    background.style.display = "block"; 
    background.style.animation = "background .5s ease 1";
}