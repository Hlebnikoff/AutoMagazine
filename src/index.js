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
  const swiperGallery = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.dot-second',
      prevEl: '.dot-first',
    }
  });

  const swiperPress = new Swiper('.press__swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.dot-second',
      prevEl: '.dot-first',
    }
  });

// Событие точек в блоке Press
  let dotFirst = document.querySelector('.dot-first')
  let dotSecond = document.querySelector('.dot-second')

  document.querySelector('.dot-first').addEventListener('click', () => {
    swiperPress.slideTo(0);
    if (dotFirst.classList.contains('active') === false & dotSecond.classList.contains('active') === true) {
      dotFirst.classList.add('active');
      dotSecond.classList.remove('active');
    }
  })

  document.querySelector('.dot-second').addEventListener('click', () => {
    swiperPress.slideTo(1);
    if (dotSecond.classList.contains('active') === false & dotFirst.classList.contains('active') === true) {
      dotSecond.classList.add('active');
      dotFirst.classList.remove('active');
    }
  })

// Навигация стрелками
  document.querySelector('.arrow__left').addEventListener('click', () => {
    swiperGallery.slidePrev();
  });

  document.querySelector('.arrow__right').addEventListener('click', () => {
    swiperGallery.slideNext();
  });

// Событие на кнопку подписки
  let ScribbleInput = document.querySelector('.scribble__form-input');
  let ScribbleBtn = document.querySelector('.scribble__form-btn');

  ScribbleBtn.addEventListener('click', () => {
    if(ScribbleInput.value !== '') {
      ScribbleBtn.textContent = 'Готово!'
    }
  })
})
