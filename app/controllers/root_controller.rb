class RootController < ApplicationController
  def index
  end

  def contact_me subject, body, sender_email
    UserMailer.contact_me(subject, body, sender_email).deliver_now
  end
end
