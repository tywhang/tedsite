$('.js-send-email').click(function() {
  var senderName = $('.js-sender-name').val();
  var senderEmail = $('.js-sender-email').val();
  var body = $('.js-email-body').val();
  
  $.ajax({
    url: '/root/contact_me',
    type: 'POST',
    data: {
      sender_name: senderName,
      sender_email: senderEmail,
      body: body
    }
  });
});
