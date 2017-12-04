class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      #raise items_attributes.inspect
      redirect_to user_path(@user)  #redirect to show route
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password_digest)
    #check can't remember if its password_digest or password that pass in params
  end

end
