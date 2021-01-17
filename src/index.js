'use strict';

import burgerMenu from './modules/burgerMenu';
import scrollingPage from './modules/scrollingPage';
import modalWindows from './modules/modalWindows';
import gift from './modules/gift';
import calculator from './modules/calculator';
import mainSlider from './modules/mainSlider';
import gallerySlider from './modules/gallerySlider';
import carousel from './modules/sliderCarousel';
import maskPhone from './modules/maskPhone';
import sendForm from './modules/sendForm';

// Меню-бургер
burgerMenu();

// Эффекты при прокрутке страницы
scrollingPage();

//Модальные окна и выпадающие меню
modalWindows();

//Подарок: открытие модального окна и скрытие самого подарка
gift();

//Калькулятор абонементов
calculator();

//Главный слайдер
mainSlider();

//Слайдер фотогаллереи
gallerySlider();

//Слайдер карусель
carousel.init();

//Маска для инпутов с телефоном
maskPhone('[name=phone]');

//Отправка форм
sendForm();
