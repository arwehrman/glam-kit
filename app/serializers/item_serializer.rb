class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :category_id, :color, :price, :rating, :comment
  belongs_to :kit
  belongs_to :category
end
