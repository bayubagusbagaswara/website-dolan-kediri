const menuButton = document.querySelector('.menu-btn input');
const nav = document.querySelector('nav ul');

menuButton.addEventListener('click', function () {
    nav.classList.toggle('slide');
});