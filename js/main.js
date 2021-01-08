$(document).ready(function () {

    $('html').niceScroll({
        cursorcolor: 'navy',
        cursorwidth: '10',
        cursorborder: '1px solid navy',
        zindex: '1000'
    });

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