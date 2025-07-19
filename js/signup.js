document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const message = document.getElementById('message');
    const signupButton = document.getElementById('signup-button');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = signupForm['new-username'].value;
            const password = signupForm['new-password'].value;
            const confirmPassword = signupForm['confirm-password'].value;

            // Validate inputs
            if (!validateUsername(username)) {
                displayMessage('message', 'INVALID AGENT ID: 6-12 chars (letters, numbers, _)', 'error');
                return;
            }

            if (!validatePassword(password)) {
                displayMessage('message', 'WEAK PASSCODE: 8+ chars with uppercase, number, and special char', 'error');
                return;
            }

            if (password !== confirmPassword) {
                displayMessage('message', 'PASSCODES DO NOT MATCH', 'error');
                return;
            }

            // Check if username exists
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(u => u.username === username)) {
                displayMessage('message', 'AGENT ID ALREADY EXISTS', 'error');
                return;
            }

            signupButton.disabled = true;
            signupButton.textContent = 'PROCESSING...';

            // Simulate processing delay
            setTimeout(() => {
                // Add new user
                users.push({ username, password });
                localStorage.setItem('users', JSON.stringify(users));

                displayMessage('message', 'CLEARANCE GRANTED: PROCEED TO AUTHENTICATION', 'success');
                
                // Redirect to login after delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);

                signupButton.disabled = false;
                signupButton.textContent = 'REQUEST CLEARANCE';
            }, 2000);
        });
    }
});