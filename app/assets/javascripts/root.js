$(document).ready(function() {

  $(window).scroll(function() {
    if ($(window).scrollTop() > ($('.header-image').height()) - $('.js-navbar').height() ) {
      $('.js-navbar').addClass('black-background');
    } else {
      $('.js-navbar').removeClass('black-background');
    }
  });

  $('.js-show-overlay--mazlo').click(function() {
    $('#main').addClass('mazlo-overlay-open');
  });

  $('.js-close-overlay').click(function() {
    $('#main').removeClass('mazlo-overlay-open')
  });
});
