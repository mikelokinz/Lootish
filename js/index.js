document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');
    const loginButton = document.getElementById('login-button');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = loginForm.username.value;
            const password = loginForm.password.value;

            if (username.trim() === '' || password.trim() === '') {
                displayMessage('message', 'AGENT ID AND PASSCODE REQUIRED', 'error');
                return;
            }

            // Get stored users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username && u.password === password);

            loginButton.disabled = true;
            loginButton.textContent = 'TRANSMITTING...';

            // Simulate authentication delay
            setTimeout(() => {
                if (user) {
                    displayMessage('message', 'ACCESS GRANTED', 'success');
                    // Store current user in session
                    sessionStorage.setItem('currentUser', JSON.stringify(user));
                    // Redirect to home page after delay
                    setTimeout(() => {
                        window.location.href = 'home.html';
                    }, 1000);
                } else {
                    displayMessage('message', 'ACCESS DENIED: INVALID CREDENTIALS', 'error');
                }

                loginButton.disabled = false;
                loginButton.textContent = 'TRANSMIT';
            }, 2000);
        });
    }
});