var seconds = 40;
var hundreds = 0;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds + ":" + hundreds;
    if (hundreds === 0) {
        if (seconds === 0) {
            clearInterval(countdownTimer);
        } else {
            seconds--;
            hundreds = 100;
        }
    } else {
        hundreds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 10);