document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "rusdi666malapetaka" && password === "rusdiblekmetal") {
        alert("Login berhasil!");
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah. Coba lagi.");
    }
});
