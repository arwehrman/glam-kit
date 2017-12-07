class Category < ApplicationRecord
  has_many :items
  has_many :kits, through: :items
end
