class ItemsController < ApplicationController
  def new
    @kit = Kit.find(params[:kit_id])
    @item = Item.new
  end

  def edit
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])

  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to kits_path(current_user)
    else
      render :new
    end
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    if @item.save
    redirect_to kits_path(current_user)
    end
  end

  def destroy
    Item.find(params[:id]).destroy
    redirect_to kits_path(current_user)
  end

  private
  def item_params
    params.require(:item).permit(:name, :brand, :color, :price, :color, :rating, :comment, :kit_id, :category_id)
  end
end
