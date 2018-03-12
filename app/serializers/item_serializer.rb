class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand
  belongs_to :kit
  belongs_to :category
end
