'use strict';

const mainSlider = () => {
  const mainSlider = document.querySelector('.main-slider'), //блок главного слайдера
    slides = mainSlider.querySelectorAll('.slide'); //коллекция всех слайдов

  let currentSlide = 0, //значение текущего слайда
    interval;

  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none'; //функция для скрытия предыдущего слайда
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'flex'; //функция для показа следующего слайда
  };

  const autoPlaySlide = () => {
    //функция автопрокрутки слайдов
    prevSlide(slides, currentSlide);
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide);
  };

  const startSlide = (time = 1500) => {
    // функция запуска автопрокрутки слайдера, интервал по умолчанию 1,5 сек
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    // функция остановки автопрокрутки
    clearInterval(interval);
  };

  mainSlider.addEventListener('mouseover', () => {
    //при наведении мышью на слайдер автопрокрутка останавливается
    stopSlide();
  });

  mainSlider.addEventListener('mouseout', () => {
    //убрали мышь со слайдера - автопрокрутка запускается
    startSlide();
  });

  startSlide();
};

export default mainSlider;
