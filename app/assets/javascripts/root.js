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

  $('.js-show-overlay--ralli').click(function() {
    $('#main').addClass('ralli-overlay-open');
  });

  $('.js-show-overlay--muzik').click(function() {
    $('#main').addClass('muzik-overlay-open');
  });

  $('.js-close-overlay, .overlay').click(function() {
    $('#main').removeClass('mazlo-overlay-open ralli-overlay-open muzik-overlay-open')
  });

  $('.overlay__content').click(function(e) {
    e.stopPropagation();
  });
});
