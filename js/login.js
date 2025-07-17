// login.js
function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("loggedInUser", JSON.stringify({ name: storedUser.name, email }));
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials. Try again or sign up.");
  }
}
