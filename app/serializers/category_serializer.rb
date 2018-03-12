class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :items
  has_many :kits, through: :items
end
