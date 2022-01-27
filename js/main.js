const hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const sliderReviews = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [7.890867336450892, 98.29475612623534],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 15,
  });
  (myPlacemark1 = new ymaps.Placemark(
    [7.890867336450892, 98.29475612623534],
    {
      // Свойства.
      // Содержимое иконки, балуна и хинта.
      iconContent: "Grand Hilton Hotel",
      balloonContent: "Балун",
      hintContent: "Стандартный значок метки",
    },
    {
      // Опции.
      // Стандартная фиолетовая иконка.
      preset: "twirl#violetIcon",
    }
  )),
    myMap.geoObjects.add(myPlacemark1);
}
$('.parallax-window').parallax({imageSrc: '../img/newsletter-bg.jpg'});

