const jinu = document.getElementById("jinu")
const rohan = document.getElementById("rohan")
const neil = document.getElementById("neil")
const eric = document.getElementById("eric")
const satya = document.getElementById("satya")

const jinuHealthText = document.getElementById("jinuHealth")
const rohanHealthText = document.getElementById("rohanHealth")
const pointsText = document.getElementById("pointsText")

const jBlastersButton = document.getElementById("jBlastersButton")
const jBlastersPriceText = document.getElementById("jBlastersPriceText")
const jBlastersVideo = document.getElementById("jBlastersVideo")

const jDeaglesButton = document.getElementById("jDeaglesButton")
const jDeaglesPriceText = document.getElementById("jDeaglesPriceText")
const jDeaglesVideo = document.getElementById("jDeaglesVideo")

const divNext = document.getElementById("divNext")
const explosion = document.getElementById("explosion")

const rohanRPG = document.getElementById("rohanRPG")

const alertP = document.getElementById("alertP")
const customAlert = document.getElementById("customAlert")
const buttonOK = document.getElementById("buttonOK")

const container = document.querySelector(".container")
const target = document.getElementById("target")
const movingObject = document.getElementById("movingObject")
const badZone = document.getElementById("badZone")

const hitText1 = document.getElementById("hitText1")
const hitText2 = document.getElementById("hitText2")
const hitText3 = document.getElementById("hitText3")

const blankDiv = document.getElementById("blankDiv")

const hitSoundIndicator = new Audio("hit indicator sound.mp3");
const hitSound = new Audio("hit sound.mp3");

hitSoundIndicator.volume = 0.7;
hitSound.volume = 0.7;

document.body.style.overflow = 'hidden';



movingObject.style.animation = "none"



//variables
jinuHealth = 100;
rohanHealth = 100;

rohanDamage = 5;
rohanInterval = 10000;

jBlastersDamage = 5;
jBlastersPrice = 150;
jBlastersMultiplyer = 2;
jBlastersInterval = 3000;

canShowBlasters = false;

jDeaglesDamage = 12;
jDeaglesPrice = 800;
jDeaglesMultiplyer = 2;
jDeaglesInterval = 1000;

canShowDeagles = false;

healthCap = 100;
regenInterval = 100;


pointsMultiplyer = 1;
points = 0;

level = 1;

canJinuDie = false;

canShowDiv = true;

hitGameInterval = 12000;
movingObjectSpeed = ".6s";





function healthRegen(healthCap) {
    
    setInterval(() => {
        if (rohanHealth < healthCap && rohanHealth > 0) {
            rohanHealth += 1;
            updateText();
        }
    }, regenInterval);
}

healthRegen(100);

setInterval(() => {
    
    jinuHealth -= rohanDamage;
    updateText();
    
    
}, rohanInterval);


setInterval(() => {
    
    if (rohanHealth >= 0) {
        
        rohanRPG.play();
    } else {
        
    }
    
    
}, 1000);

function hitGame() {
    setInterval(() => {
        
        hitSoundIndicator.play();
        
        setTimeout(() => {
            hitSound.play();
            movingObject.style.display = "block";
            
            container.style.display = "block";
            
            movingObject.style.animation = ("none");
            movingObject.offsetHeight;
            movingObject.style.animation = (`slide ${movingObjectSpeed} ease 3`);
        }, 600);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index = 0;
    }, hitGameInterval);

    
}



function jBlasters() {
    
    
    const interval = setInterval(() => {
        
        rohanHealth -= jBlastersDamage;
        updateText();
        
        jBlastersVideo.play();

        points += pointsMultiplyer;
        
        if (rohanHealth <= 0) {
            clearInterval(interval);
        }
    }, jBlastersInterval);
    
    
    return interval;
    
}

function jDeagles() {
    
    
    
    const interval = setInterval(() => {
        
        rohanHealth -= jDeaglesDamage;
        updateText();
        
        
        jDeaglesVideo.play();

        points += pointsMultiplyer;
        
        if (rohanHealth <= 0) {
            clearInterval(interval);
        }
    }, jDeaglesInterval);
    
    
    return interval;
    
}

function deathCheck() {

    const interval = setInterval(() => {
    
        if (rohanHealth <= 0) {

            off();
            clearInterval(interval);
        } else if (jinuHealth <= 0) {

            document.body.style.overflow = 'hidden';

            canShowDiv = false;
            
            off();
            

            customAlert.style.display = "block";
            alertP.textContent = "JINU HAS DIED AND THEREFORE THE GAME MUST END! (How about you stay alive longer?)"

            clearInterval(interval);
            buttonOK.addEventListener("click", function(){
                
                location.reload();

            });
        }
    }, 1);

}

deathCheck();


jBlastersButton.addEventListener("click", function(){
    if (points >= jBlastersPrice) {
        
        changePoints("s", jBlastersPrice);
        jBlastersPrice = jBlastersPrice * jBlastersMultiplyer;
        updateText();
        jBlastersDamage = jBlastersDamage * 2;
        pointsMultiplyer = pointsMultiplyer * 2;
        jBlastersVideo.style.display = "block";
        
        canShowBlasters = true;
        
        
        jBlasters();
    } else {
        alert("ur poor you cant pay that :(");
    }
    
    updateText();
});

