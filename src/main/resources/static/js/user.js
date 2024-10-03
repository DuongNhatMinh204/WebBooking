document.getElementById("sign-up-button").addEventListener("click", function() {
    var signInForm = document.getElementById("sign-in-form");
    var signUpForm = document.getElementById("sign-up-form");

    signInForm.classList.add("hidden");
    signUpForm.classList.remove("hidden");
});

document.getElementById("sign-in-button").addEventListener("click", function() {
    var signInForm = document.getElementById("sign-in-form");
    var signUpForm = document.getElementById("sign-up-form");

    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
});

document.getElementById("sign-in-button-alt").addEventListener("click", function() {
    var signInForm = document.getElementById("sign-in-form");
    var signUpForm = document.getElementById("sign-up-form");

    signInForm.classList.remove("hidden");
    signUpForm.classList.add("hidden");
});
