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
    has_many categories through :items?


  Item
    belongs_to category
    belongs_to kit
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
    has_many kits through items?
      - name

    create seed data for Category

  Users can't add, only select from drop down
      - name

  Users
    has_many kits
    has_many items through kit

      - name
      - email
      - password (probably password_digest)


  Nested form
    currently nested form is working with items_attributes= method  
    may need to change the select helper for Categories drop down, currently
    pulling directly from the model, change to @categories? Would need to build
    a Category controller


    <h1>Kit Details</h1>
    <%= @kit.name %>
    <p>Items in your glam kit:</p>
    <ul>
      <% @kit.items.each do |i| %>
      <li><%= i.name %> - <%= i.brand %> | Edit | Delete</li>
    <% end %>
    </ul>
    <p>Link to Delete Kit</p>
    <p>Link to go back to Kits</p>
