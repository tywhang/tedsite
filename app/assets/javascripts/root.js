$(document).ready(function() {
  $('.js-send-email').click(function() {
    var senderName = $('.js-sender-name');
    var senderEmail = $('.js-sender-email');
    var body = $('.js-email-body');

    var isFormValid = true;
    _.each([senderName, senderEmail, body], function(input) {
      if (s.isBlank(s.trim(input.val()))) {
        input.after("<p class='error'>This field is required</p>");
        isFormValid = false;
      }
      $('.error').fadeOut({ duration: 2000 });
    });

    if (!isFormValid) { return; }

    $.ajax({
      url: '/root/contact_me',
      type: 'POST',
      data: {
        sender_name: senderName.val(),
        sender_email: senderEmail.val(),
        body: body.val()
      }
    }).success(function() {
      jQuery.noConflict();
      $('#contact-me-form').modal('hide');
    });
  });
});
