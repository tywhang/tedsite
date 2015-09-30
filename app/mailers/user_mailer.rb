class UserMailer < ApplicationMailer
  default from: 'notifications@example.com'
 
  def contact_me(sender_name, sender_email, body)
    @sender_name
    @sender_email = sender_email
    @body = body
    
    @url  = 'http://example.com/login'
    mail(
      to: "twhang.dev@gmail.com",
      from: @sender_email,
      subject: 'Welcome to My Awesome Site'
    )
  end
end
