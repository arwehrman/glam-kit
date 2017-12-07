class Item < ApplicationRecord
  belongs_to :kit
  belongs_to :category
  has_many :users, through: :kits
end
