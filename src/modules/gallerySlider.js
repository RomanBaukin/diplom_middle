'use strict';

const gallerySlider = () => {
  const gallerySlider = document.querySelector('.gallery-slider'), //блок слайдера фотогаллереи
    slides = gallerySlider.querySelectorAll('.slide'), //коллекция всех слайдов
    dots = document.querySelector('.slider-dots'); //список для точек пагинации

  let currentSlide = 0, //значение текущего слайда
    interval;

  const renderDots = () => {
    //функция для рендера точек пагинации по количеству слайдов
    for (let i = 0; i < slides.length; i++) {
      const li = document.createElement('li');
      li.classList.add('dot');
      if (i === 0) {
        li.classList.add('slick-active');
      }
      dots.append(li);
    }
  };

  renderDots();

  const dot = dots.querySelectorAll('.dot');

  const prevSlide = (elem, index) => {
    elem[index].style.display = 'none'; //функция для скрытия предыдущего слайда
  };

  const prevDot = (elem, index, strClass) => {
    elem[index].classList.remove(strClass); //функция для удаления класса у элемента
  };

  const nextSlide = (elem, index) => {
    elem[index].style.display = 'flex'; //функция для показа следующего слайда
  };

  const nextDot = (elem, index, strClass) => {
    elem[index].classList.add(strClass); //функция для добавления класса у элемента
  };

  gallerySlider.addEventListener('click', (event) => {
    //слушатель события клик на слайдере
    event.preventDefault();

    const target = event.target;

    //если клик не по кнопкам или точкам пагинации, то выходим из функции
    if (!target.matches('.slider-arrow span, span img, .dot')) {
      return;
    }

    prevSlide(slides, currentSlide); //предыдущий слайд скрывается
    prevDot(dot, currentSlide, 'slick-active'); // у текущей точки пагинации удалется класс активности

    if (target.matches('.next span img, .next span')) {
      //если клик по кнопке вправо, то текущий счетчик слайда увеличвается на 1
      currentSlide++;
    } else if (target.matches('.prev span img, .prev span')) {
      //если клик по кнопке влево, то текущий счетчик слайда уменьшается на 1
      currentSlide--;
    } else if (target.matches('.dot')) {
      //если клик по точке пагинации, то показывается соответсвующий слайд
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      //если текущее значение счетчика слайдов больше количества слайдов, то счетчик обнуляется
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      //если текущее значение счетчика слайдов меньше нуля, то счетчику присвается индекс последнего слайда
      currentSlide = slides.length - 1;
    }
    nextSlide(slides, currentSlide); //показывается следующий слайд
    nextDot(dot, currentSlide, 'slick-active'); // на следующую точку пагинации добавляется класс активности
  });

  const autoPlaySlide = () => {
    //функция автопрокрутки слайдов
    prevSlide(slides, currentSlide);
    prevDot(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide);
    nextDot(dot, currentSlide, 'slick-active');
  };

  const startSlide = (time = 1500) => {
    // функция запуска автопрокрутки слайдера, интервал по умолчанию 1,5 сек
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    // функция остановки автопрокрутки
    clearInterval(interval);
  };

  gallerySlider.addEventListener('mouseover', (event) => {
    //при наведении мыши на кнопки или точки пагинации автопрокрутка останавливается
    if (event.target.matches('.slider-arrow span, span img, .dot')) {
      stopSlide();
    }
  });

  gallerySlider.addEventListener('mouseout', (event) => {
    //убрали мышь с кнопок или точек пагинации - автопрокрутка запускается
    if (event.target.matches('.slider-arrow span, span img, .dot')) {
      startSlide();
    }
  });

  startSlide();
};

export default gallerySlider;
