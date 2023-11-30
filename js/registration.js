"use strict";
var $ = function(id){
    return document.getElementById(id);
};

var validate_form = function() {
    var email = $("email").value;
    var password = $("password").value;
    var confirm_password = $("confirm_password").value;
    var isValid = true;
    var error_table = $("error_table");

    // Clear previous error messages
    error_table.innerHTML = `
        <caption>Error Summary</caption>
        <tr>
            <th>Field</th>
            <th>Error Message</th>
        </tr>
    `;

    function display_error(field, message) {
        var row = error_table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = field;
        cell2.textContent = message;
    }

    // Validate email
    if (email === "") {
        $("email_error").textContent = "This field is required.";
        isValid = false;
        display_error("Email Address", "This field is required.");
    } else {
        display_error("Email Address", email);
    }

    // Validate password
    if (password === "") {
        $("password_error").textContent = "This field is required.";
        isValid = false;
        display_error("Password", "This field is required.");
    } else {
        display_error("Password", password);
    }

    // Validate confirm password
    if (confirm_password === "") {
        $("confirm_password_error").textContent = "This field is required.";
        isValid = false;
        display_error("Confirm Password", "This field is required.");
    } else if (password !== confirm_password) {
        $("confirm_password_error").textContent = "Passwords do not match.";
        isValid = false;
        display_error("Confirm Password", "Passwords do not match.");
    } else {
        display_error("Confirm Password", confirm_password);
    }

    if (!isValid) {
        // If there are errors, display the table
        error_table.style.display = "table";
    } else {
        var user = {
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(user));

        window.location.href = "login.html";
    }
};
