const mainNav = document.getElementById("main-nav");
const aboutNav = document.getElementById("about-nav");
const positionsNav = document.getElementById("positions-nav");
const classesNav = document.getElementById("classes-nav");
const projectsNav = document.getElementById("projects-nav");
mainNav.addEventListener("click", function () {
    window.open("./", "_self");
});
aboutNav.addEventListener("click", function () {
    window.open("#about", "_self");
});
positionsNav.addEventListener("click", function () {
    window.open("#positions", "_self");
});
classesNav.addEventListener("click", function () {
    window.open("#classes", "_self");
});
projectsNav.addEventListener("click", function () {
    window.open("#projects", "_self");
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

const queraPDF = document.getElementById("queraPDF");
const queraGithub = document.getElementById("queraGithub");
queraPDF.addEventListener("click", function () {
    window.open("files/QuEra_Documentation_iQuHACK_2024.pdf");
});
queraGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/2024_QuEra/");
});

const qrisePresentation = document.getElementById("qrisePresentation");
const qriseGithub = document.getElementById("qriseGithub");
qrisePresentation.addEventListener("click", function () {
    window.open("https://drive.google.com/file/d/1UjiZTvJFPQSkfz91akB7ZUQjMKeroHp-/view?usp=sharing");
});
qriseGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/qrise2024-classiq-challenge/");
});

const infernoWebsite = document.getElementById("infernoWebsite");
const infernoGithub = document.getElementById("infernoGithub");
infernoWebsite.addEventListener("click", function () {
    window.open("https://travelinferno.github.io/");
});
infernoGithub.addEventListener("click", function () {
    window.open("https://github.com/travelinferno/travelinferno.github.io/");
});

const republicWebsite = document.getElementById("republicWebsite");
const republicGithub = document.getElementById("republicGithub");
republicWebsite.addEventListener("click", function () {
    window.open("https://our-republic.vercel.app/");
});
republicGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/our-republic/");
});

const treesWebsite = document.getElementById("treesWebsite")
const treesGithub = document.getElementById("treesGithub");
treesGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/glued-trees/");
});
treesWebsite.addEventListener("click", function () {
    window.open("https://gluedtrees.com");
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

hideSpring24 = document.getElementById("hide-spring24");
const spring24_hidden = document.getElementsByClassName("spring24");
hideSpring24.addEventListener("click", function () {
    for (p of spring24_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideSpring24.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideSpring24.textContent = "Show";
        }
    }
});

hideSummer24 = document.getElementById("hide-summer24");
const summer24_hidden = document.getElementsByClassName("summer24");
hideSummer24.addEventListener("click", function () {
    for (p of summer24_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideSummer24.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideSummer24.textContent = "Show";
        }
    }
});