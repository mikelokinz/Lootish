document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.createElement('div');
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);

    // Close banner functionality
    const closeBanner = document.querySelector('.close-banner');
    if (closeBanner) {
        closeBanner.addEventListener('click', function() {
            document.querySelector('.top-banner').style.display = 'none';
        });
    }

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For this example, we'll just simulate a successful submission
        console.log('Form submitted:', formData);
        
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');document.addEventListener('DOMContentLoaded', function() {
    // Close top banner
    const closeBanner = document.querySelector('.close-banner');
    const topBanner = document.querySelector('.top-banner');
    
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For this example, we'll just show a success message
            showNotification('Your message has been sent successfully! We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Show notification function
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Add styles for notification
        const style = document.createElement('style');
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 15px 25px;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-lg);
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .notification.success {
                background-color: var(--success);
                color: white;
            }
            
            .notification.error {
                background-color: var(--error);
                color: white;
            }
            
            .notification.show {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 300);
        }, 3000);
    }

    // Cart functionality (if needed from other pages)
    let cart = [];
    const cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    const jungoBtn = document.querySelector('.jungo-btn');
    if (jungoBtn) {
        jungoBtn.appendChild(cartCount);
        updateCartCount();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems > 0 ? totalItems : '';
        cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
});
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});