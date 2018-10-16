Glam Kit
  makeup bag app- tracks users makeup and ratings
  users login
    create a glam kit
      - add items to kit
      - can rate items in kit

Models
  Kit
    belongs_to user
    has_many items
    has_many categories through :items

  Item
    belongs_to category
    belongs_to kit
    belongs_to user
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
      - name

    create seed data for Category
    User can't add a category, only select from drop down

  Users
    has_many kits
    has_many items through kit

      - name
      - email
      - password (probably password_digest)


User logs in /signin
  - directed to User profile ??? /user/:id or /kits
  - profile page has list of user's kits
  - link to add a new kit /kits/new
  - link to sign out

User's Kit /kits/:kit_id/items
  - list or table of item details
  - link to delete item
    DELETE /kits/:kid_id/items/:id
  - link to edit item
    edit form GET /kits/:kit_id/items/:id/edit
    submission PUT /kits/:kit_id/items/:id
  - link to delete entire kit


JS-jQuery additions

- create Serializers
- index a resource via jQuery
- show a resource via jQuery
- form creates and renders a response w/o page refresh
- must have a method on prototype
- must translate the JSON response into JS Model Objects
