$(document).ready(function () {
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
    autoHeight: false,

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

  // // Функция ymaps.ready() будет вызвана, когда
  // // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  // ymaps.ready(init);
  // function init() {
  //   // Создание карты.
  //   var myMap = new ymaps.Map("map", {
  //     // Координаты центра карты.
  //     // Порядок по умолчанию: «широта, долгота».
  //     // Чтобы не определять координаты центра карты вручную,
  //     // воспользуйтесь инструментом Определение координат.
  //     center: [7.890867336450892, 98.29475612623534],
  //     // Уровень масштабирования. Допустимые значения:
  //     // от 0 (весь мир) до 19.
  //     zoom: 15,
  //   });
  //   (myPlacemark1 = new ymaps.Placemark(
  //     [7.890867336450892, 98.29475612623534],
  //     {
  //       // Свойства.
  //       // Содержимое иконки, балуна и хинта.
  //       iconContent: "Grand Hilton Hotel",
  //       balloonContent: "Балун",
  //       hintContent: "Стандартный значок метки",
  //     },
  //     {
  //       // Опции.
  //       // Стандартная фиолетовая иконка.
  //       preset: "twirl#violetIcon",
  //     }
  //   )),
  //     myMap.geoObjects.add(myPlacemark1);
  // }
  $(".parallax-window").parallax({ imageSrc: "./img/newsletter-bg.avif" });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $('[data-toggle="modal"]');
  modalButton.on("click", openModal);
  var closeButton = $(".modal__close");
  closeButton.on("click", closeModal);
  $(".modal__overlay").on("click", closeModal);
  $(document).on("keydown", function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      var modalWrapper = $(".modal__dialog-wrapper");
      $("body").css("overflow", "display");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      modalWrapper.removeClass("modal__dialog-wrapper--visible");
    }
  });
  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalWrapper = $(".modal__dialog-wrapper");
    $("body").css("overflow", "hidden");

    if ($(window).width() >= "1200") {
      $("body").css("padding-right", "17px");
    }

    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalWrapper.addClass("modal__dialog-wrapper--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    $("body").css("overflow", "display");
    $("body").css("padding-right", "0px");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "At least 2 symbols required",
        },
        phone: {
          required: "Please enter your phone number",
          minlength: "At least 11 numbers required",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });

  $(".phone").mask("+7(999) 999-99-99", {
    translation: { 9: { pattern: /[0-9*]/ } },
  });

  AOS.init();
});
