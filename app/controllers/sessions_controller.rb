class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by(uid: auth['uid']) do |u|
        u.name = auth['info']['name']
        u.email = auth['info']['email']
        u.image = auth['info']['image']
      end
        session[:user_id] = @user.id
        redirect_to user_kits_path(@user)
    else
      @user = User.find_by(email: params[:user][:email])
      if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
        redirect_to user_kits_path(@user)
      else
        redirect_to '/signin'
        #render message on redirec to let person know
      end
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end

private
  def auth
    request.env['omniauth.auth']
  end

end
