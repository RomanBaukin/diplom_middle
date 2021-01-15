'use strict';

const calculator = () => {
  const priceTotal = document.getElementById('price-total'), //для вывода итоговой цены
    calculator = document.querySelector('.calculator'), //для навешивания слушателя на калькулятор
    pricesClubs = {
      //массивы с ценами для разных клубов
      mozaika: [1999, 9900, 13900, 19900],
      schelkovo: [2999, 14990, 21990, 24990],
    };

  let selectedClub = 'mozaika', //начальные данные для переменных при обновлении страницы
    selectedMonth = 0;

  priceTotal.textContent = pricesClubs[selectedClub][selectedMonth]; //начальный вывод цены при обновлении страницы

  calculator.addEventListener('change', (event) => {
    //слушатель на изменения в калькуляторе
    const target = event.target;

    if (target.getAttribute('name') === 'club-name') {
      selectedClub = target.value; //какой клуб выбираем, то значение инпута и записывается в переменную
    }

    if (target.getAttribute('name') === 'card-type') {
      selectedMonth = target.value; //в переменную записывается соответстующее значение выбранному кол-ву месяцев
    }

    priceTotal.textContent = pricesClubs[selectedClub][selectedMonth]; //рассчет и вывод итоговой цены
  });
};

export default calculator;
