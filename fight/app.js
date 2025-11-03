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

const container2 = document.querySelector(".container2")
const target2 = document.getElementById("target2")
const movingObject2 = document.getElementById("movingObject2")
const badZone2 = document.getElementById("badZone2")

const container3 = document.querySelector(".container3")
const target31 = document.getElementById("target31")
const target32 = document.getElementById("target32")
const badZone31 = document.getElementById("badZone31")
const badZone32 = document.getElementById("badZone32")
const movingObject3 = document.getElementById("movingObject3")

const container4left = document.querySelector(".container4left")
const badZone4left = document.getElementById("badZone4left")

const container4right = document.querySelector(".container4right")
const badZone4right = document.getElementById("badZone4right")

const movingObject4left = document.getElementById("movingObject4left")
const movingObject4right = document.getElementById("movingObject4right")

const target4 = document.getElementById("target4")

const container5left = document.querySelector(".container5left")
const badZone5left = document.getElementById("badZone5left")

const container5right = document.querySelector(".container5right")
const badZone5right = document.getElementById("badZone5right")

const movingObject5left = document.getElementById("movingObject5left")
const movingObject5right = document.getElementById("movingObject5right")

const target5 = document.getElementById("target5")

const container6left = document.querySelector(".container6left")
const badZone6left = document.getElementById("badZone6left")

const container6right = document.querySelector(".container6right")
const badZone6right = document.getElementById("badZone6right")

const movingObject6left = document.getElementById("movingObject6left")
const movingObject6right = document.getElementById("movingObject6right")

const target6 = document.getElementById("target6")

const container7 = document.querySelector(".container7")
const badZone7 = document.getElementById("badZone7")

const movingObject7 = document.getElementById("movingObject7")

const target7 = document.getElementById("target7")


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

level = 3;

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
function off2() {
    
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
        
        rohanHealth = 1200;
        rohanDamage = 20;
        rohanInterval = 3000;
        updateText();
        healthRegen(1200);
        
        regenInterval = 50;
        

        
        deathCheck();
    } else if (level == 4){
        canShowDiv = true;
        

        rohan.style.display = "none";
        eric.style.display = "none";
        neil.style.display = "none";
        satya.style.display = "block";

        
        rohanHealth = 4000;
        jinuHealth = 10000;
        rohanDamage = 0;
        rohanInterval = 2800;
        updateText();
        healthRegen(4000);
        
        regenInterval = 1000000000000000;
        
        divNext.style.display = "none";
        blankDiv.style.display = "none";
        deathCheck();
        off2();
        jinu.style.display = "block";
        satya.style.display = "block";
        explosion.style.display = "none";
        hitGame();
    }
    
    
    
    
    jinuHealth = 100;
    
    updateText();
    
    
    
});

rohan.addEventListener("click", function() {
    
    rohanHealthCheck();
    
    changePoints("add", 1);
    
    updateText();
});

function hitGame() {

    if (level == 4) {
            
        setTimeout(() => {

            hitSoundIndicator.play();
            
            setTimeout(() => {
                hitSound.play();
                movingObject.style.display = "block";
                
                container.style.display = "block";
                
                movingObject.style.animation = ("none");
                movingObject.offsetHeight;
                movingObject.style.animation = (`slide .6s ease 3`);
            }, 600);
            
            
            hitText1.style.display = "none"
            hitText2.style.display = "none"
            hitText3.style.display = "none"
            index = 0;
        }, 6000);

    } else {
        setInterval(() => {
            
            hitSoundIndicator.play();
            
            setTimeout(() => {
                hitSound.play();
                movingObject.style.display = "block";
                
                container.style.display = "block";
                
                movingObject.style.animation = ("none");
                movingObject.offsetHeight;
                movingObject.style.animation = (`slide .6s ease 3`);
            }, 600);
            
            
            hitText1.style.display = "none"
            hitText2.style.display = "none"
            hitText3.style.display = "none"
            index = 0;

            
        }, hitGameInterval);
    }


    
}
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

        if (level >= 3) {

            hitGame2();
        }

    });
    
