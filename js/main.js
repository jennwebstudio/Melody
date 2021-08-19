$(document).ready(function () {
  var currentFloor = 2;              // переменная с текущим этажом
  var counterUp = $('.counter-up');   // кнопка вверх
  var floorPath = $('.home-image path');   // каждый отдельный этаж в svg
  var counterDown = $('.counter-down');   // кнопка вниз

  // при наведении мышкой на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    currentFloor = $(this).attr('data-floor');   // получаем значение текущего этажа
    $('.counter').text(currentFloor);      // записываем значение этажа в счетчик
  });

  // при клике по кнопке вверх
  counterUp.on('click', function() {
    if (currentFloor < 18) {             // проверка номера текущего этажа на верхнюю границу
      currentFloor++;                    // увеличиваем значение текущего этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматирование 
    $('.counter').text(usCurrentFloor);   // записываем значение этажа в счетчик
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    $(`[data-floor = ${usCurrentFloor}]`).toggleClass('current-floor');  // подсветка текущего этажа 
    };
  });

  // при клике по кнопке вниз
  counterDown.on('click', function() {
    if (currentFloor > 2) {                  // проверка номера текущего этажа на нижнюю границу
      currentFloor--;                        // уменьшаем значение текущего этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматирование 
    $('.counter').text(usCurrentFloor);      // записываем значение этажа в счетчик
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    $(`[data-floor = ${usCurrentFloor}]`).toggleClass('current-floor');    // подсветка текущего этажа 
    };
  });
})