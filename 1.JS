// Functions
function changeDirection(turningDirection) {
    if (n == true) {
        switch (turningDirection) {
            case "left":
                document.querySelector('.head').style.transform = "rotate(90deg)";
                break;
            case "down":
                document.querySelector('.head').style.transform = "rotate(90deg)";
                break;
            case "up":
                document.querySelector('.head').style.transform = "rotate(90deg)";
                break;
            case "right":
                document.querySelector('.head').style.transform = "rotate(90deg)";
                break;
        }
    }
}
// Function to change X cordinate of the snake
function changeXBy(value) {
    if (n == true) {
        j++;
        i = j * 3;
        if (value < 0) {
            document.querySelector('.snake').style.right = playerPosition.x - 35 + 'px';
        }
        else {
            playerPosition.x = i + 550;
            document.querySelector('.snake').style.left = playerPosition.x + 'px';
        }
        df = false;
    }
}
function stopAllFunctions() {
    if (df == false) {
        gameOverSound.play();
        musicSound.pause();
        document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,0.4)';
        document.querySelector('.modal').style.display = 'block';
        n = false;
        df = true;
    }
}
function addRestriction() {
    if (playerPosition.x == 1030) {
        stopAllFunctions();
    }
    else if (playerPosition.x == 0) {
        stopAllFunctions();
    }
    else if (playerPosition.y == 0) {
        stopAllFunctions();
    }
    else if (playerPosition.y == 0) {
        stopAllFunctions();
    }
}
// Function to change Y cordinate of the snake
function changeYBy(valuee) {
    if (valuee < 0) {
        document.querySelector('.snake').style.top = playerPosition.y + 35 + 'px';
    }
    else {
        document.querySelector('.snake').style.bottom = playerPosition.y - 35 + 'px';
    }
}
function keyPress(event) {
    if (n == true) {
        let keyPressed = event.key;
        if (isStarted === false) {
            startGame();
        }
        setInterval(() => {
            musicSound.play();
        }, 1);
        switch (keyPressed) {
            case "ArrowRight":
                moveSound.play();
                playerPosition.x += 35;
                turnDirection = "right";
                changeDirection(turnDirection);
                setInterval(() => {
                    changeXBy(35);
                }, 25);
                break;
            case "ArrowDown":
                moveSound.play();
                playerPosition.y = playerPosition.y - 35;
                turnDirection = "down";
                changeDirection(turnDirection);
                setInterval(() => {
                    changeYBy(35);
                }, 1000);
                break;
            case "ArrowUp":
                moveSound.play();
                playerPosition.y = playerPosition.y + 35;
                turnDirection = "up";
                changeDirection(turnDirection);
                setInterval(() => {
                    changeYBy(-35);
                }, 1000);
                break;
            case "ArrowLeft":
                moveSound.play();
                playerPosition.x = playerPosition.x - 35;
                turnDirection = "left";
                changeDirection(turnDirection);
                setInterval(() => {
                    changeXBy(-35);
                }, 1000);
                break;
        }
    }
}
function startGame() {
    if (n == true) {
        isStarted = true;
        // What to do if snake touches the apple
        setInterval(() => {
            isEaten();
        }, 1);
    }
}
function isEaten() {
    if (n == true) {
        if (playerPosition.x && playerPosition.y == applePosition.x && applePosition.y) {
            snakeLength = snakeLength + 35;
            applePosition = { x: randomNumber, y: anotherRandomNumber };
            applesEaten++;
            document.querySelector('.appleEaten').innerHTML += applesEaten;
            foodSound.play();
        }
    }
}
// Variables and constants
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let playerPosition = { x: 30, y: 350 };
let applesEaten = 0;
let snakeLength = 105;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let anotherRandomNumber = Math.floor(Math.random() * 100) + 1;
let isStarted = false;
let applePosition = { x: 925, y: 350 };
let turnDirection = "";
let i = 0;
let j = 0;
let n = true;
let df = false;
const playAgainbtn = document.querySelector('.playagain');
playAgainbtn.addEventListener('click', function () {
    window.location.reload();
})
document.addEventListener('keydown', function () {
    keyPress(event);
});
setInterval(addRestriction, 1);