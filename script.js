const project1Btn = document.getElementById("project1Btn");
const project2Btn = document.getElementById("project2Btn");
project1Btn.addEventListener("click", function () {
    window.open("https://github.com");
});
project2Btn.addEventListener("click", function () {
    window.open("https://github.com");
});

const linkedin = document.getElementById("linkedin-img");
const github = document.getElementById("github-img");
const email = document.getElementById("email");
linkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/adam-godel/");
});
github.addEventListener("click", function () {
    window.open("https://github.com/adam-godel");
});
email.addEventListener("click", function () {
    window.open("mailto:agodel@bu.edu", "_self");
});

hideFall23 = document.getElementById("hide-fall23");
const fall23_hidden = document.getElementsByClassName("fall23");
hideFall23.addEventListener("click", function () {
    for (p of fall23_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideFall23.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideFall23.textContent = "Show";
        }
    }
});