document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const filterToggleBtn = document.querySelector('.filter-toggle-btn');
    const filterPanel = document.getElementById('filterPanel');
    const closeFilterBtn = document.getElementById('closeFilterBtn');
    const applyFiltersBtn = document.getElementById('applyFiltersBtn');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const searchInputBox = document.getElementById('searchInputBox');
    const closeBanner = document.querySelector('.close-banner');
    const topBanner = document.querySelector('.top-banner');

    // Product containers
    const newArrivalsContainer = document.getElementById('newArrivalsContainer');
    const hotStuffsContainer = document.getElementById('hotStuffsContainer');
    const keyboardsContainer = document.getElementById('keyboardsContainer');
    const miceContainer = document.getElementById('miceContainer');
    const headsetsContainer = document.getElementById('headsetsContainer');

    // Product data (same as provided in your original code)
    const products = {
        newArrivals: [
            {
                id: 1,
                title: "ROG Strix Scope RX",
                brand: "ASUS ROG",
                category: "Keyboards",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/key1.jpg",
                badge: "NEW",
                description: "Mechanical gaming keyboard with RX optical switches"
            },
            {
                id: 2,
                title: "Razer Basilisk V3",
                brand: "Razer",
                category: "Mice",
                price: 69.99,
                originalPrice: 79.99,
                image: "./assets/mo1.jpg",
                badge: "BESTSELLER",
                description: "Customizable ergonomic gaming mouse with 11 programmable buttons"
            },
            {
                id: 3,
                title: "SteelSeries Arctis Nova Pro",
                brand: "SteelSeries",
                category: "Headsets",
                price: 249.99,
                originalPrice: 349.99,
                image: "./assets/hd1.jpg",
                description: "Premium wireless gaming headset with active noise cancellation"
            },
            {
                id: 4,
                title: "Corsair K70 RGB PRO",
                brand: "Corsair",
                category: "Keyboards",
                price: 129.99,
                originalPrice: 159.99,
                image: "./assets/key2.jpg",
                badge: "LIMITED",
                description: "Mechanical keyboard with Cherry MX switches and per-key RGB"
            },
            {
                id: 5,
                title: "Logitech G Pro X Superlight",
                brand: "Logitech",
                category: "Mice",
                price: 129.99,
                originalPrice: 159.99,
                image: "./assets/mo2.jpg",
                badge: "HOT",
                description: "Ultra-lightweight wireless gaming mouse with HERO sensor"
            },
            {
                id: 6,
                title: "ROG Swift PG32UQX",
                brand: "ASUS ROG",
                category: "Monitors",
                price: 2999.99,
                originalPrice: 3499.99,
                image: "./assets/mon1.jpg",
                description: "32-inch 4K HDR gaming monitor with 144Hz refresh rate"
            },
            {
                id: 7,
                title: "Razer BlackWidow V4 Pro",
                brand: "Razer",
                category: "Keyboards",
                price: 229.99,
                originalPrice: 249.99,
                image: "./assets/key3.jpg",
                badge: "TRENDING",
                description: "Mechanical gaming keyboard with Razer Yellow switches"
            },
            {
                id: 8,
                title: "Corsair Virtuoso RGB Wireless",
                brand: "Corsair",
                category: "Headsets",
                price: 179.99,
                originalPrice: 199.99,
                image: "./assets/hd2.jpg",
                description: "High-fidelity wireless gaming headset with broadcast-grade mic"
            },
            {
                id: 9,
                title: "SteelSeries Apex Pro",
                brand: "SteelSeries",
                category: "Keyboards",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/key4.jpg",
                description: "Adjustable mechanical keyboard with OLED smart display"
            },
            {
                id: 10,
                title: "ROG Chakram X",
                brand: "ASUS ROG",
                category: "Mice",
                price: 149.99,
                originalPrice: 169.99,
                image: "./assets/mo3.jpg",
                description: "Wireless gaming mouse with joystick and customizable design"
            }
        ],
        hotStuffs: [
            {
                id: 11,
                title: "Corsair Dark Core RGB Pro",
                brand: "Corsair",
                category: "Mice",
                price: 79.99,
                originalPrice: 99.99,
                image: "./assets/mo4.jpg",
                description: "Wireless gaming mouse with Qi wireless charging"
            },
            {
                id: 12,
                title: "Razer BlackShark V2 Pro",
                brand: "Razer",
                category: "Headsets",
                price: 179.99,
                originalPrice: 199.99,
                image: "./assets/hd3.jpg",
                description: "Wireless esports headset with THX Spatial Audio"
            },
            {
                id: 13,
                title: "ROG Delta S",
                brand: "ASUS ROG",
                category: "Headsets",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/hd4.jpg",
                description: "Lightweight gaming headset with ESS DAC"
            },
            {
                id: 14,
                title: "Logitech G915 TKL",
                brand: "Logitech",
                category: "Keyboards",
                price: 229.99,
                originalPrice: 249.99,
                image: "./assets/key5.jpg",
                description: "Wireless mechanical keyboard with low-profile switches"
            },
            {
                id: 15,
                title: "Razer Naga Pro",
                brand: "Razer",
                category: "Mice",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/mo5.jpg",
                description: "Modular wireless gaming mouse with interchangeable side plates"
            },
            {
                id: 16,
                title: "SteelSeries Aerox 9",
                brand: "SteelSeries",
                category: "Mice",
                price: 149.99,
                originalPrice: 169.99,
                image: "./assets/mo6.jpg",
                description: "Ultra-lightweight wireless MMO mouse with 12 side buttons"
            },
            {
                id: 17,
                title: "Corsair K100 RGB",
                brand: "Corsair",
                category: "Keyboards",
                price: 219.99,
                originalPrice: 249.99,
                image: "./assets/key6.jpg",
                description: "Mechanical keyboard with OPX optical-mechanical switches"
            },
            {
                id: 18,
                title: "ROG Strix Flare II Animate",
                brand: "ASUS ROG",
                category: "Keyboards",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/key7.jpg",
                description: "Mechanical keyboard with animated LED display"
            },
            {
                id: 19,
                title: "Razer Kraken V3 Pro",
                brand: "Razer",
                category: "Headsets",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/hd5.jpg",
                description: "Wireless gaming headset with haptic feedback"
            },
            {
                id: 20,
                title: "Logitech G733",
                brand: "Logitech",
                category: "Headsets",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/hd6.jpg",
                description: "Wireless gaming headset with LIGHTSYNC RGB"
            }
        ],
        keyboards: [
            {
                id: 21,
                title: "Keychron Q3",
                brand: "Keychron",
                category: "Keyboards",
                price: 169.99,
                originalPrice: 189.99,
                image: "./assets/key8.jpg",
                description: "Custom mechanical keyboard with QMK/VIA support"
            },
            {
                id: 22,
                title: "Ducky One 3",
                brand: "Ducky",
                category: "Keyboards",
                price: 129.99,
                originalPrice: 149.99,
                image: "./assets/key9.jpg",
                description: "Mechanical keyboard with Cherry MX switches"
            },
            {
                id: 23,
                title: "Glorious GMMK Pro",
                brand: "Glorious",
                category: "Keyboards",
                price: 169.99,
                originalPrice: 199.99,
                image: "./assets/key1.jpg",
                description: "75% compact mechanical keyboard with rotary encoder"
            },
            {
                id: 24,
                title: "HyperX Alloy Origins Core",
                brand: "HyperX",
                category: "Keyboards",
                price: 89.99,
                originalPrice: 109.99,
                image: "./assets/key2.jpg",
                description: "TKL mechanical keyboard with HyperX switches"
            },
            {
                id: 25,
                title: "Roccat Vulcan TKL",
                brand: "Roccat",
                category: "Keyboards",
                price: 119.99,
                originalPrice: 139.99,
                image: "./assets/key3.jpg",
                description: "Titan Switch Optical mechanical keyboard"
            },
            {
                id: 26,
                title: "ASUS ROG Falchion",
                brand: "ASUS ROG",
                category: "Keyboards",
                price: 149.99,
                originalPrice: 169.99,
                image: "./assets/key4.jpg",
                description: "65% compact wireless mechanical keyboard"
            },
            {
                id: 27,
                title: "Cooler Master SK622",
                brand: "Cooler Master",
                category: "Keyboards",
                price: 99.99,
                originalPrice: 119.99,
                image: "./assets/key5.jpg",
                description: "Low-profile wireless mechanical keyboard"
            },
            {
                id: 28,
                title: "Razer Huntsman Mini",
                brand: "Razer",
                category: "Keyboards",
                price: 129.99,
                originalPrice: 149.99,
                image: "./assets/key6.jpg",
                description: "60% compact optical switch keyboard"
            },
            {
                id: 29,
                title: "SteelSeries Apex 7 TKL",
                brand: "SteelSeries",
                category: "Keyboards",
                price: 159.99,
                originalPrice: 179.99,
                image: "./assets/key7.jpg",
                description: "Mechanical keyboard with OLED smart display"
            },
            {
                id: 30,
                title: "Logitech G915 TKL",
                brand: "Logitech",
                category: "Keyboards",
                price: 229.99,
                originalPrice: 249.99,
                image: "./assets/key8.jpg",
                description: "Wireless mechanical keyboard with low-profile switches"
            }
        ],
        mice: [
            {
                id: 31,
                title: "Glorious Model O Wireless",
                brand: "Glorious",
                category: "Mice",
                price: 79.99,
                originalPrice: 99.99,
                image: "./assets/mo7.jpg",
                description: "Ultra-lightweight wireless gaming mouse"
            },
            {
                id: 32,
                title: "Logitech G502 X Plus",
                brand: "Logitech",
                category: "Mice",
                price: 159.99,
                originalPrice: 179.99,
                image: "./assets/mo1.jpg",
                description: "Wireless gaming mouse with LIGHTSPEED and LIGHTSYNC"
            },
            {
                id: 33,
                title: "Razer DeathAdder V3 Pro",
                brand: "Razer",
                category: "Mice",
                price: 149.99,
                originalPrice: 169.99,
                image: "./assets/mo2.jpg",
                description: "Wireless ergonomic gaming mouse with Focus Pro 30K sensor"
            },
            {
                id: 34,
                title: "SteelSeries Prime Wireless",
                brand: "SteelSeries",
                category: "Mice",
                price: 129.99,
                originalPrice: 149.99,
                image: "./assets/mo3.jpg",
                description: "Esports-grade wireless gaming mouse"
            },
            {
                id: 35,
                title: "Corsair Sabre RGB Pro",
                brand: "Corsair",
                category: "Mice",
                price: 59.99,
                originalPrice: 79.99,
                image: "./assets/mo4.jpg",
                description: "Ultra-lightweight gaming mouse with 8,000Hz polling"
            },
            {
                id: 36,
                title: "ROG Keris Wireless",
                brand: "ASUS ROG",
                category: "Mice",
                price: 89.99,
                originalPrice: 109.99,
                image: "./assets/mo5.jpg",
                description: "Lightweight wireless gaming mouse with hot-swappable switches"
            },
            {
                id: 37,
                title: "HyperX Pulsefire Haste",
                brand: "HyperX",
                category: "Mice",
                price: 49.99,
                originalPrice: 59.99,
                image: "./assets/mo6.jpg",
                description: "Ultra-lightweight honeycomb gaming mouse"
            },
            {
                id: 38,
                title: "Roccat Kone Pro Air",
                brand: "Roccat",
                category: "Mice",
                price: 129.99,
                originalPrice: 149.99,
                image: "./assets/mo7.jpg",
                description: "Ergonomic wireless gaming mouse with Titan Optical Switch"
            },
            {
                id: 39,
                title: "Cooler Master MM731",
                brand: "Cooler Master",
                category: "Mice",
                price: 79.99,
                originalPrice: 99.99,
                image: "./assets/mo1.jpg",
                description: "Lightweight wireless gaming mouse with 100-hour battery"
            },
            {
                id: 40,
                title: "Logitech G Pro X Superlight",
                brand: "Logitech",
                category: "Mice",
                price: 129.99,
                originalPrice: 159.99,
                image: "./assets/mo2.jpg",
                description: "Ultra-lightweight wireless gaming mouse with HERO sensor"
            }
        ],
        headsets: [
            {
                id: 41,
                title: "HyperX Cloud Alpha Wireless",
                brand: "HyperX",
                category: "Headsets",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/hd1.jpg",
                description: "Wireless gaming headset with 300-hour battery life"
            },
            {
                id: 42,
                title: "SteelSeries Arctis Nova 7",
                brand: "SteelSeries",
                category: "Headsets",
                price: 179.99,
                originalPrice: 199.99,
                image: "./assets/hd2.jpg",
                description: "Multi-platform wireless gaming headset with Sonar software"
            },
            {
                id: 43,
                title: "Razer Barracuda X",
                brand: "Razer",
                category: "Headsets",
                price: 99.99,
                originalPrice: 129.99,
                image: "./assets/hd2.jpg",
                description: "Multi-platform wireless gaming headset"
            },
            {
                id: 44,
                title: "Corsair HS80 RGB Wireless",
                brand: "Corsair",
                category: "Headsets",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/hd3.jpg",
                description: "Wireless gaming headset with broadcast-grade microphone"
            },
            {
                id: 45,
                title: "Logitech G735",
                brand: "Logitech",
                category: "Headsets",
                price: 229.99,
                originalPrice: 249.99,
                image: "./assets/hd4.jpg",
                description: "Wireless gaming headset with LIGHTSYNC RGB"
            },
            {
                id: 46,
                title: "ASUS ROG Delta S Wireless",
                brand: "ASUS ROG",
                category: "Headsets",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/hd5.jpg",
                description: "Wireless gaming headset with ESS DAC"
            },
            {
                id: 47,
                title: "EPOS H3PRO Hybrid",
                brand: "EPOS",
                category: "Headsets",
                price: 249.99,
                originalPrice: 279.99,
                image: "./assets/hd6.jpg",
                description: "Wireless gaming headset with active noise cancellation"
            },
            {
                id: 48,
                title: "Turtle Beach Stealth 700 Gen 2",
                brand: "Turtle Beach",
                category: "Headsets",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/hd7.jpg",
                description: "Wireless gaming headset with Superhuman Hearing"
            },
            {
                id: 49,
                title: "Razer Kraken V3 HyperSense",
                brand: "Razer",
                category: "Headsets",
                price: 199.99,
                originalPrice: 229.99,
                image: "./assets/hd1.jpg",
                description: "Wired gaming headset with haptic feedback"
            },
            {
                id: 50,
                title: "HyperX Cloud II Wireless",
                brand: "HyperX",
                category: "Headsets",
                price: 149.99,
                originalPrice: 179.99,
                image: "./assets/hd2.jpg",
                description: "Wireless gaming headset with virtual 7.1 surround sound"
            }
        ]
    };

    // Initialize the page with all products
    function initializePage() {
        renderProducts('newArrivals', newArrivalsContainer);
        renderProducts('hotStuffs', hotStuffsContainer);
        renderProducts('keyboards', keyboardsContainer);
        renderProducts('mice', miceContainer);
        renderProducts('headsets', headsetsContainer);
    }

    // Render products to a container
    function renderProducts(category, container, filteredProducts = null) {
        container.innerHTML = '';
        const productsToRender = filteredProducts || products[category];

        productsToRender.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }

    // Create product card HTML
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        const discountPercentage = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${product.originalPrice ? `<span class="product-badge" style="left: 10px; background-color: var(--accent-yellow);">-${discountPercentage}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-brand">${product.brand}</p>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="wishlist-btn" data-id="${product.id}"><i class="far fa-heart"></i></button>
                </div>
            </div>
        `;

        return card;
    }

    // Filter products based on selected filters
    function filterProducts() {
        const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
        const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
        const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(cb => cb.value);

        // Filter each category
        Object.keys(products).forEach(category => {
            const container = document.getElementById(`${category}Container`);
            if (!container) return;

            const filtered = products[category].filter(product => {
                // Category filter
                if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
                    return false;
                }

                // Brand filter
                if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand.split(' ')[0])) {
                    return false;
                }

                // Price filter
                if (selectedPrices.length > 0) {
                    let priceMatch = false;
                    selectedPrices.forEach(priceRange => {
                        const [min, max] = priceRange.includes('+')
                            ? [parseInt(priceRange), Infinity]
                            : priceRange.split('-').map(Number);

                        if (product.price >= min && product.price <= max) {
                            priceMatch = true;
                        }
                    });
                    if (!priceMatch) return false;
                }

                return true;
            });

            renderProducts(category, container, filtered);
        });
    }

    // Search products
    function searchProducts() {
        const searchTerm = searchInputBox.value.toLowerCase();

        Object.keys(products).forEach(category => {
            const container = document.getElementById(`${category}Container`);
            if (!container) return;

            const filtered = products[category].filter(product => {
                return (
                    product.title.toLowerCase().includes(searchTerm) ||
                    product.brand.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm)
                );
            });

            renderProducts(category, container, filtered);
        });
    }

    // Event Listeners
    filterToggleBtn.addEventListener('click', () => {
        filterPanel.classList.toggle('active');
    });

    closeFilterBtn.addEventListener('click', () => {
        filterPanel.classList.remove('active');
    });

    applyFiltersBtn.addEventListener('click', () => {
        filterProducts();
        filterPanel.classList.remove('active');
    });

    resetFiltersBtn.addEventListener('click', () => {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        initializePage();
    });

    searchInputBox.addEventListener('keyup', searchProducts);

    closeBanner.addEventListener('click', () => {
        topBanner.style.display = 'none';
    });

    // Initialize the page
    initializePage();

    // Add to cart functionality (basic implementation)
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            showNotification(`Product added to cart!`);
        }

        if (e.target.classList.contains('wishlist-btn') || e.target.closest('.wishlist-btn')) {
            const btn = e.target.classList.contains('wishlist-btn') ? e.target : e.target.closest('.wishlist-btn');
            const icon = btn.querySelector('i');
            btn.classList.toggle('active');
            if (btn.classList.contains('active')) {
                icon.classList.replace('far', 'fas');
                icon.style.color = 'var(--accent-red)';
            } else {
                icon.classList.replace('fas', 'far');
                icon.style.color = '';
            }
        }
    });

    // Show notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification show';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
});