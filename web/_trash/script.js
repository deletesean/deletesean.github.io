var dir = "photography";
var fileextension = ".JPG";
$.ajax({
  //This will retrieve the contents of the folder if the folder is configured as 'browsable'
  url: dir,
  success: function (data) {
    //List all .png file names in the page
    $(data).find("a:contains(" + fileextension + ")").each(function () {
      var filename = this.href.replace(window.location.host, "").replace("http://", "");
      $("body").append("<img src='" + filename + "'>");
    });
  }
});

// // Get the button
// var buttonTop = document.getElementById("buttonTop");

// // When the user scrolls down from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
//     buttonTop.style.display = "inline-block";
//   } else {
//     buttonTop.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function functionTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }