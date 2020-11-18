$(document).ready(function () {
    $('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });
});