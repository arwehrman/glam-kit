class KitSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_many :items
  has_many :categories, through: :items
end
