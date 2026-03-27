// Delta Cert - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    const loader = document.getElementById('ct-loadding');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 500);
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.ct-main-menu');
    const mainNavigation = document.querySelector('.ct-main-navigation');
    let backdrop = document.querySelector('.mobile-menu-backdrop');
    
    // Create backdrop if it doesn't exist
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'mobile-menu-backdrop';
        document.body.appendChild(backdrop);
    }
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = mainMenu.classList.contains('active');
            mainMenu.classList.toggle('active');
            this.classList.toggle('active');
            backdrop.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (isActive) {
                document.body.style.overflow = '';
            } else {
                document.body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking backdrop
        backdrop.addEventListener('click', function() {
            mainMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mainMenu.classList.contains('active') && 
                !mainMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target) &&
                !backdrop.contains(e.target)) {
                mainMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                backdrop.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close menu when clicking a menu link
        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainMenu.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    backdrop.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // Search overlay
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchField = document.querySelector('.search-field');

    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.add('active');
            if (searchField) {
                setTimeout(() => searchField.focus(), 100);
            }
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Sticky header
    const header = document.getElementById('ct-header-wrap');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (header) {
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        lastScroll = currentScroll;
    });

    // Dropdown menus for mobile
    const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children > a');
    
    menuItemsWithChildren.forEach(item => {
        item.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const parent = this.parentElement;
                const subMenu = parent.querySelector('.sub-menu');
                
                if (subMenu) {
                    parent.classList.toggle('active');
                    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });

    // Animate on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe service cards and feature items
    document.querySelectorAll('.service-card, .feature-item').forEach(item => {
        observer.observe(item);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .feature-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .service-card.animate-in,
    .feature-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .ct-header-wrap.scrolled {
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    @media (max-width: 768px) {
        .sub-menu {
            display: none;
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            padding-left: 20px;
        }

        .menu-item-has-children.active .sub-menu {
            display: block;
        }
    }
`;
document.head.appendChild(style);
