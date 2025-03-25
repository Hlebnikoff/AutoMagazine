import './assets/styles/style.scss';
import './assets/images/logo.png';
import './assets/images/car.png';
import './assets/images/gallery1.png';
import './assets/images/gallery2.png';
import './assets/images/gallery3.png';
import './assets/images/left.svg'
import './assets/images/right.svg'

import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
});

// Навигация стрелками
document.querySelector('.arrow__left').addEventListener('click', () => {
    swiper.slidePrev();
});

document.querySelector('.arrow__right').addEventListener('click', () => {
    swiper.slideNext();
});
})
