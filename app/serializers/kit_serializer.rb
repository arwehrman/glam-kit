class KitSerializer < ActiveModel::Serializer
  attributes :id, :name
  
  has_many :items
  has_many :categories, through: :items
end
