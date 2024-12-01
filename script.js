// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modern Mobile Navigation
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item, .nav-btn');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('active');
        menuOpen = true;

        // Animate nav items
        navItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;

        // Reset nav items
        navItems.forEach(item => {
            item.style.transitionDelay = '0s';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
    }
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (menuOpen) {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('active');
            menuOpen = false;

            // Reset nav items
            navItems.forEach(item => {
                item.style.transitionDelay = '0s';
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
        }
    });
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    if (menuOpen) {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('active');
        menuOpen = false;

        navItems.forEach(item => {
            item.style.transitionDelay = '0s';
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
    }
});

// Form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    form.reset();
});

// Scroll animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            section.classList.add('active');
        }
    });
});

// Skill cards animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});