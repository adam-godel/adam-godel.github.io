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

const infernoWebsite = document.getElementById("infernoWebsite");
const infernoGithub = document.getElementById("infernoGithub");
infernoWebsite.addEventListener("click", function () {
    window.open("https://travelinferno.github.io/");
});
infernoGithub.addEventListener("click", function () {
    window.open("https://github.com/travelinferno/travelinferno.github.io/");
});

const cgsaWebsite = document.getElementById("cgsaWebsite")
const cgsaGithub = document.getElementById("cgsaGithub");
cgsaGithub.addEventListener("click", function () {
    window.open("https://github.com/Hack4Impact-BU/cgsa-website/");
});
cgsaWebsite.addEventListener("click", function () {
    window.open("https://www.bucgsa.org/");
});

const alicebobNotebook = document.getElementById("alicebobNotebook")
const alicebobGithub = document.getElementById("alicebobGithub");
alicebobNotebook.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/2025-Alice-and-Bob/blob/main/submissions/Challenge.ipynb");
});
alicebobGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/2025-Alice-and-Bob/");
});

const travelersNotebook = document.getElementById("travelersNotebook")
const travelersGithub = document.getElementById("travelersGithub");
travelersNotebook.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/yquantum-2025-travelers-capgemini/blob/main/generate_graph.ipynb");
});
travelersGithub.addEventListener("click", function () {
    window.open("https://github.com/adam-godel/yquantum-2025-travelers-capgemini");
});

const drpPresentation = document.getElementById("drpPresentation");
drpPresentation.addEventListener("click", function () {
    window.open("files/DRP_Presentation.pdf");
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

hideFall24 = document.getElementById("hide-fall24");
const fall24_hidden = document.getElementsByClassName("fall24");
hideFall24.addEventListener("click", function () {
    for (p of fall24_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideFall24.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideFall24.textContent = "Show";
        }
    }
});

hideSpring25 = document.getElementById("hide-spring25");
const spring25_hidden = document.getElementsByClassName("spring25");
hideSpring25.addEventListener("click", function () {
    for (p of spring25_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideSpring25.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideSpring25.textContent = "Show";
        }
    }
});

hideSummer25 = document.getElementById("hide-summer25");
const summer25_hidden = document.getElementsByClassName("summer25");
hideSummer25.addEventListener("click", function () {
    for (p of summer25_hidden) {
        if (p.style.display == "none") {
            p.style.display = "block";
            hideSummer25.textContent = "Hide";
        } else {
            p.style.display = "none";
            hideSummer25.textContent = "Show";
        }
    }
});