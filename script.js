
  
function validateForm() {
    checkPasswordMatch(); // Run the check before form submission
    const form = document.getElementById("registration-form");
    if (form.checkValidity()) 
        return true; // Form submission proceeds when the form is valid
    else
        return false; // Prevent form submission when there are validation errors
}
  

function checkPasswordMatch() {
    const password = document.getElementById("user-password").value;
    const confirmPassword = document.getElementById("user-password-confirm").value;
    
    if (password === confirmPassword) 
        document.getElementById("user-password-confirm").setCustomValidity(""); // Clear custom message
    else
        document.getElementById("user-password-confirm").setCustomValidity("Passwords do not match.");
}