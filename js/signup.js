function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
}
