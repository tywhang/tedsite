$(document).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('.navbar').addClass('scroll-nav-bar', { duration: 1000 });
  } else {
    $('.navbar').removeClass('scroll-nav-bar', { duration: 1000 });
  }
});