class ItemsController < ApplicationController
#need the kit_id to associate items with a kit
  def new
    @kit = Kit.find(params[:kit_id])
    @item = Item.new
  end

  def edit
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
  #need to get the kit-id to pull
  end

  def create
    @item = Item.new(item_params)
    @item.save
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)

  end

  def destroy
    Item.find(params[:id]).destroy
  end

  private
  def item_params
    params.require(:item).permit(:name, :brand, :color, :price, :color, :rating, :comment, :kit_id, :category_id)
  end
end
