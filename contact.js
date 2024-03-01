const mainNav = document.getElementById("main-nav");
const aboutNav = document.getElementById("about-nav");
const classesNav = document.getElementById("classes-nav");
const projectsNav = document.getElementById("projects-nav");
mainNav.addEventListener("click", function () {
    window.open("./", "_self");
});
aboutNav.addEventListener("click", function () {
    window.open("./#about", "_self");
});
classesNav.addEventListener("click", function () {
    window.open("./#classes", "_self");
});
projectsNav.addEventListener("click", function () {
    window.open("./#projects", "_self");
});

const constraints = {
    name: {
        presence: { allowEmpty: false }
    },
    email: {
        presence: { allowEmpty: false },
        email: true
    },
    message: {
        presence: { allowEmpty: false }
    }
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {

    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
    };


    const errors = validate(formValues, constraints);
    if (errors) {
        event.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) {
                return fieldValues.join(', ')
            })
            .join("\n");

        alert(errorMessage);
    }
}, false);