class Kit < ApplicationRecord
  has_many :items
  belongs_to :user
  has_many :categories, through: :items

  validates_presence_of :name

  #scope :user_kit, ->  (kit_id){ where kit_id: kit_id }

  def items_attributes=(items_attributes)
    items_attributes.each do |i, item_attributes|
      self.items.build(item_attributes)
    end
  end
end
