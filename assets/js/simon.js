var simonSequence = [];
var userSequence = [];
var colourFlash;
var turn = 0;
var correct;
var simonTurn;
var intervalId;
var sound = true;
var gameWon;
var gameStillOn = false;
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
var difWhenPlaying;
var idleTimer = 0;


const turnOnScreen = document.querySelector("#turn");
const turnText = document.querySelector("#turn-text");
const grnBtn = document.querySelector("#green-btn");
const redBtn = document.querySelector("#red-btn");
const ylwBtn = document.querySelector("#yellow-btn");
const bluBtn = document.querySelector("#blue-btn");
const purBtn = document.querySelector("#purple-btn");
const cynBtn = document.querySelector("#cyan-btn");
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
const feedbackBtn = document.querySelector("#feedback-button");
const difSelect = document.querySelector("#difficulty");

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
    }
    else if (highscoreInfoToggle == false) {
        highscoreInfo.classList.remove("visable");
        highscoreInfoToggle = true;
    }
});

creditBtn.addEventListener('click', function() {
    if (creditsToggle == true) {
        credits.classList.add("visable");
        creditBtn.innerHTML = "Hide Credits";
        creditsToggle = false;
        instructionsToggle = true;
        instructions.classList.remove('visable');
        instructionsBtn.innerHTML = "Instructions";
    }
    else if (creditsToggle == false) {
        credits.classList.remove('visable');
        creditBtn.innerHTML = "Credits";
        creditsToggle = true;
    }
});


instructionsBtn.addEventListener('click', function() {
    if (instructionsToggle == true) {
        instructions.classList.add('visable');
        instructionsBtn.innerHTML = "Hide Instructions";
        instructionsToggle = false;
        creditsToggle = true;
        credits.classList.remove('visable');
        creditBtn.innerHTML = "Credits";
    }
    else if (instructionsToggle == false) {
        instructions.classList.remove('visable');
        instructionsBtn.innerHTML = "Instructions";
        instructionsToggle = true;
    }
});

