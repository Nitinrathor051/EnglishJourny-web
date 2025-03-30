document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#forgot-password-form");
    let email = document.querySelector("#email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateEmail(email.value)) {
            alert("Enter a valid email address.");
        } else {
            alert("A reset link has been sent to your email.");
            // Simulate redirection or further processing
            window.location.href = "login.html";
        }
    });

    function validateEmail(input) {
        let isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return isValidEmail.test(input);
    }
});
