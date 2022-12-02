const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "admin") {
        alert("You have successfully logged in.");
        window.location.href = "admin.html";
    }
    if (username === "user" && password === "user") {
        alert("You have successfully logged in.");
        window.location.href = "user.html";
    }
    else {
        alert("Fail to Login");
    }
})