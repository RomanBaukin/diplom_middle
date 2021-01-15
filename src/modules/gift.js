'use strict';

const gift = () => {
  //Подарок: открытие модального окна и скрытие самого подарка
  const modalGift = document.getElementById('gift'), //модальное окно с подарком
    gift = document.querySelector('.fixed-gift'); //блок с картинкой подарок

  if (gift) {
    document.addEventListener('click', (event) => {
      const target = event.target;

      if (target.matches('.fixed-gift img')) {
        // при клике на кнопку с подарком открывается модальное окно, а сам подарок исчезает
        modalGift.style.display = 'block';
        gift.style.display = 'none';
      } else if (target.closest('.overlay, .close_icon, .close-btn')) {
        // при клике на подложку или крестик - модальное окно закрывается
        modalGift.style.display = 'none';
      }
    });
  }
};

export default gift;
