'use strict';

const scrollingPage = () => {
  // функция для эффектов при прокрутке страницы
  const topMenu = document.querySelector('.top-menu'), //навигационное меню
    btnArrowUp = document.getElementById('totop'); //кнопка скроллинга страницы вверх

  btnArrowUp.style.display = 'none'; //скрывает кнопку скроллинга вверх при обновлении страницы

  window.addEventListener('scroll', () => {
    if (window.scrollY > 187 && window.innerWidth < 768) {
      //меню-бургер при ширине окна меньше 768px и скролле страницы прилипает к верхней границе экрана
      topMenu.style = `
        position: fixed;
        top: 0;
      `;
    } else {
      topMenu.style.position = 'static';
    }

    if (window.scrollY > 781) {
      //кнопка прокрутки страницы вверх появляется только после прокручивания первого блока
      btnArrowUp.style.display = 'block';
    } else {
      btnArrowUp.style.display = 'none';
    }
  });
};

export default scrollingPage;
