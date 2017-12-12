class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def new
  end

  def create
  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy
    Item.find(params[:id]).destroy
    redirect_to user_kits_path(current_user)
  end


  private
  def item_params
  end



end
