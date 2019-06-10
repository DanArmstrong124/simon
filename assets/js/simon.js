var simonSequence = [];
var userSequence = [];
var colourFlash;
var turn = 0;
var correct;
var simonTurn;
var intervalId;
var sound = true;
var gameWon;
var userPlaying = false;
var firstClick = true;
var creditsToggle = true;
var instructionsToggle = true;
var time = 0;
var timeRunning = true;
var totalScore;
var highScore = 0;
var highscoreInfoToggle = true;
var colourClicks = 0;
var muteToggle = true;
var playAudio = true;


const turnOnScreen = document.querySelector("#turn");
const turnText = document.querySelector("#turn-text");
const grnBtn = document.querySelector("#green-btn");
const redBtn = document.querySelector("#red-btn");
const ylwBtn = document.querySelector("#yellow-btn");
const bluBtn = document.querySelector("#blue-btn");
const startBtn = document.querySelector("#start");
const creditBtn = document.querySelector("#credits-button");
const instructionsBtn = document.querySelector("#instructions-button");
const credits = document.querySelector("#credits");
const instructions = document.querySelector("#instructions");
const scoreForm = document.querySelector("#scoreForm");
const highscoreOnScreen = document.querySelector("#highscoreOnScreen");
const highscoreInfoButton = document.querySelector("#highscore-info-button");
const highscoreInfo = document.querySelector("#highscore-info");
const yourTurn = document.querySelector("#your-turn");
const simonsTurn = document.querySelector("#simons-turn");
const muteBtn = document.querySelector("#mute-button");

muteBtn.addEventListener('click', function() {
    if (muteToggle == true) {
        muteBtn.classList.remove("fa-volume-up");
        muteBtn.classList.add("fa-volume-off");
        muteBtn.classList.add("mute-on");
        muteToggle = false;
        playAudio = false;
    }
    else if (muteToggle == false) {
        muteBtn.classList.remove("fa-volume-off");
        muteBtn.classList.remove("mute-on");
        muteBtn.classList.add("fa-volume-up");
        muteToggle = true;
        playAudio = true;
    }
});

highscoreInfoButton.addEventListener('click', function() {
    if (highscoreInfoToggle == true) {
        highscoreInfo.classList.add("visable");
        highscoreInfoToggle = false;
        setInterval(function() {
            highscoreInfo.innerHTML = colourClicks + " Correct Clicks";
        }, 1000);
    }
    else if (highscoreInfoToggle == false) {
        highscoreInfo.classList.remove("visable");
        highscoreInfoToggle = true;
    }
});

creditBtn.addEventListener('click', function() {
    if (creditsToggle == true && instructionsToggle != false) {
        credits.classList.add("visable")
        creditBtn.innerHTML = "Hide Credits";
        creditsToggle = false;
    }
    else if (creditsToggle == false) {
        credits.classList.remove('visable');
        creditBtn.innerHTML = "Credits";
        creditsToggle = true;
    }
});


instructionsBtn.addEventListener('click', function() {
    if (instructionsToggle == true && creditsToggle != false) {
        instructions.classList.add('visable');
        instructionsBtn.innerHTML = "Hide Instructions";
        instructionsToggle = false;
    }
    else if (instructionsToggle == false) {
        instructions.classList.remove('visable');
        instructionsBtn.innerHTML = "Instructions";
        instructionsToggle = true;
    }
});

startBtn.addEventListener('click', function() {
    if (firstClick || userPlaying == true) {
        if (firstClick == true) {
            setInterval(function() {
                if (simonTurn == true) {
                    timeRunning = false;
                }
                else if (simonTurn == false && correct == true && gameWon != true) {
                    timeRunning = true;
                }
            }, 100);
            setInterval(function() {
                if (timeRunning == true) {
                    time++;
                }
            }, 1000);
            firstClick = false;
        }
        startBtn.innerHTML = "Retry";
        startBtn.classList.add("hidden");
        turnOnScreen.classList.add("level-box-after-start");
        turnText.classList.add("level-box-text-after-start");
        colourClicks = 0;
        play();
    }
});

