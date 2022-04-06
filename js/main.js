$(document).ready(function () {


    $('.venobox').venobox();
});

var mixer = mixitup('.section-3 .container');
const navbar = document.querySelector('.header .navbar');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 200) {
        navbar.style.position = 'fixed';
        navbar.style.backgroundColor = 'rgba(216, 216, 216, .9)';
    } else {
        navbar.style.position = 'initial';
        navbar.style.backgroundColor = 'initial';
    }
});

var navlink = document.querySelectorAll(".nav-item");

var activeA = function () {
  for (i = 0; i < navlink.length; i++) {
    if (i == 0) {
      navlink[i].classList.add("active");
    } else {
      navlink[i].classList.remove("active");
    }
  }
};
var activeB = function () {
  for (i = 0; i < navlink.length; i++) {
    if (i == 1) {
      navlink[i].classList.add("active");
    } else {
      navlink[i].classList.remove("active");
    }
  }
};
var activeC = function () {
  for (i = 0; i < navlink.length; i++) {
    if (i == 2) {
      navlink[i].classList.add("active");
    } else {
      navlink[i].classList.remove("active");
    }
  }
};
var activeD = function () {
  for (i = 0; i < navlink.length; i++) {
    if (i == 3) {
      navlink[i].classList.add("active");
    } else {
      navlink[i].classList.remove("active");
    }
  }
};
