class SessionsController < ApplicationController

  def welcome
  end

  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      oauth_email = request.env["omniauth.auth"]["info"]["email"]
      if @user = User.find_by(:email => oauth_email)
        session[:user_id] = @user.id
        redirect_to user_kits_path(@user)
      else #create a new user with omniauth
        @user = User.create(:email => oauth_email)
        raise "New User logging in via FB".inspect
        session[:user_id] = @user.id
        redirect_to user_kits_path(@user)
      end
    else
      #regular login
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


end
