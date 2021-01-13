'use strict';

const burgerMenu = () => {
  // функция для управления меню бургер
  const popupMenu = document.querySelector('.popup-menu'),
    menuButton = document.querySelector('.menu-button');

  menuButton.addEventListener('click', () => {
    popupMenu.style.display = 'flex'; // при нажатии на кнопку бургер-меню открывается попап-меню
  });

  popupMenu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('.close-menu-btn img') || target.matches('.scroll a')) {
      popupMenu.style.display = 'none'; //при нажатии на крестик или любой пункт меню - меню закрывается
    }
  });
};

export default burgerMenu;
