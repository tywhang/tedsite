class UserMailer < ApplicationMailer
  default from: 'notifications@example.com', subject: 'Welcome to My Awesome Site'
 
  def contact_me(subject, body, sender_email)
    @subject = subject
    @body = body
    @sender_email = sender_email
    @url  = 'http://example.com/login'
    mail(to: "twhang.dev@gmail.com", subject: subject, from: @sender_email)
  end
end
