var pageHeader = document.querySelector(".page-header__main-nav");
var menuToggle = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list--main-nav");
var userBlock = document.querySelector(".page-header__user-block");

pageHeader.classList.remove("main-nav--nojs");
userBlock.classList.remove("main-nav--nojs");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  menuToggle.classList.toggle("main-nav__toggle--opened");
  menu.classList.toggle("page-header__main-nav-show");
  userBlock.classList.toggle("page-header__main-nav-show");
});


//модальник

var order = document.querySelectorAll(".button--order");
var modalPopup = document.querySelector(".modal");

for (var i = 0; i < order.length; i++) {
  order[i].addEventListener("click", function (event) {
    event.preventDefault();
    modalPopup.classList.add("modal--show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modalPopup.classList.contains("modal--show")) {
      modalPopup.classList.remove("modal--show");
    }
  }
});

// Карта
var yandexMap = document.querySelector(".yandex-map");
if(yandexMap !== null) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map("yandex-map", {
      center: [59.938631, 30.323055],
      zoom: 17
    }, {
      searchControlProvider: "yandex#search"
    }),
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка"
      }, {
        iconLayout: "default#image",
        iconImageHref: "./img/icon-map-pin.svg",
        iconImageSize: [66, 100],
        iconImageOffset: [-35, -100]
      });
    myMap.geoObjects
      .add(myPlacemark);
  });
}
