// Finds all iframes from youtubes and gives them a unique class
jQuery('iframe[src*="https://www.youtube.com/embed/"]').addClass("youtube-iframe");

jQuery(".stopVideo").click(function () {
    // changes the iframe src to prevent playback or stop the video playback in our case
    $('.youtube-iframe').each(function (index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
    });

    //click function
});