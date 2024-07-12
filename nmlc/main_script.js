// CountDown TIMER
var sec = 59; // set the seconds
var min = 05; // set the minutes
function countDown() {
    sec--;
    if (sec == -01) {
        sec = 59;
        min = min - 1;
    } else {
        min = min;
    }

    if (sec <= 9) {
        sec = "0" + sec;
    }

    time = (min <= 9 ? "" + min : min) + " minutes " + sec + " seconds";

    if (document.getElementById) {
        document.getElementById('theTime').innerHTML = time;
    }

    SD = window.setTimeout("countDown();", 1000);
    if (min == '00' && sec == '00') {
        sec = "00";
        window.clearTimeout(SD);
    }
}
window.onload = countDown;

// GET COUNTRY NAME
$.get('https://ipinfo.io', function (response) {
    $("#country").html(response.country);
}, 'json');

// Hide Alert
$("#alert").click(function () {
    $("#layer").hide();
});

// shake alert 
jQuery.fn.shake = function () {
    this.each(function (i) {
        $(this).css({
            "position": "relative"
        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left: -25
            }, 10).animate({
                left: 0
            }, 50).animate({
                left: 25
            }, 10).animate({
                left: 0
            }, 50);
        }
    });
    return this;
}

$("#alert").shake();