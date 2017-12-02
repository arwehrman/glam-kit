Glam Kit
  makeup bag app- tracks users makeup and ratings
  users login
    create a glam kit
      - add items to kit
      - can rate items in kit
      - can add other users items to kit
    see other user's items & ratings

Models
  Kit
    belongs_to user
    has_many items
    has_many categories through :items
      - name

  Item
    belongs_to category
    belong_to kit
    belongs_to user

    What makes an Item?
      - name
      - brand
      - color
      - price
      - rating
      - notes or comments  
      - category_id
      - kit_id

  Category
    has_many items
    has_many kits through items
    
  Users can't add, only select from drop down
      - name

  Users
    has_many kits
    has_many items through kit

      - name
      - email
      - password (probably password_digest)
