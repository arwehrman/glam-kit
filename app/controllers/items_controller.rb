class ItemsController < ApplicationController
  #before_action :set_kit

  def new
    @kit = Kit.find(params[:kit_id])
    @item = Item.new
  end

  def edit
    raise params.inspect

    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
  end

  def create
    @kit = Kit.find(params[:kit_id])
    @item = Item.new(item_params)
    if @item.valid?
      @item.save
      redirect_to kit_path(@kit)
    else
      render :new
    end
  end

  def update
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
    @item.update(item_params)
    if @item.save
      redirect_to kits_path(current_user)
    end
    redirect_to kit_path(@kit)
  end

  def destroy
    Item.find(params[:id]).destroy
    #change the redirect to kit show page not index
    redirect_to kits_path(current_user)
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :brand, :color, :price, :color, :rating, :comment, :kit_id, :category_id)
  end
end
