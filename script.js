let password = document.getElementById("password");
let text = document.getElementById("strength-text");
let bar = document.getElementById("strength-bar-fill");

password.addEventListener("input", function() {
    let value = password.value;
    let strength = 0;

    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[!@#$%^&*]/.test(value)) strength++;

    if (strength <= 1) {
        text.innerHTML = "Weak Password";
        bar.style.width = "33%";
        bar.style.background = "red";
    } 
    else if (strength == 2 || strength == 3) {
        text.innerHTML = "Medium Password";
        bar.style.width = "66%";
        bar.style.background = "orange";
    } 
    else {
        text.innerHTML = "Strong Password";
        bar.style.width = "100%";
        bar.style.background = "green";
    }
});