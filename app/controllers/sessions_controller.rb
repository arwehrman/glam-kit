class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def login
    @user = User.find_by(email: params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      redirect_to kits_path(@user)
    else
      flash.now[:error] = "Invalid username/password"
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to welcome_path
  end

end
