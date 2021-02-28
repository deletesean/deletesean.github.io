const theme_button = document.querySelector(".theme_button");
const theme_file = document.querySelector(".theme_file");
theme_button.addEventListener("click", function () {
    // Swap out the URL for the different stylesheets
    if (theme_file.getAttribute("href") == "styles/theme_light.css") {
        theme_file.href = "styles/theme_dark.css";
    } else {
        theme_file.href = "styles/theme_light.css";
    }
});

const font_button = document.querySelector(".font_button");
const font_file = document.querySelector(".font_file");
font_button.addEventListener("click", function () {
    // Swap out the URL for the different stylesheets
    if (font_file.getAttribute("href") == "styles/font_times.css") {
        font_file.href = "styles/font_roboto.css";
    } else {
        font_file.href = "styles/font_times.css";
    }
});