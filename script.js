// Show/hide password functionality for login page
// This lets you click the eye icon to see or hide your password
const passwordInput = document.getElementById('password'); // Get the password box
const toggleBtn = document.getElementById('togglePassword'); // Get the eye button
if (passwordInput && toggleBtn) {
  toggleBtn.addEventListener('click', function() {
    // If password is hidden, show it. If shown, hide it.
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; // Show password
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye"></i>'; // Change icon to open eye
    } else {
      passwordInput.type = 'password'; // Hide password
      toggleBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // Change icon to closed eye
    }
  });
}

// Simple form validation for login
// Checks if email looks like an email and password is long enough
const form = document.querySelector('form'); // Get the form
if (form) {
  form.addEventListener('submit', function(e) {
    const email = document.getElementById('email'); // Get email box
    const password = document.getElementById('password'); // Get password box
    let valid = true; // Assume everything is OK
    // Check if email has an @
    if (!email.value.includes('@')) {
      valid = false;
      email.style.borderColor = 'red'; // Make box red
      // Show a message for email
      email.setCustomValidity('Please enter a valid email address.');
    } else {
      email.style.borderColor = '';
      email.setCustomValidity('');
    }
    // Check if password is at least 8 characters
    if (password.value.length < 8) {
      valid = false;
      password.style.borderColor = 'red'; // Make box red
      // Show a message for password
      password.setCustomValidity('Password must be at least 8 characters.');
    } else {
      password.style.borderColor = '';
      password.setCustomValidity('');
    }
    if (!valid) {
      e.preventDefault(); // Stop the form from submitting
    }
  });
}
