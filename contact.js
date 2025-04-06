document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contactLink');
    const hireBtn = document.querySelector('.hire-me');
    const contactForm = document.getElementById('contactForm');
    const closeBtn = document.getElementById('closeForm');

    // Open modal
    contactLink?.addEventListener('click', (e) => {
        e.preventDefault();
        contactForm.style.display = 'flex';
    });

    hireBtn?.addEventListener('click', () => {
        contactForm.style.display = 'flex';
    });

    // Close modal
    closeBtn?.addEventListener('click', () => {
        contactForm.style.display = 'none';
    });

    // Close when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === contactForm) {
            contactForm.style.display = 'none';
        }
    });
});
