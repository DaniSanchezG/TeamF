let button1 = document.querySelector('#botonPruebaScrollLeft');
let button2 = document.querySelector('#botonPruebaScrollRight');
let galery = document.querySelector('.container-gallery');
let galeryMovement = 0;
console.log(galery);

button2.addEventListener('click', () => {
    galery.scrollTo({
        left: galeryMovement += 540,
        behavior: 'smooth'
    });
});

button1.addEventListener('click', () => {
    galery.scrollTo({
        left: galeryMovement -= 540,
        behavior: 'smooth'
    });
});