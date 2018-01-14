class Item < ApplicationRecord
  belongs_to :kit
  belongs_to :category
  
  validates :name, presence: true

  def self.by_category(category_id)
    where(category: category_id)
  end

  def self.by_rating(rating)
    where(rating: rating)
  end
end
