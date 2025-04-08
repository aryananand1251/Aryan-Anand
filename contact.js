document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contactLink');
    const hireBtn = document.querySelector('.hire-me');
    const getinBtn = document.querySelector('.contact-btn');
    const contactForm = document.getElementById('contactForm');
    const closeBtn = document.getElementById('closeForm');

    // Open modal from sidebar link
    contactLink?.addEventListener('click', (e) => {
        e.preventDefault();
        contactForm.style.display = 'flex';
    });

    // Open modal from Hire Me button
    hireBtn?.addEventListener('click', () => {
        contactForm.style.display = 'flex';
    });

    // Open modal from Get in Touch button
    getinBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        contactForm.style.display = 'flex';
    });

    // Close modal
    closeBtn?.addEventListener('click', () => {
        contactForm.style.display = 'none';
    });

    // Close when clicking outside modal
    window.addEventListener('click', (e) => {
        if (e.target === contactForm) {
            contactForm.style.display = 'none';
        }
    });
});
