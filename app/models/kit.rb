class Kit < ApplicationRecord
  has_many :items
  belongs_to :user

  def items_attributes=(items_attributes)

    items_attributes.each do |i, item_attributes|
      self.items.build(item_attributes)

    end
  end
end
