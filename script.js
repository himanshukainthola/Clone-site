const toggleButton = document.querySelector('#nav-toggle');
const navlinks = document.querySelector('#nav-links');

toggleButton.addEventListener('click', () => {
    navlinks.classList.toggle('active');
})