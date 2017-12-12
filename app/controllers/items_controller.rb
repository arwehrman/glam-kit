class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def new
  end

  def create
  end

  def show
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
  end

  def edit

  end

  def update

  end

  def destroy
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
    @item.destroy

    redirect_to user_kit_path(@kit)

  end


  private
  def item_params
  end



end
