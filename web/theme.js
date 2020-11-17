const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");
btn.addEventListener("click", function () {
    // Swap out the URL for the different stylesheets
    if (theme.getAttribute("href") == "light.css") {
        theme.href = "dark.css";
    } else {
        theme.href = "light.css";
    }
});