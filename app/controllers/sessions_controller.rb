class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user.authenticate(params[:user][:password])
      redirect_to signin_path
    else
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end
end
