const form = document.querySelector("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postCode = document.getElementById("post-code");
const passWord = document.getElementById("pwd");
const confirmPassWord = document.getElementById("confirm-pwd");

email.addEventListener("input", (event) => {
    // check if email form field is valid

    if (email.validity.valid){
        email.setCustomValidity("");
    } else {
        showEmailError();
    }
});

country.addEventListener("input", (event) => {
    // check if email form field is valid

    if (country.validity.valid){
        country.setCustomValidity("");
    } else {
        showCountryError();
    }
});

postCode.addEventListener("input", (event) => {
    // check if email form field is valid

    if (postCode.validity.valid){
        postCode.setCustomValidity("");
    } else {
        showPostCodeError();
    }
});

passWord.addEventListener("input", (event) => {
    // check if email form field is valid

    if (passWord.validity.valid){
        passWord.setCustomValidity("");
    } else {
        showPassWordError();
    }
});

confirmPassWord.addEventListener("input", (event) => {
    if (confirmPassWord === passWord){
        confirmPassWord.setCustomValidity("");
    } else {
        showConfirmPassWordError();
    }
})


form.addEventListener("submit", (event) => {
    
    if (!email.validity.valid){
        showEmailError();
        event.preventDefault();
    } else if (!country.validity.valid) {
        showCountryError();
    } else if (!postCode.validity.valid) {
        showPostCodeError();
    } else if (!passWord.validity.valid){
        showPassWordError();
    } else if (confirmPassWord !== passWord){
        showConfirmPassWordError();
    }
    event.preventDefault();
})

function showEmailError() {
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
    email.reportValidity();
}

function showCountryError() {
    if (country.validity.valueMissing) {
        country.setCustomValidity("You need to select a country, geezer!");
    } else {
        country.setCustomValidity("");
    }
    country.reportValidity();
}

function showPostCodeError() {
    if (postCode.validity.valueMissing) {
        postCode.setCustomValidity("Ya post codes missing, m8!");
    } else {
        postCode.setCustomValidity("");
    }
    postCode.reportValidity();
}

function showPassWordError() {
    if (passWord.validity.valueMissing){
        passWord.setCustomValidity("You need to enter a password, geezer!");
    } else if (passWord.validity.typeMisMatch){
        passWord.setCustomValidity("Must be at least 8 characters in length, and contain at least 1 number, 1 uppercase letter, and one lowercase letter");
    } else {
        passWord.setCustomValidity("");
    }
    passWord.reportValidity();
}

function showConfirmPassWordError() {
    if (confirmPassWord !== passWord){
        confirmPassWord.setCustomValidity("Doesn't match password")
    } else {
        confirmPassWord.setCustomValidity("");
    }
    confirmPassWord.reportValidity();
}