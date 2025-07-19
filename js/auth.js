// Utility functions
function displayMessage(elementId, text, type) {
    const message = document.getElementById(elementId);
    let i = 0;
    message.textContent = '';
    message.className = `message ${type}`;

    function typeWriter() {
        if (i < text.length) {
            message.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

function validateUsername(username) {
    const regex = /^[a-zA-Z0-9_]{6,12}$/;
    return regex.test(username);
}

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Add loaded class to body for animations
document.body.classList.add('loaded');