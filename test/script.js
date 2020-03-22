var title = 1;
var nth = 1;
var delay = 0;
for (var i = 0; i < 100; i++) {
    var video = document.createElement("video");
    document.getElementById("main").appendChild(video);
    video.setAttribute("class", "vid");
    video.setAttribute("src", "vid/" + title + ".mp4");
    title += 1;
    video.setAttribute("preload", "auto");
    video.setAttribute("loop", "loop");
    doSetTimeout(i);
    delay += 500;
}
function doSetTimeout(i) {
    setTimeout(function() {
        document.querySelector("video:nth-of-type(" + nth + ")").play();
        nth += 1;
    }, delay);
}

//var vid = querySelectorAll('.vid');
//vid.playbackRate = 5;

//var test = Math.floor(Math.random() * 10) + 1;