document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    // AJAX POST request (dummy API for demo)
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function() {
        if (xhr.status === 201) {
            alert("Registeration Done successfully!");

            // Store in localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            document.getElementById("registrationForm").reset();
        }
    };

    xhr.send(JSON.stringify(user));
});

// Navigate to data page
function viewData() {
    window.location.href = "data.html";
}