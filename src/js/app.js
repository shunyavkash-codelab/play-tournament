try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {}

//AOS animation
import AOS from 'aos';
AOS.init();


// slick js
require('slick-carousel/slick/slick');

$(document).ready(function () {
    $('.hero-slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });
});



// menu script 
$(document).ready(function(){
    $(".humburg-icon").click(function(){
      $(".download-buttons").toggleClass("show");
      $(".menu").toggleClass("open");
      $("body").toggleClass("body-fixed");
    });
  });