class ItemsController < ApplicationController
#need the kit_id to associate items with a kit
  def new
    # if params[:kit_id]
    @kit = Kit.find(:kit_id params[:id])
    @item = Item.new

  end

  def edit
    @item = Item.find(params[:id])
  #need to get the kit-id to pull
  end

  def update
    @item = Item.find(params[:id])
    @item.update_attributes

  end

  def destroy
    Item.find(params[:id]).destroy
  end

end
