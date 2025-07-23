document.addEventListener('DOMContentLoaded', function() {
    // Close banner functionality
    const closeBanner = document.querySelector('.close-banner');
    const topBanner = document.querySelector('.top-banner');
    
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }
    
    // Hero slider functionality
    const heroSlider = document.querySelector('.hero-slider');
    const leftBtn = document.querySelector('.slider-btn.left');
    const rightBtn = document.querySelector('.slider-btn.right');
    
    // Array of image paths for the slider
    const sliderImages = [
        './assets/headerimg3.png'
    ];
    
    let currentSlide = 0;
    let slides = [];
    let isAnimating = false;
    
    // Initialize slider
    function initSlider() {
        sliderImages.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `Gaming Setup Showcase ${index + 1}`;
            
            if (index === 0) {
                img.classList.add('active');
            }
            
            heroSlider.appendChild(img);
        });
        
        slides = Array.from(heroSlider.querySelectorAll('img'));
    }
    
    // Function to change slide
    function changeSlide(direction) {
        if (isAnimating) return;
        isAnimating = true;
        
        const currentActive = heroSlider.querySelector('.active');
        const nextIndex = direction === 'right' 
            ? (currentSlide + 1) % slides.length 
            : (currentSlide - 1 + slides.length) % slides.length;
        const nextSlide = slides[nextIndex];
        
        // Set initial positions
        if (direction === 'right') {
            nextSlide.classList.add('next');
        } else {
            nextSlide.classList.add('prev');
        }
        
        // Trigger reflow
        void nextSlide.offsetWidth;
        
        // Start transition
        currentActive.classList.remove('active');
        currentActive.classList.add(direction === 'right' ? 'prev' : 'next');
        nextSlide.classList.remove(direction === 'right' ? 'next' : 'prev');
        nextSlide.classList.add('active');
        
        // Update current slide index
        currentSlide = nextIndex;
        
        // Clean up classes after transition
        setTimeout(() => {
            currentActive.classList.remove('prev', 'next');
            isAnimating = false;
        }, 800);
    }
    
    // Initialize the slider
    initSlider();
    
    // Event listeners for slider buttons
    if (leftBtn && rightBtn) {
        leftBtn.addEventListener('click', () => changeSlide('left'));
        rightBtn.addEventListener('click', () => changeSlide('right'));
    }
    
    // Auto slide change every 5 seconds
    let slideInterval = setInterval(() => changeSlide('right'), 5000);
    
    // Pause auto-slide when hovering over slider
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => changeSlide('right'), 5000);
    });
    
    // Rest of your existing JavaScript...
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Add to cart functionality
    const cartButtons = document.querySelectorAll('.cart-btn');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productName = this.closest('.product-overlay-tailwind').querySelector('h3').textContent;
            const productPrice = this.closest('.product-overlay-tailwind').querySelector('.price').textContent;
            
            alert(`Added ${productName} (${productPrice}) to your cart!`);
        });
    });
    
    // Buy now functionality
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productName = this.closest('.product-overlay-tailwind').querySelector('h3').textContent;
            const productPrice = this.closest('.product-overlay-tailwind').querySelector('.price').textContent;
            
            alert(`Proceeding to checkout for ${productName} (${productPrice})`);
        });
    });
    
    // View details functionality for most wanted items
    const viewDetailsButtons = document.querySelectorAll('.pulse-btn');
    
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.scroll-item').querySelector('p').textContent;
            alert(`Showing details for ${productName}`);
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});