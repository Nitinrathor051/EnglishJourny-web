document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#signup-form");
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirm-password");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        if (!name.value.trim()) {
            alert("Full Name is required");
            return;
        }

        if (!validateEmail(email.value)) {
            alert("Enter a valid email address");
            return;
        }

        if (!validatePassword(password.value)) {
            alert("Password must be 8-20 characters with uppercase, lowercase, number, and symbol");
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match");
            return;
        }

        alert("Signup Successful!");
        window.location.href = "home.html";
    });

    function validateEmail(input) {
        let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return isValidEmail.test(input);
    }

    function validatePassword(input) {
        let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,20}$/;
        return isValidPassword.test(input);
    }
});
