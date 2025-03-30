document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let emailError = document.querySelector("#email-error");
    let passwordError = document.querySelector("#password-error");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission
        let valid = true;

        // Validate Email
        if (!validateEmail(email.value)) {
            emailError.innerText = "Enter a valid email";
            valid = false;
        } else {
            emailError.innerText = ""; // Clear error if valid
        }

        // Validate Password
        if (!validatePassword(password.value)) {
            passwordError.innerText = "Password must be 8-20 characters and include uppercase, lowercase, number, and symbol";
            valid = false;
        } else {
            passwordError.innerText = ""; // Clear error if valid
        }

        // If valid, redirect to home page
        if (valid) {
            alert("Login Successful");
            window.location.href = "home.html"; // Redirect to home page
        } else {
            alert("Form is not valid. Please check your inputs.");
        }
    });

    // Email Validation Function
    function validateEmail(input) {
        let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return isValidEmail.test(input);
    }

    // Password Validation Function
    function validatePassword(input) {
        let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,20}$/;
        return isValidPassword.test(input);
    }
});
