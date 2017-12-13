class ItemsController < ApplicationController

  def new
    @item = Item.new
  end

  def edit
    @item = Item.find(params[:id])
  #need to get the kit-id to pull
  end

  def update
    @item = Item.find(params[:id])

  end

  def destroy
    Item.find(params[:id]).destroy
  end

end
