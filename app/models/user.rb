class User < ApplicationRecord
  has_secure_password

  has_many :kits
  has_many :items, through: :kits

  validates :username, presence: true, uniqueness: true
end
