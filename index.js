document.addEventListener("DOMContentLoaded", function () {
    animateLogin();
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); 
        checkLogin(); 
    });
});

function animateLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("animate__animated", "animate__fadeIn");
    document.getElementById("welcomeMessage").classList.add("hidden");
}

function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var welcomeMessage = document.getElementById('welcomeMessage');

    var validUsername = 'utente';
    var validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        welcomeMessage.classList.remove('hidden');
    } else {
        welcomeMessage.classList.add('hidden');
        alert('Credenziali non valide. Riprova.');
    }
}

function goToHome() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("welcomeMessage").classList.add("hidden");
    document.getElementById("homeSection").classList.remove("hidden");
}


