class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth_hash)
      session[:user_id] = @user.id
      redirect_to user_kits_path(@user)
    end
  end

  def login
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_kits_path(@user)
    else
      redirect_to '/signin'
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end

end
