"use strict";
var m = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".page-header__list--main-nav");
var userBlock = document.querySelector(".page-header__user-block");


m.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("press");
  m.classList.toggle("page-header__toggle--opened");
  menu.classList.toggle("page-header__main-nav-show");
  userBlock.classList.toggle("page-header__main-nav-show");
});
