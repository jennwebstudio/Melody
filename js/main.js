$(document).ready(function () {
  var currentFloor = 2;              // переменная с текущим этажом
  var usCurrentFloor;
  var counterUp = $('.counter-up');   // кнопка вверх
  var floorPath = $('.home-image path');   // каждый отдельный этаж в svg
  var counterDown = $('.counter-down');   // кнопка вниз
  var modal = $('.modal');                //модальное окно
  var modalCloseButton = $('.modal-close-button'); // кнопка закрытия модального окна
  var viewFlatsButton = $('.view-flats');    // кнопка просмотра квартир на этаже
  var currentFlat, count;
  var flatPath = $('.flats path');          // каждая отдельная квартира в svg
  var countFlat = $('.flat-link');          // каждая отдельная квартира в списке
  

  // при наведении мышкой на этаж
  floorPath.on('mouseover', function() {
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    currentFloor = $(this).attr('data-floor');   // получаем значение текущего этажа
    $('.counter').text(currentFloor);      // записываем значение этажа в счетчик
  });

  // при наведении мышкой на квартиру рисунок
 flatPath.on('mouseover', function() {
  flatPath.removeClass('current-flat');     // удаление активного класса у всех квартир
  currentFlat = $(this).attr('data-flat');   // получаем значение текущей квартиры
  $(`[data-flat = ${currentFlat}]`).toggleClass('current-flat');  // подсветка текущей квартиры
  count = currentFlat - 40;
  countFlat.removeClass('current-link');      // удаление активного класса у всех квартир в списке
  $('.flat-link').eq(count).toggleClass('current-link');   // подсветка текущей квартиры в списке
   });

   // при наведении на квартиру в списке
  countFlat.on('mouseover', function() {
    countFlat.removeClass('current-link');      // удаление активного класса у всех квартир в списке
        $(this).toggleClass('current-link');        // подсветка текущей квартиры в списке
      count = countFlat.index(this) +40;         // получение номера текущей квартиры в списке
     
    flatPath.removeClass('current-flat');         // удаление активного класса у всех квартир на рисунке
  $(`[data-flat = ${count}]`).toggleClass('current-flat');   // подсветка текущей квартиры на рисунке

  });

  floorPath.on('click', toggleModal);    //при клике на этаж открыть мод.окно
  modalCloseButton.on('click', toggleModal);  // закрыть модальное окно
  viewFlatsButton.on('click', toggleModal);  //показать мод. окно при клике на кнопку просмотра квартир на этаже

  // при клике по кнопке вверх
  counterUp.on('click', function() {
    if (currentFloor < 18) {             // проверка номера текущего этажа на верхнюю границу
      currentFloor++;                    // увеличиваем значение текущего этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматирование 
    $('.counter').text(usCurrentFloor);   // записываем значение этажа в счетчик
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    $(`[data-floor = ${usCurrentFloor}]`).toggleClass('current-floor');  // подсветка текущего этажа 
    }
  });

  // при клике по кнопке вниз
  counterDown.on('click', function() {
    if (currentFloor > 2) {                  // проверка номера текущего этажа на нижнюю границу
      currentFloor--;                        // уменьшаем значение текущего этажа
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});// форматирование 
    $('.counter').text(usCurrentFloor);      // записываем значение этажа в счетчик
    floorPath.removeClass('current-floor');   // удаление активного класса у всех этажей
    $(`[data-floor = ${usCurrentFloor}]`).toggleClass('current-floor');    // подсветка текущего этажа 
    }
  });
  function toggleModal() {
    modal.toggleClass('is-open');}
});