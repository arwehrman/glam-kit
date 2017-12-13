class ItemsController < ApplicationController

  def edit
    @item = Item.find(params[:id])
    @kit = Kit.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

  end

  def destroy
    Item.find(params[:id]).destroy
  end

end
