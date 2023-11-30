
"use strict";
var $ = function(id){
    return document.getElementById(id);
};

var apply = function () {
  var email_address1 = $("email_address1").value;
  var email_address2 = $("email_address2").value;
  var first_name = $("first_name").value;
  var last_name = $("last_name").value;
  var city = $("city").value;
  var state = $("state").value;
  var zip_code = $("zip_code").value;
  var gross_income = $("gross_income").value;
  var ssn_last_4 = $("ssn_last_4").value;
  var credit_inquiry = $("credit_inquiry").checked;
  var isValid = true;
  var error_table = $("error_table");

    //clear previous error messages
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

  //validate email 1
  if (email_address1 === "") {
    $("email_address1_error").firstChild.nodeValue = "This field is required.";
    isValid = false;
    display_error("Email Address", "This field is required.");
  } else {
    $("email_address1_error").firstChild.nodeValue = "";
    display_error("Email Address", email_address1);
  }

  //validate email2
  if (email_address2 === "") {
    $("email_address2_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("Re-enter Email Address", "This field is required.");

  } else if (email_address1 != email_address2) {
    $("email_address2_error").firstChild.nodeValue =
      "This entry must equal the first entry.";
    isValid = false;
    display_error("Re-enter Email Address", "This entry must equal the first entry.");
  } else {
    $("email_address2_error").firstChild.nodeValue = "";
    display_error("Email Address 2", email_address2);
  }

  //validate first name
  if (first_name === "") {
    $("first_name_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("First Name", "This field is required.");

  } else {
    $("first_name_error").firstChild.nodeValue = "";
    display_error("First Name", first_name);
  }

  //validate last name
  if (last_name === "") {
    $("last_name_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("Last Name", "This field is required.");

  } else {
    $("last_name_error").firstChild.nodeValue = "";
    display_error("Last Name", last_name);
  }

  //validate city
  if (city === "") {
    $("city_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("City", "This field is required.");

  } else {
    $("city_error").firstChild.nodeValue = "";
    display_error("City", city);
  }

  //validate state
  if (state === "") {
    $("state_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("State", "This field is required.");

  } else {
    $("state_error").firstChild.nodeValue = "";
    display_error("State", state);
  }

  //validate zip code
  if (zip_code === "") {
    $("zip_code_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("Zip Code", "This field is required.");

  } else {
    $("zip_code_error").firstChild.nodeValue = "";
    display_error("Zip Code", zip_code);
  }

  //validate gross income
  if (gross_income === "") {
    $("gross_income_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("Gross Income", "This field is required.");

  } else {
    $("gross_income_error").firstChild.nodeValue = "";
    display_error("Gross Income", gross_income);
  }

  //validate last 4 of ssn
  if (ssn_last_4 === "") {
    $("ssn_last_4_error").firstChild.nodeValue = "This field is required";
    isValid = false;
    display_error("Last 4 digitis of SSN", "This field is required.");

  } else {
    $("ssn_last_4_error").firstChild.nodeValue = "";
    display_error("SSN last 4", ssn_last_4);
  }

  if (!credit_inquiry) {
    $("credit_inquiry_error").firstChild.nodeValue =
      "This field must be checked";
    isValid = false;
    display_error("Credit Inquiry Checkbox", "This field is required.");

  } else {
    $("credit_inquiry_error").firstChild.nodeValue = "";
    display_error("Credit Inquiry Checkbox", "Checked");
  }

  if (isValid) {
    if (gross_income > 20000) {
      alert(
        "Congratulations, You are qualified for a credit line. A credit card will be sent to you in the mail."
      );
    } else {
      alert("We're sorry, you do not qualify for a credit line at this time.");
    }
  } else {
    error_table.style.display = "table";
  }
};
window.onload = function(){
    $("apply").onclick = apply;
    $("email_address1").focus();
};
