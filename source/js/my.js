"use strict";
var m = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".page-header__list--main-nav");
var userBlock = document.querySelector(".page-header__user-block");
var fb = document.querySelector(".featured__btn")
var mw = document.querySelector(".modal")


m.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("press");
  m.classList.toggle("page-header__toggle--opened");
  menu.classList.toggle("page-header__main-nav-show");
  userBlock.classList.toggle("page-header__main-nav-show");
});

fb.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("order");
  mw.classList.toggle("modal__show");
});

//
//var navMain = document.querySelector('.main-nav');
//var navToggle = document.querySelector('.main-nav__toggle');
//
//navMain.classList.remove('main-nav--nojs');
//
//navToggle.addEventListener('click', function() {
//  if (navMain.classList.contains('main-nav--closed')) {
//    navMain.classList.remove('main-nav--closed');
//    navMain.classList.add('main-nav--opened');
//  } else {
//    navMain.classList.add('main-nav--closed');
//    navMain.classList.remove('main-nav--opened');
//  }
//});
