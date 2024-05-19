document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    toggler.addEventListener('click', function () {
        navbarNav.classList.toggle('show');
    });
});
