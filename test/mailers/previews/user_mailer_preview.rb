# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def contact_me
    UserMailer.contact_me('hey', 'yo', 'buddy@example.com')
  end
end
