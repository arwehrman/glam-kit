class Kit < ApplicationRecord
  has_many :items

  def items_attributes=(items_attributes)

    items_attributes.each do |i, item_attributes|
      self.items.build(item_attributes)
      
    end
  end
end
