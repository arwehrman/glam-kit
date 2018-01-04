class KitsController < ApplicationController
 before_action :authenticate_user!

  def index
    @kits = current_user.kits
  end

  def new
    @categories = Category.all
    @kit = current_user.kits.build
    @kit.items.build
  end

  def create
    @kit = current_user.kits.build(kit_params)
    if @kit.save
      redirect_to kit_path(@kit)
    else
      render :new
    end
  end

  def show
    @kit = current_user.kits.find(params[:id])
  end

  def edit
    @kit = Kit.find_by(params[:id])
  end

  def update
    @kit = Kit.find(params[:id])
    if @kit.update_attributes(kit_params)
      redirect_to @kit
    else
      render :edits
    end
  end

  def destroy
    @kit = current_user.kits.find(params[:id])
    @kit.destroy
    flash[:success] = "Kit has been deleted"
    redirect_to kits_path(current_user)
  end


private
  def kit_params
    params.require(:kit).permit(:id, :name, :user_id, :items_attributes => [:id, :name, :brand, :color, :price, :rating, :comment, :category_id, :_destroy])
  end

end
