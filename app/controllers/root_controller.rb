class RootController < ApplicationController
  def index
  end

  def contact_me
    sender_name = params[:sender_name]
    sender_email = params[:sender_email]
    body = params[:body]

    UserMailer.contact_me(sender_name, sender_email, body).deliver_now
    render json: {}, status: 200
  end
end
