function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5500", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    var formData = "name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Form submitted successfully!");
        }
    };

    xhr.send(formData);
}