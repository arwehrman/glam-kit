class Item < ApplicationRecord
  belongs_to :kit
  belongs_to :category
end
