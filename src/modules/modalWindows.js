'use strict';

const modalWindows = () => {
  const clubsList = document.querySelector('.clubs-list ul'), //список тренажерных залов
    freeVisitForm = document.getElementById('free_visit_form'), //модальное окно с формой для записи на посещение
    callbackForm = document.getElementById('callback_form'), //модальное окно с формой для обратного звонка
    modalGift = document.getElementById('gift'), //модальное окно с подарком
    gift = document.querySelector('.fixed-gift'); //блок с картинкой подарок
  clubsList.style.display = 'none';

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.matches('.clubs-list>p') && clubsList.style.display === 'none') {
      // при клике по кнопке "выбрать клуб" открывается список клубов
      clubsList.style.display = 'block';
    } else {
      // при повторном клике или клике мимо список закрывается
      clubsList.style.display = 'none';
    }

    if (target.matches('.free-visit>p>a')) {
      // при клике по надписи "записаться на бесплатный визит" открывается модальное окно
      freeVisitForm.style.display = 'block';
    } else if (target.matches('.overlay, .close_icon')) {
      // при клике на подложку или крестик - модальное окно закрывается
      freeVisitForm.style.display = 'none';
    }

    if (target.matches('.callback-btn')) {
      // при клике на кнопку "перезвоните мне" открывается модальное окно
      callbackForm.style.display = 'block';
    } else if (target.matches('.overlay, .close_icon')) {
      // при клике на подложку или крестик - модальное окно закрывается
      callbackForm.style.display = 'none';
    }

    if (target.matches('.fixed-gift img')) {
      // при клике на кнопку с подарком открывается модальное окно, а сам подарок исчезает
      modalGift.style.display = 'block';
      gift.style.display = 'none';
    } else if (target.matches('.overlay, .close_icon, .close-btn')) {
      // при клике на подложку или крестик - модальное окно закрывается
      modalGift.style.display = 'none';
    }
  });
};

export default modalWindows;