function play() {
    gameWon = false;
    simonSequence = [];
    userSequence = [];
    colourFlash = 0;
    intervalId = 0;
    turn = 1;
    turnOnScreen.innerHTML = 1;
    correct = true;
    time = 0;
    for (var i = 0; i < 20; i++) {
        simonSequence.push(Math.floor(Math.random() * 4) + 1);
    }
    simonTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {

    if (colourFlash == turn) {
        clearInterval(intervalId);
        simonTurn = false;
        clearColor();
        userPlaying = true;
        userSimonTurnText();
    }

    if (simonTurn) {
        userSimonTurnText();
        clearColor();
        setTimeout(() => {
            if (simonSequence[colourFlash] == 1) greenSound();
            if (simonSequence[colourFlash] == 2) redSound();
            if (simonSequence[colourFlash] == 3) yellowSound();
            if (simonSequence[colourFlash] == 4) blueSound();
            colourFlash++;
        }, 200);
    }
}

function greenSound() {
    if (sound) {
        let audio = document.getElementById("green-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    grnBtn.style.backgroundColor = "lightgreen";
}

function redSound() {
    if (sound) {
        let audio = document.getElementById("red-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    redBtn.style.backgroundColor = "crimson";
}

function yellowSound() {
    if (sound) {
        let audio = document.getElementById("yellow-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    ylwBtn.style.backgroundColor = "yellow";
}

function blueSound() {
    if (sound) {
        let audio = document.getElementById("blue-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    bluBtn.style.backgroundColor = "lightskyblue";
}

function clearColor() {
    grnBtn.style.backgroundColor = "darkgreen";
    redBtn.style.backgroundColor = "darkred";
    ylwBtn.style.backgroundColor = "goldenrod";
    bluBtn.style.backgroundColor = "darkblue";
}

function colourFlashColor() {
    grnBtn.style.backgroundColor = "lightgreen";
    redBtn.style.backgroundColor = "crimson";
    ylwBtn.style.backgroundColor = "yellow";
    bluBtn.style.backgroundColor = "lightskyblue";
}

grnBtn.addEventListener('click', function() {
    if (userPlaying) {
        userSequence.push(1);
        verify();
        greenSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

redBtn.addEventListener('click', function() {
    if (userPlaying) {
        userSequence.push(2);
        verify();
        redSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

ylwBtn.addEventListener('click', function() {
    if (userPlaying) {
        userSequence.push(3);
        verify();
        yellowSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

bluBtn.addEventListener('click', function() {
    if (userPlaying) {
        userSequence.push(4);
        verify();
        blueSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})


function verify() {
    if (userSequence[userSequence.length - 1] !== simonSequence[userSequence.length - 1])
        correct = false;

    if (userSequence.length == 20 && correct) {
        winnerFunction();
    }

    if (correct == false) {
        colourFlashColor();
        turnOnScreen.innerHTML = "*";
        setTimeout(function() {
            turnOnScreen.innerHTML = turn;
            clearColor();
            timeRunning = false;
            totalScore = colourClicks - 1;
            emailSequence();
            startBtn.classList.remove("hidden");
            turnOnScreen.classList.remove("level-box-after-start");
            turnText.classList.remove("level-box-text-after-start");
        }, 800);

        sound = false;
    }

    if (turn == userSequence.length && correct && !gameWon) {
        turn++;
        highscoreInfo.innerHTML = colourClicks + " Correct Clicks";
        userSequence = [];
        userPlaying = false;
        simonTurn = true;
        colourFlash = 0;
        turnOnScreen.innerHTML = turn;
        intervalId = setInterval(gameTurn, 800);
    }

}

function winnerFunction() {
    colourFlashColor();
    turnOnScreen.innerHTML = "WIN";
    userPlaying = false;
    gameWon = true;
    timeRunning = false;
    totalScore = colourClicks;
    emailSequence();
    startBtn.classList.remove("hidden");
    turnOnScreen.classList.remove("level-box-after-start");
    turnText.classList.remove("level-box-text-after-start");
}

function emailSequence() {
    scoreForm.classList.add("visable");
    document.getElementById("turns").setAttribute('value', "turn " + turn);
    document.getElementById("time").setAttribute('value', time + " seconds");
    totalScore = totalScore | 0;
    document.getElementById("total").setAttribute('value', totalScore + " score");
    highScoreChecker();
}

function highScoreChecker() {
    if (totalScore > highScore) {
        highScore = totalScore;
        highscoreOnScreen.innerHTML = highScore;
    }
}

function userSimonTurnText() {
    if (simonTurn == true) {
        simonsTurn.classList.add("visable");
        yourTurn.classList.remove("visable");
    }
    else if (simonTurn == false) {
        yourTurn.classList.add("visable");
        simonsTurn.classList.remove("visable");
    }
}
