class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def new
    @item = Item.new
  end

  def create

  end

  def show
    @item = Item.find(params[:id])
  end

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
