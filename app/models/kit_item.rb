class KitItem < ApplicationRecord
  belongs_to :kit
  belongs_to :item
end
