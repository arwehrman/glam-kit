class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def new
  end

  def create
  end

  def show
    @item = Item.find(params[:id])
  end

  def edit

  end

  def update

  end

  def destroy

  end


  private
  def item_params
  end



end
