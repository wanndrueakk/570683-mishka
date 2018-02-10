"use strict";
var m = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".page-header__list--main-nav");
var userBlock = document.querySelector(".user-block");


m.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("press");
  m.classList.toggle("main-nav__toggle--opened");
  menu.classList.toggle("main-nav__show");
  userBlock.classList.toggle("main-nav__show");
});