startBtn.addEventListener('click', function() {
    if (difSelect.value == "SELECT DIFFICULTY") {
        difSelect.value = "NORMAL";
    }
    difWhenPlaying = difSelect.value;
    if (difWhenPlaying == "EASY") {
        easyMode();
    }
    if (difWhenPlaying != "EASY") {
        bluBtn.classList.remove("darkoutblue");
        ylwBtn.classList.remove("darkoutyellow");
    }
    if (difWhenPlaying == "EXTREME") {
        purBtn.classList.add("visable");
        cynBtn.classList.add("visable");
    }
    if (difWhenPlaying != "EXTREME") {
        purBtn.classList.remove("visable");
        cynBtn.classList.remove("visable");
    }
    if (firstClick || userPlaying == true) {
        if (firstClick == true) {
            idleWarning();
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
        scoreForm.classList.remove("visable");
        startBtn.classList.remove("winner-function-margin");
        startBtn.innerHTML = "Retry";
        startBtn.classList.add("hidden");
        turnOnScreen.classList.remove("hidden");
        turnOnScreen.classList.add("level-box-after-start");
        turnText.classList.add("level-box-text-after-start");
        colourClicks = 0;
        play();
        gameStillOn = true;
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
    if (difWhenPlaying == "EASY") {
        for (var i = 0; i < 10; i++) {
            simonSequence.push(Math.floor(Math.random() * 2) + 1);
        }
    }
    if (difWhenPlaying == "NORMAL") {
        for (var i = 0; i < 20; i++) {
            simonSequence.push(Math.floor(Math.random() * 4) + 1);
        }
    }
    if (difWhenPlaying == "HARD") {
        for (var i = 0; i < 50; i++) {
            simonSequence.push(Math.floor(Math.random() * 4) + 1);
        }
    }
    if (difWhenPlaying == "EXTREME") {
        for (var i = 0; i < 50; i++) {
            simonSequence.push(Math.floor(Math.random() * 6) + 1);
        }
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
            if (simonSequence[colourFlash] == 5) cyanSound();
            if (simonSequence[colourFlash] == 6) purpleSound();
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

function cyanSound() {
    if (sound) {
        let audio = document.getElementById("cyan-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    cynBtn.style.backgroundColor = "#35efef";
}

function purpleSound() {
    if (sound) {
        let audio = document.getElementById("purple-snd");
        if (playAudio == true) {
            audio.play();
        }
    }
    sound = true;
    purBtn.style.backgroundColor = "#c638e8";
}

function clearColor() {
    grnBtn.style.backgroundColor = "darkgreen";
    redBtn.style.backgroundColor = "darkred";
    ylwBtn.style.backgroundColor = "goldenrod";
    bluBtn.style.backgroundColor = "darkblue";
    purBtn.style.backgroundColor = "#683a73";
    cynBtn.style.backgroundColor = "#347d7d";
}

function colourFlashColor() {
    grnBtn.style.backgroundColor = "lightgreen";
    redBtn.style.backgroundColor = "crimson";
    ylwBtn.style.backgroundColor = "yellow";
    bluBtn.style.backgroundColor = "lightskyblue";
    purBtn.style.backgroundColor = "#c638e8";
    cynBtn.style.backgroundColor = "#35efef";
}

grnBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true) {
        userSequence.push(1);
        idleTimer = 0;
        verify();
        greenSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

redBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true) {
        userSequence.push(2);
        idleTimer = 0;
        verify();
        redSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

ylwBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true && difWhenPlaying != "EASY") {
        userSequence.push(3);
        idleTimer = 0;
        verify();
        yellowSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bluBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true && difWhenPlaying != "EASY") {
        userSequence.push(4);
        idleTimer = 0;
        verify();
        blueSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

cynBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true && difWhenPlaying != "EASY" && difWhenPlaying == "EXTREME") {
        userSequence.push(5);
        idleTimer = 0;
        verify();
        cyanSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

purBtn.addEventListener('click', function() {
    if (userPlaying == true && gameStillOn == true && difWhenPlaying != "EASY" && difWhenPlaying == "EXTREME") {
        userSequence.push(6);
        idleTimer = 0;
        verify();
        purpleSound();
        colourClicks++;
        if (!gameWon) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});


function verify() {
    if (userSequence[userSequence.length - 1] !== simonSequence[userSequence.length - 1])
        correct = false;
    if (difWhenPlaying == "EASY") {
        if (userSequence.length == 10 && correct) {
            winnerFunction();
        }
    }
    if (difWhenPlaying == "NORMAL") {
        if (userSequence.length == 20 && correct) {
            winnerFunction();
        }
    }
    if (difWhenPlaying == "HARD") {
        if (userSequence.length == 50 && correct) {
            winnerFunction();
        }
    }
    if (difWhenPlaying == "EXTREME") {
        if (userSequence.length == 50 && correct) {
            winnerFunction();
        }
    }

    if (correct == false) {
        colourFlashColor();
        turnOnScreen.innerHTML = "*";
        gameStillOn = false;
        highscoreInfo.innerHTML = colourClicks + " Clicks";
        setTimeout(function() {
            turnOnScreen.innerHTML = turn;
            turnOnScreen.classList.add("hidden");
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
        highscoreInfo.innerHTML = colourClicks + " Clicks";
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
    turnOnScreen.classList.add("hidden");
    userPlaying = false;
    gameWon = true;
    gameStillOn = false;
    timeRunning = false;
    totalScore = colourClicks;
    emailSequence();
    startBtn.classList.add("winner-function-margin");
    startBtn.innerHTML = "YOU WIN!";
    startBtn.classList.remove("hidden");
    turnOnScreen.classList.remove("level-box-after-start");
    turnText.classList.remove("level-box-text-after-start");
    setTimeout(function() {
        startBtn.innerHTML = "Play Again?";
    }, 5000);
}

function emailSequence() {
    scoreForm.classList.add("visable");
    document.getElementById("turns").setAttribute('value', "turn " + turn);
    document.getElementById("time").setAttribute('value', time + " seconds");
    totalScore = totalScore | 0;
    document.getElementById("total").setAttribute('value', totalScore + " score");
    document.getElementById("difficultyemail").setAttribute('value', "Difficulty:" + difWhenPlaying);
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

function easyMode() {
    bluBtn.classList.add("darkoutblue");
    ylwBtn.classList.add("darkoutyellow");
}

function idleWarning() {
    setInterval(function() {
        if (userPlaying == true) {
            idleTimer++;
        }
        else if (userPlaying == false) {
            idleTimer = 0;
        }
    }, 1000);
    setInterval(function() {
        if (idleTimer == 30) {
            alert("Are you still playing?");
        }
    }, 500);
}