function hitGame2() {
    
        movingObjectSpeed = ".6s";
        hitSoundIndicator.play();
        
        setTimeout(() => {
            hitSound.currentTime = 0;
            hitSound.play();
            movingObject2.style.display = "block";
            
            container2.style.display = "block";
            
            movingObject2.style.animation = ("none");
            movingObject2.offsetHeight;
            movingObject2.style.animation = (`slide ${movingObjectSpeed} ease 3`);
        }, 600);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index2 = 0;
    

    
}
index2 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect2 = movingObject2.getBoundingClientRect();
    const targetRect2 = target2.getBoundingClientRect();
    
    if (event.code === "KeyW") {
        
        if (movingRect2.left < targetRect2.right && 
            movingRect2.right > targetRect2.left) {
                
                index2 += 1;
                if (index2 == 1) {
                    hitText1.style.display = "block";
                    hitText1.style.animation = ("slideHit1 .3s ease 1;");
                } else if (index2 == 2) {
                    hitText2.style.display = "block";
                    hitText2.style.animation = ("slideHit2 .3s ease 1;");
                } else if (index2 == 3) {
                    hitText3.style.display = "block";
                    hitText3.style.animation = ("slideHit3 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 10;
                updateText();
            }
        }
    });
    
    movingObject2.addEventListener("animationend", function() {
        if (index2 == 0) {
            jinuHealth -= 30;
            updateText();
            
        } else if (index2 == 1) {
            jinuHealth -= 20;
            updateText();
            
        } else if (index2 == 2) {
            jinuHealth -= 10;
            updateText();
            
        }

        if (level == 4) {

            hitGame3();
        }
    });


function hitGame3() {
    
    hitSoundIndicator.play();
    movingObjectSpeed = "1.5s";
        
        setTimeout(() => {
            hitSound.currentTime = 0;
            hitSound.play();
            movingObject3.style.display = "block";
            
            container3.style.display = "block";
            
            movingObject3.style.animation = ("none");
            movingObject3.offsetHeight;
            movingObject3.style.animation = (`slide ${movingObjectSpeed} ease-out 1`);
        }, 600);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index3 = 0;
    

    
}
index3 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect3 = movingObject3.getBoundingClientRect();
    const targetRect31 = target31.getBoundingClientRect();
    const targetRect32 = target32.getBoundingClientRect();
    
    if (event.code === "KeyE") {
        
        if (movingRect3.left < targetRect31.right && 
            movingRect3.right > targetRect31.left ||
            movingRect3.left < targetRect32.right && 
            movingRect3.right > targetRect32.left
        ) {
                
                index3 += 1;
                if (index3 == 1) {
                    hitText1.style.display = "block";
                    hitText1.style.animation = ("slideHit1 .3s ease 1;");
                } else if (index3 == 2) {
                    hitText2.style.display = "block";
                    hitText2.style.animation = ("slideHit2 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 1000000000000000;
                updateText();
            }
        }
    });
    
    movingObject3.addEventListener("animationend", function() {
        if (index3 == 0) {
            jinuHealth -= 1000000000000000;
        
            
        } else if (index3 == 1) {
            jinuHealth -= 1000000000000000;
            
            
        } else if (index3 == 2) {
           
            
        }

        if (level == 4) {
            hitGame4();

        }
    });


function hitGame4() {

        container.style.display = "none";
        container2.style.display = "none";
        container3.style.display = "none";
    
        movingObjectSpeed = ".6s";

        for (let i = 0; i < 3; i++) {
            setTimeout(() => {

                hitSoundIndicator.play();
                hitSoundIndicator.currentTime = 0;
                if (i == 0) {

                    container4left.style.display = "block";
                    container4right.style.display = "block";
                } else if (i == 1) {
                    
                    container5left.style.display = "block";
                    container5right.style.display = "block";
                } else if (i == 2) {
                    
                    container6left.style.display = "block";
                    container6right.style.display = "block";
                }
            }, (i + 1) * 500)
        }
        
        setTimeout(() => {
            hitSound.currentTime = 0;
            hitSound.play();
            movingObject4left.style.display = "block";
            movingObject4right.style.display = "block";
            
            container4left.style.display = "block";
            container4right.style.display = "block";
            
            movingObject4left.style.animation = ("none");
            movingObject4left.offsetHeight;
            movingObject4left.style.animation = (`slide4left ${movingObjectSpeed} ease 1`);

            movingObject4right.style.animation = ("none");
            movingObject4right.offsetHeight;
            movingObject4right.style.animation = (`slide4right ${movingObjectSpeed} ease 1`);
        }, 4000);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index4 = 0;
    

    
}
index4 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect4 = movingObject4left.getBoundingClientRect();
    const targetRect4 = target4.getBoundingClientRect();
    
    if (event.code === "KeyA") {
        
        if (movingRect4.left < targetRect4.right && 
            movingRect4.right > targetRect4.left) {
                
                index4 += 1;
                if (index4 == 1) {
                    hitText1.style.display = "block";
                    hitText1.style.animation = ("slideHit1 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 1000000000000;
            }
        }
    });
    
    movingObject4left.addEventListener("animationend", function() {
        
        movingObject4left.style.display = "none";
        movingObject4right.style.display = "none";

        if (index4 == 0) {
            jinuHealth -= 1000000000000;
            
        }

        if (level == 4) {
            hitGame5();

        }
    });






