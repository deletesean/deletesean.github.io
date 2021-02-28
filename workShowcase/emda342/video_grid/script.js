//window.onload = (event) => {
function myFunction() {

var resInput = document.getElementById("resInput").value;
var sizeInput = document.getElementById("sizeInput").value;
var amountInput = document.getElementById("amountInput").value;
var initialInput = document.getElementById("initialInput").value;
var speedInput = document.getElementById("speedInput").value;
var delayTypeInput = document.getElementById("delayTypeInput").value;
var delayAmountInput = document.getElementById("delayAmountInput").value;
var timeInput = document.getElementById("timeInput").value;

if (resInput != 72 && resInput != 144 && resInput != 240 && resInput != 360 && resInput != 480 && resInput != 720 && resInput != 900 && resInput != 1080 && resInput != 1440 &&
    resInput != 2160) {
    resInput = 480;
}

if (sizeInput >= 1 && sizeInput <= 5000) {
}   else {
        sizeInput = 480;
    }   if (sizeInput === "") {
            sizeInput = 480;
        }

if (amountInput >= 1 && amountInput <= 241) {
}   else {
        amountInput = 100;
    }   if (amountInput === "") {
            amountInput = 100;
        }

if (initialInput >= 1 && initialInput <= 241) {
}   else {
        initialInput = 1;
    }   if (initialInput === "") {
            initialInput = 1;
        }

if (speedInput >= 1 && speedInput <= 16) {
}   else {
        speedInput = 1;
    }   if (speedInput === "") {
            speedInput = 1;
        }

if (delayTypeInput >= 0 && delayTypeInput <= 3) {
}   else {
        delayTypeInput = 0;
    }   if (delayTypeInput === "") {
            delayTypeInput = 0;
        }

if (delayAmountInput >= 0 && delayAmountInput <= 20000) {
}   else {
        delayAmountInput = 0;
    }   if (delayAmountInput === "") {
            delayAmountInput = 0;
        }

if (timeInput >= 0 && timeInput <= 20) {
}   else {
        timeInput = 0;
    }   if (timeInput === "") {
            timeInput = 0;
        }

var menu = document.getElementById("menu");
menu.style.display = "none";
var nthVideo = 0;
var nthVideoAll = 1;
var nthVideoEven = 1;
var nthVideoOdd = 2;
var delay = 0;
var title = 1;
initialInput -= 1;
title += initialInput;
for (var i = 0; i < amountInput; i++) {
    var video = document.createElement("video");
    document.getElementById("main").appendChild(video);
    video.setAttribute("class", "vid");
    video.setAttribute("src", "vid/" + resInput + "/" + title + ".mp4");
    title += 1;
    video.setAttribute("preload", "auto");
    video.setAttribute("loop", "loop");
    //video.setAttribute("controls", "controls");
    //video.setAttribute("autoplay", "autoplay");
    video.setAttribute("width", sizeInput);
    setDelay(i);
    delay += delayAmountInput;
}

function setDelay(i) {
    setTimeout(function() {
        document.getElementsByClassName("vid")[nthVideo].currentTime = timeInput;
        document.getElementsByClassName("vid")[nthVideo].playbackRate = speedInput;
        nthVideo += 1;
        document.querySelector("video:nth-of-type(" + nthVideoEven + ")").play();
        nthVideoEven += 2;
    }, 0);
    setTimeout(function() {
        document.querySelector("video:nth-of-type(" + nthVideoOdd + ")").play();
        nthVideoOdd += 2;
    }, 10000);
}
// function doSetTimeAndPlayback(i) {
//     document.getElementsByClassName("vid")[nthVideo].currentTime = timeInput;
//     document.getElementsByClassName("vid")[nthVideo].playbackRate = speedInput;
//     nthVideo += 1;
// }
// function doSetTimeout1(i) {
//     setTimeout(function() {
//         document.querySelector("video:nth-of-type(" + nthVideoAll + ")").play();
//         nthVideoAll += 1;
//     }, delay);
// }
// function doSetTimeout2(i) {
//     setTimeout(function() {
//         document.querySelector("video:nth-of-type(" + nthVideoEven + ")").play();
//         nthVideoEven += 2;
//     }, 0);
// }
// function doSetTimeout3(i) {
//     setTimeout(function() {
//         document.querySelector("video:nth-of-type(" + nthVideoOdd + ")").play();
//         nthVideoOdd += 2;
//     }, 10000);
// }
}
//}
//var test = Math.floor(Math.random() * 10) + 1;