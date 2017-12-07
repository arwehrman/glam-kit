class KitsController < ApplicationController

  def index
    @kits = Kit.all
  end

  def new
    @kit = Kit.new
    3.times {@kit.items.build}
  end

  def create
    @kit = Kit.new(kit_params)
    if @kit.save
      redirect_to kit_path(@kit)  #redirect to show route
    else
      render :new
    end
  end

  def show
    @kit = Kit.find(params[:id])
  end

private
  def kit_params
    params.require(:kit).permit(:name, :user_id, :items_attributes => [:name, :brand, :color, :price, :rating, :comment, :category_id])
  end

end
