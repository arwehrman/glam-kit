class KitsController < ApplicationController

  def index
    @kits = Kit.all
  end

  def new
    @kit = Kit.new
    3.times {@kit.items.build}
  end

  def show
    @kit = Kit.find(params[:id])
  end

  def create
    @kit = Kit.new(kit_params)
    if @kit.save
      #raise items_attributes.inspect
      redirect_to kit_path(@kit)  #redirect to show route
    else
      render :new
    end
  end



private
  def kit_params
    params.require(:kit).permit(:name, :items_attributes => [:name, :brand, :color, :price, :rating, :comment, :category_id])
  end

end
