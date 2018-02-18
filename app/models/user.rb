class User < ApplicationRecord
  has_secure_password

  has_many :kits
  has_many :items, through: :kits
  has_many :rate_comments

  validates :email, presence: true, uniqueness: true
  validates_format_of :email, :with => /\A[^@,\s]+@[^@,\s]+\.[^@,\s]+\z/
  validates :password, presence: true, length: {minimum: 6}

  def self.find_or_create_by_omniauth(auth_hash)
    oauth_email = auth_hash["info"]["email"]
    where(:email => oauth_email).first_or_create do |user|
        user.password = SecureRandom.hex
        user.name = auth_hash.info.name
    end
  end
end
