class KitsController < ApplicationController

  def index
    @kits = Kit.all
  end

  def new
    @kit = Kit.new
  end

  def show
    @kit = Kit.find(params[:id])
  end

  def create
    @kit = Kit.new(kit_params)
    @kit.save
    #raise params.inspect
    redirect_to kit_path(@kit)
  end



private
  def kit_params
    params.require(:kit).permit(:name)
  end

end
