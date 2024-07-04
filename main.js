const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const header = document.header

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    // Toggle text based on current mode
    if (body.classList.contains('dark')) {
        themeIcon.classList = 'bx bx-sun';
    } else {
        themeIcon.classList = 'bx bx-moon';
    }

});