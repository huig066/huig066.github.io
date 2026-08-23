(() => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
    }

    const sections = document.querySelectorAll('main section[id]');
    const links = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
            }
        });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach(section => observer.observe(section));

    const year = document.getElementById('currentYear');
    if (year) year.textContent = new Date().getFullYear();
})();
