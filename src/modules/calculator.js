'use strict';

const calculator = () => {
  const priceTotal = document.getElementById('price-total'), //для вывода итоговой цены
    calculatorBlock = document.querySelector('.calculator'), //для навешивания слушателя на калькулятор
    inputPromocode = document.getElementById('promocode'), //поле для ввода промокода
    pricesClubs = {
      //массивы с ценами для разных клубов
      mozaika: [1999, 9900, 13900, 19900],
      schelkovo: [2999, 14990, 21990, 24990],
    };

  let selectedClub = 'mozaika', //начальные данные для переменных при обновлении страницы
    selectedMonth = 0,
    promocode = 1;

  //функция для вывода итоговой цены
  const outputPriceTotal = (club, month) => (priceTotal.textContent = Math.floor(pricesClubs[club][month] * promocode));

  if (calculatorBlock) {
    outputPriceTotal(selectedClub, selectedMonth);

    calculatorBlock.addEventListener('change', (event) => {
      //слушатель на изменения в калькуляторе
      const target = event.target;

      if (target.getAttribute('name') === 'club-name') {
        selectedClub = target.value; //какой клуб выбираем, то значение инпута и записывается в переменную
      }

      if (target.getAttribute('name') === 'card-type') {
        selectedMonth = target.value; //в переменную записывается соответстующее значение выбранному кол-ву месяцев
      }

      outputPriceTotal(selectedClub, selectedMonth); //рассчет и вывод итоговой цены
    });

    inputPromocode.addEventListener('input', () => {
      //при введении промокода "ТЕЛО2020" цена уменьшается на 30%
      if (inputPromocode.value === 'ТЕЛО2020') {
        promocode = 0.7;
      } else {
        promocode = 1;
      }
      priceTotal.textContent = outputPriceTotal(selectedClub, selectedMonth);
    });
  }
};

export default calculator;
