class KitsController < ApplicationController

  def index
     if params[:user_id] && current_user
    @kits = current_user.kits

  else
    #should be blank or maybe text saying No Kits
  end
end

  def new
    if params[:user_id] && current_user
      @kit = current_user.kits.build
    @kit.items.build
    else
    #not sure yet where I want this to go or if it really is needed
    end
  end

  def create
    @kit = current_user.kits.build(kit_params)
    if @kit.save
      redirect_to user_kit_path(current_user, @kit)
    else
      render :new
    end
  end

  def show
    if params[:user_id] && current_user
      @kit = current_user.kits.find(params[:id])
    else
      #no items in kit or just blank with option to add items
    end
  end

  def edit
    if params[:user_id] && current_user
    @kit = Kit.find_by(id: params[:id])
    end
  end

  def update
    @kit = Kit.find(params[:id])
    if @kit.update_attributes(kit_params)
      redirect_to @kit
    else
      render 'edit'
    end
  end

  def destroy
    @kit = current_user.kits.find(params[:id])
    @kit.destroy
    redirect_to user_kits_path(current_user)
  end


private
  def kit_params
    params.require(:kit).permit(:name, :user_id, :items_attributes => [:id, :name, :brand, :color, :price, :rating, :comment, :category_id, :_destroy])
  end

end
