class RateComment < ApplicationRecord
  belongs_to :item
  belongs_to :user  
end
