let timeLeft = 30;
let timer;
let isRunning = false;
let workSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
let restSound = new Audio('https://www.soundjay.com/button/beep-09.wav');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        let [work, rest] = document.getElementById('preset').value.split('-').map(Number);
        timeLeft = work;
        timer = setInterval(() => {
            document.getElementById('timer').innerText = `00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
            if (timeLeft === 0) {
                workSound.play();
                timeLeft = timeLeft === work ? rest : work;
            }
            timeLeft--;
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('timer').innerText = "00:30";
}
