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
    @item = Item.find(params[:id])
  end

  def update
    @item = Item.find(params[:id])

        if @item.update_attributes(params[:item])
          redirect_to user_kits_path(current_user)
        else
          redirect_to user_kits_path(current_user)
        end
    end


  def destroy
    Item.find(params[:id]).destroy
    redirect_to user_kits_path(current_user)
  end


  private
  def item_params
  end



end
