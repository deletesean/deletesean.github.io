jQuery(".stopVideo").click(function () {

    var stopAllYouTubeVideos = () => {
        var iframes = document.querySelectorAll('iframe');
        Array.prototype.forEach.call(iframes, iframe => {
            iframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'pauseVideo'
            }), '*');
        });
    }
    stopAllYouTubeVideos();

});