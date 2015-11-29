(function() {
  "use strict";

  var pathname = window.location.pathname.slice(1) + "Text";

  var headerTexts = {
    Text: ["DESIGN", "DEVELOP", "TEST", "ITERATE"],
    aboutText: ["About"],
    resumeText: ["Resume"],
    blogText: ["Blog"],
    contactText: ["Contact"]
  }

  function typeText(index) {
    if ($('.header-text h2').length == 0) {
      return;
    }
    var element = $('.header-text h2')[index]
    $(element).typed({
      strings: [headerTexts[pathname][index]],
      typeSpeed: 0,
      showCursor: false,
      callback: _.bind(function() {
        index++
        if (index < $('.header-text h2').length) {
          typeText(index);
        } else {
          $('.total-overlay').fadeTo(1000, 0, function() {
            $('.total-overlay').remove();
          });
        }
      }, this)
    });
  }

  typeText(0);
})();
