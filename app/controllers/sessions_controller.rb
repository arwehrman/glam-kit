class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    if @user = User.find_by(username: params[:user][:username])
    @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_kits_path(@user)
    else
      redirect_to '/signin'
      #render message on redirec to let person know
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end
end
