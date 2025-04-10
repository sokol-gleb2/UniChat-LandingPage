const slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(showNextSlide, 4000);


// Header changing background when scrolled: -------------------------------
const header = document.querySelector('.header');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

menuIcon.addEventListener('click', () => {
    const isOpen = menuIcon.classList.contains('open');
    menuIcon.classList.toggle('open');
    mobileMenu.classList.toggle('open');

    // Optional: prevent scrolling while menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
});
// -------------------------------------------------------------------------

// 2nd section entrance animations: ----------------------------------------
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target); // Optional: if you want it only once
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll('.phone, .cta-buttons, .hero-heading').forEach(el => {
    observer.observe(el);
});
// -------------------------------------------------------------------------