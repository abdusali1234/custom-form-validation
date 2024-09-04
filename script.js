const form = document.querySelector("form");
const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    // check if email form field is valid

    if (email.validity.valid){
        email.setCustomValidity("");
    } else {
        showError();
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!email.validity.valid){
        showError();
        event.preventDefault();
    }
})

function showError() {
    // check for empty field
    if (email.validity.valueMissing){
        email.setCustomValidity("You need to enter an email address, geezer!");
    } else if (email.validity.typeMisMatch){
        // check if field doesn't contain email address
        email.setCustomValidity("Entered value needs to be an email address, sonny boi!");
    } else if (email.validity.tooShort){
        email.setCustomValidity(`Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`);
    } else {
        email.setCustomValidity("");
    }
}
