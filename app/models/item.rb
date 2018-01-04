class Item < ApplicationRecord
  belongs_to :kit
  belongs_to :category
  has_many :users, through: :kits

  validates :rating, inclusion: { in: 1..5 }
  validates :name, presence: true

#create a method sorting items by category
  def self.by_category(category_id)
    where(cateory_id)
  end

#create a method sorting items by Rating
  def self.by_rating(rating)
    where(rating: rating)
  end
end
