class Item < ApplicationRecord
  has_many :kits, through: :kit_items
  belongs_to :category

  validates :name, presence: true

  def self.by_category(category_id)
    where(category: category_id)
  end

  def self.by_rating(rating)
    where(rating: rating)
  end

  def self.highest_rated
    where(rating:  5)
  end
end
