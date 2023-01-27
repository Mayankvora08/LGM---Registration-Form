let form = document.getElementById("registration-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let passwordConfirm = document.getElementById("password-confirm").value;

  if (password !== passwordConfirm) {
    alert("Passwords do not match.");
    return;
  }

  // Send the registration data to the server
});





