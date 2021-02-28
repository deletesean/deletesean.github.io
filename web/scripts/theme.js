const theme_button = document.querySelector(".theme_button");
const theme_file = document.querySelector(".theme_file");
theme_button.addEventListener("click", function () {
    // Swap out the URL for the different stylesheets
    if (theme_file.getAttribute("href") == "styles/theme_light.css") {
        theme_file.href = "styles/theme_gray.css";
    }
    else if (theme_file.getAttribute("href") == "styles/theme_gray.css") {
        theme_file.href = "styles/theme_dark.css";
    }
    else if (theme_file.getAttribute("href") == "styles/theme_dark.css") {
        theme_file.href = "styles/theme_light.css";
    }
});