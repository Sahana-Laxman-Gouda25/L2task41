document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Your logic for authentication goes here (client-side only)
    if (username === "sahana" && password === "slg") {
        window.location.href = "securedpage.html"; // Redirect to secured page
    } else {
        document.getElementById("errorMessage").innerText = "Invalid username or password";
    }
});
