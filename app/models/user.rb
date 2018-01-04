class User < ApplicationRecord
  has_secure_password

  has_many :kits
  has_many :items, through: :kits

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: {minimum: 6}

  def self.find_or_create_by_omniauth(auth_hash)
    oauth_email = auth_hash["info"]["email"]
    where(:email => oauth_email).first_or_create do |user|
        user.password = SecureRandom.hex
        user.name = auth_hash.info.name
      end
  end
end
