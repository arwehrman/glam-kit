class ItemsController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = Category.all
    if !params[:rating].blank?
      @items = Item.by_rating(params[:rating])
    elsif !params[:category].blank?
      @items = Item.by_category(params[:category])
    else
      @items = Item.all
      render json: @items
    end
  end

  def highest_rated
    @items = Item.highest_rated
  end

  def new
    @categories = Category.all
    @kit = Kit.find(params[:kit_id])
    @item = Item.new
  end

  def edit
    @categories = Category.all
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
  end

  def create
    @categories = Category.all
    @kit = Kit.find(params[:kit_id])
    @item = @kit.items.build(item_params)
    if @item.valid?
      @item.save
      respond_to do |format|  
        format.html { redirect_to kit_path(@kit) }
        format.json { render json: @item}
        end
    else
      render :new
    end
  end

  def show
    @item = Item.find(params[:id])
    respond_to do |format|
      format.html { redirect_to kit_path(@kit) }
      format.json { render json: @item}
    end
  end

  def update
    @kit = Kit.find(params[:kit_id])
    @item = Item.find(params[:id])
    @item.update(item_params)
      if @item.save
        redirect_to kit_path(@kit)
      else
        render :edit
      end
  end

  def destroy
    @kit = Kit.find(params[:kit_id])
    Item.find(params[:id]).destroy
    redirect_to kit_path(@kit)
  end

  private

  def item_params
    params.require(:item).permit(:id, :name, :brand, :color, :price, :color, :rating, :comment, :kit_id, :category_id,)
  end
end
