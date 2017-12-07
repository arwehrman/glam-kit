class User < ApplicationRecord
  has_secure_password

  has_many :kits
  has_many :items, through: :kits
end