function hitGame5() {

    
        movingObjectSpeed = ".6s";
        
        setTimeout(() => {
            

            movingObject5left.style.display = "block";
            movingObject5right.style.display = "block";
            
            container5left.style.display = "block";
            container5right.style.display = "block";
            
            movingObject5left.style.animation = ("none");
            movingObject5left.offsetHeight;
            movingObject5left.style.animation = (`slide4left ${movingObjectSpeed} ease 1`);

            movingObject5right.style.animation = ("none");
            movingObject5right.offsetHeight;
            movingObject5right.style.animation = (`slide4right ${movingObjectSpeed} ease 1`);
        }, 100);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index5 = 0;
    

    
}
index5 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect5 = movingObject5left.getBoundingClientRect();
    const targetRect5 = target5.getBoundingClientRect();
    
    if (event.code === "KeyS") {
        
        if (movingRect5.left < targetRect5.right && 
            movingRect5.right > targetRect5.left) {
                
                index5 += 1;
                if (index5 == 1) {
                    hitText2.style.display = "block";
                    hitText2.style.animation = ("slideHit1 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 1000000000000;
            }
        }
    });
    
    movingObject5left.addEventListener("animationend", function() {
        
        movingObject5left.style.display = "none";
        movingObject5right.style.display = "none";

        if (index5 == 0) {
            jinuHealth -= 1000000000000;
            
        }

        if (level == 4) {

            hitGame6();
        }
    });
    
    
    
    
    
    
    
    
function hitGame6() {

    
        movingObjectSpeed = ".6s";
        
        setTimeout(() => {
            

            movingObject6left.style.display = "block";
            movingObject6right.style.display = "block";
            
            container6left.style.display = "block";
            container6right.style.display = "block";
            
            movingObject6left.style.animation = ("none");
            movingObject6left.offsetHeight;
            movingObject6left.style.animation = (`slide4left ${movingObjectSpeed} ease 1`);

            movingObject6right.style.animation = ("none");
            movingObject6right.offsetHeight;
            movingObject6right.style.animation = (`slide4right ${movingObjectSpeed} ease 1`);
        }, 100);

            
        hitText1.style.display = "none"
        hitText2.style.display = "none"
        hitText3.style.display = "none"
        index6 = 0;
    

    
}
index6 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect6 = movingObject6left.getBoundingClientRect();
    const targetRect6 = target6.getBoundingClientRect();
    
    if (event.code === "KeyD") {
        
        if (movingRect6.left < targetRect6.right && 
            movingRect6.right > targetRect6.left) {
                
                index6 += 1;
                if (index6 == 1) {
                    hitText3.style.display = "block";
                    hitText3.style.animation = ("slideHit1 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 1000000000000;
            }
        }
    });
    
    movingObject6left.addEventListener("animationend", function() {
        
        movingObject6left.style.display = "none";
        movingObject6right.style.display = "none";

        if (index6 == 0) {
            jinuHealth -= 1000000000000;
            
        }

        if (level == 4) {
            hitGame7();

        }
    });




function hitGame7() {
    
    

    hitSoundIndicator.play();
    
    setTimeout(() => {
        hitSound.currentTime = 0;
        hitSound.play();
        movingObject7.style.display = "block";
        
        container7.style.display = "block";
        
        movingObject7.style.animation = ("none");
        movingObject7.offsetHeight;
        movingObject7.style.animation = (`slide7 .7s ease 3`);

        target7.style.animation = ("none");
        target7.offsetHeight;
        target7.style.animation = (`slideTarget 2s ease 1`);
    }, 600);
    
    hitText1.style.display = "none"
    hitText2.style.display = "none"
    hitText3.style.display = "none"
    index7 = 0;
}
index7 = 0;

document.addEventListener("keydown", function(event) {
    
    const movingRect7 = movingObject7.getBoundingClientRect();
    const targetRect7 = target7.getBoundingClientRect();
    
    if (event.code === "KeyZ") {
        
        if (movingRect7.left < targetRect7.right && 
            movingRect7.right > targetRect7.left) {
                
                index7 += 1;
                if (index7 == 1) {
                    hitText1.style.display = "block";
                    hitText1.style.animation = ("slideHit1 .3s ease 1;");
                } else if (index7 == 2) {
                    hitText2.style.display = "block";
                    hitText2.style.animation = ("slideHit2 .3s ease 1;");
                } else if (index7 == 3) {
                    hitText3.style.display = "block";
                    hitText3.style.animation = ("slideHit3 .3s ease 1;");
                }
                
            } else {
                jinuHealth -= 100000000000000;

            }
        }
    });
    
    movingObject7.addEventListener("animationend", function() {

        movingObject7.style.display = "none";

        if (index7 < 3) {
            jinuHealth -= 100000000000000000;
            
        } 

        if (level == 4) {


        }
    });