jDeaglesButton.addEventListener("click", function(){
    if (points >= jDeaglesPrice) {
        
        
        changePoints("s", jDeaglesPrice);
        jDeaglesPrice = jDeaglesPrice * jDeaglesMultiplyer;
        updateText();
        jDeaglesDamage = jDeaglesDamage * 2;
        pointsMultiplyer = pointsMultiplyer * 2;
        jDeaglesVideo.style.display = "block";

        canShowDeagles = true;
        
        jDeagles();
    } else {
        alert("ur poor you cant pay that :(");
    }

    updateText();
});

function changePoints(addOrSub, point) {


    if (addOrSub == "add") {
        
        points += point * pointsMultiplyer;
    } else {

        points -= point; 
    }


    
}

function on() {

    if (canShowBlasters) {

        jBlastersVideo.style.display = "block";

        jBlasters();
    }

    if (canShowDeagles) {

        jDeaglesVideo.style.display = "block";

        jDeagles();
    }
    
    jinu.style.display = "block";
    rohan.style.display = "block";
    jBlastersButton.style.display = "block";
    jBlastersPriceText.style.display = "block";
    jDeaglesButton.style.display = "block";
    jDeaglesPriceText.style.display = "block";
    jinuHealthText.style.display = "block";
    rohanHealthText.style.display = "block";
    rohanRPG.style.display = "block";
    pointsText.style.display = "block";
    divNext.style.display = "none";
    blankDiv.style.display = "none";
    explosion.style.display = "none";
}

function off() {

    if (canShowDiv == false) {
        canShowDiv = false;
    } else {

        canShowDiv = true;
    }

    jinu.style.display = "none";
    rohan.style.display = "none";
    neil.style.display = "none";
    eric.style.display = "none";
    jBlastersButton.style.display = "none";
    jBlastersPriceText.style.display = "none";
    jDeaglesButton.style.display = "none";
    jDeaglesPriceText.style.display = "none";
    jinuHealthText.style.display = "none";
    rohanHealthText.style.display = "none";
    pointsText.style.display = "none";
    hitText1.style.display = "none";
    hitText2.style.display = "none";
    hitText3.style.display = "none";
    movingObject.style.display = "none";
    container.style.display = "none";
    jBlastersVideo.style.display = "none";
    jDeaglesVideo.style.display = "none";
    rohanRPG.style.display = "none";
    blankDiv.style.display = "block";
    explosion.style.display = "block";
    explosion.play();
    setTimeout(function() {
        if (canShowDiv == false) {
            divNext.style.display = "none";
        } else {

            divNext.style.display = "block";
        }
    }, 2500);
    
}

function updateText() {
    pointsText.textContent = `Points: ${points}`;
    rohanHealthText.textContent = `HEALTH: ${rohanHealth}`;
    jinuHealthText.textContent = `HEALTH: ${jinuHealth}`;
    jBlastersPriceText.textContent = `Price: ${jBlastersPrice}`;
    jDeaglesPriceText.textContent = `Price: ${jDeaglesPrice}`;
}
 




function rohanHealthCheck() {
    if (rohanHealth <= 0) {
        off();
        

        

    } else {
        rohanHealth -= 1;
        updateText();
    
        
    }
}



divNext.addEventListener("click", function(){

    level += 1;

    if (level == 2) {
        canShowDiv = true;

        neil.style.display = "block";

        rohanHealth = 500;
        rohanDamage = 15;
        rohanInterval = 5000;
        updateText();
        healthRegen(500);

        regenInterval = 70;
        
        

        hitGame();

        deathCheck();

    } else if (level == 3) {

        
        canShowDiv = true;

        eric.style.display = "block";
        neil.style.display = "block";

        rohanHealth = 2000;
        rohanDamage = 35;
        rohanInterval = 3000;
        updateText();
        healthRegen(2000);

        regenInterval = 50;


        deathCheck();
    } else if (level == 4){
        canShowDiv = true;

        eric.style.display = "block";
        neil.style.display = "block";
        satya.style.display = "block";

        rohanHealth = 4000;
        rohanDamage = 35;
        rohanInterval = 2800;
        updateText();
        healthRegen(4000);

        regenInterval = 45;

        
        deathCheck();
    }

    on();

    
    jinuHealth = 100;

    updateText();



});

rohan.addEventListener("click", function() {
    
    rohanHealthCheck();

    changePoints("add", 1);

    updateText();
});

index = 0;

document.addEventListener("keydown", function(event) {

    const movingRect = movingObject.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    if (event.code === "KeyQ") {
        
        if (movingRect.left < targetRect.right && 
            movingRect.right > targetRect.left) {
                
                index += 1;
                if (index == 1) {
                    hitText1.style.display = "block";
                    hitText1.style.animation = ("slideHit1 .3s ease 1;");
                } else if (index == 2) {
                    hitText2.style.display = "block";
                    hitText2.style.animation = ("slideHit2 .3s ease 1;");
                } else if (index == 3) {
                    hitText3.style.display = "block";
                    hitText3.style.animation = ("slideHit3 .3s ease 1;");
                }

            } else {
                jinuHealth -= 10;
                updateText();
            }
        }
    });

movingObject.addEventListener("animationend", function() {
    if (index == 0) {
        jinuHealth -= 30;
        updateText();
        
    } else if (index == 1) {
        jinuHealth -= 20;
        updateText();
        
    } else if (index == 2) {
        jinuHealth -= 10;
        updateText();
        
    }
});
    
    




