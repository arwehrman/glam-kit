class Kit < ApplicationRecord
  has_many :kit_items
  has_many :items, through: :kit_items, dependent: :destroy
  belongs_to :user
  has_many :categories, through: :items

  validates :name, presence: true

  def items_attributes=(items_attributes)
    items_attributes.each do |i, item_attributes|
      self.items.build(item_attributes)
    end
  end
end
