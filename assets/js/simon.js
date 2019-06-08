var simonSequence = [];
var userSequence = [];
var colourFlash;
var turn;
var correct;
var simonTurn;
var intervalId;
var sound = true;
var gameWon;
var userPlaying = false;

const turnOnScreen = document.querySelector("#turn");
const grnBtn = document.querySelector("#green-btn");
const redBtn = document.querySelector("#red-btn");
const ylwBtn = document.querySelector("#yellow-btn");
const bluBtn = document.querySelector("#blue-btn");
const startBtn = document.querySelector("#start");

startBtn.addEventListener('click', function() {
    play();
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
    }

    if (simonTurn) {
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
        audio.play();
    }
    sound = true;
    grnBtn.style.backgroundColor = "lightgreen";
}

function redSound() {
    if (sound) {
        let audio = document.getElementById("red-snd");
        audio.play();
    }
    sound = true;
    redBtn.style.backgroundColor = "crimson";
}

function yellowSound() {
    if (sound) {
        let audio = document.getElementById("yellow-snd");
        audio.play();
    }
    sound = true;
    ylwBtn.style.backgroundColor = "yellow";
}

function blueSound() {
    if (sound) {
        let audio = document.getElementById("blue-snd");
        audio.play();
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
        turnOnScreen.innerHTML = "***";
        setTimeout(function() {
            turnOnScreen.innerHTML = turn;
            clearColor();
            play();
        }, 800);

        sound = false;
    }

    if (turn == userSequence.length && correct && !gameWon) {
        turn++;
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
}
