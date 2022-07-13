const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

/* const changeImage = document.getElementById('deepearth');
changeImage.src  = "images/mobile/image-deep-earth.jpg"; */

navToggle.addEventListener('click', () => {
    console.log('hello')
    nav.classList.toggle('nav--visible');
})