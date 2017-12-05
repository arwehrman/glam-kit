class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    @user = User.find_by(username: params[:user][:username])
    #not sure about using the return, may need to refactor with if else
    return redirect_to signin_path unless @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end
end
