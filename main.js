const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    console.log('hello')
    nav.classList.toggle('nav--visible');
})