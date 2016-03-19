$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($('.header-image').height()) - $('.js-navbar').height() ) {
      $('.js-navbar').addClass('black-background');
    } else {
      $('.js-navbar').removeClass('black-background');
    }
  });
});
