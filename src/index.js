'use strict';

import burgerMenu from './modules/burgerMenu';
import scrollingPage from './modules/scrollingPage';
import modalWindows from './modules/modalWindows';
import gift from './modules/gift';
import calculator from './modules/calculator';

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
