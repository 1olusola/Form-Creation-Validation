document.addEventListener('DOMContentLoaded', function() {
    // Form selection as required
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    form.addEventListener('submit', function(event) {
        // Prevent form submission as required
        event.preventDefault();
        
        // Retrieve and trim user inputs as required
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Initialize validation variables as required
        let isValid = true;
        const messages = [];
        
        // Username validation as required
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        
        // Email validation as required
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain both "@" and "." characters.');
        }
        
        // Password validation as required
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }
        
        // Display feedback as required
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
    });
});
